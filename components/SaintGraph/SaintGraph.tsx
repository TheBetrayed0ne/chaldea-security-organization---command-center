
// File: components/SaintGraph/SaintGraph.tsx
import React, { useState, useMemo, useEffect } from 'react';
import { generateServantData } from '../../services/geminiService.ts';
import { Servant } from '../../types.ts';
import { RECORDED_SERVANTS } from '../../data/servantData.ts';
import { soundService } from '../../services/soundService.ts';
import { useGlobalStatus } from '../../context/StatusContext.tsx';

import { DEPARTMENTS } from './config/departments.ts';
import { HAZARDS } from './config/hazards.ts';
import { ALL_CLASSES } from './config/classes.ts';
import { ALIGNMENTS } from './config/alignments.ts';
import { ActiveTab, SaintGraphFilters } from './types.ts';
import { getRolePolicy } from './policy/rolePolicy.ts';
import { filterServants } from './utils/filterServants.ts';

import { FilterSection } from './components/FilterSection.tsx';
import { ServantCard } from './components/ServantCard.tsx';
import { SyncModal } from './components/SyncModal.tsx';
import { DetailOverlay } from './detail/DetailOverlay.tsx';

const SaintGraph: React.FC = () => {
  const { status } = useGlobalStatus();
  const policy = useMemo(() => getRolePolicy(status.userRole), [status.userRole]);
  
  // Persistence Helper
  const savedFilters = useMemo(() => {
    try {
      const saved = localStorage.getItem('CHALDEA_SG_FILTERS');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      console.warn("Chaldea OS: Failed to restore filter buffer.", e);
      return null;
    }
  }, []);

  // State
  const [search, setSearch] = useState(savedFilters?.search || '');
  const [activeTab, setActiveTab] = useState<ActiveTab>('Overview');
  const [allServants, setAllServants] = useState<Servant[]>(RECORDED_SERVANTS);
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncName, setSyncName] = useState('');
  const [showSyncModal, setShowSyncModal] = useState(false);
  const [classFilter, setClassFilter] = useState<string>(savedFilters?.classFilter || 'All');
  const [deptFilters, setDeptFilters] = useState<string[]>(savedFilters?.deptFilters || []);
  const [hazardFilters, setHazardFilters] = useState<string[]>(savedFilters?.hazardFilters || []);
  const [alignmentFilters, setAlignmentFilters] = useState<string[]>(savedFilters?.alignmentFilters || []);
  const [currentServant, setCurrentServant] = useState<Servant | null>(null);

  // Persistence Effect
  useEffect(() => {
    localStorage.setItem('CHALDEA_SG_FILTERS', JSON.stringify({
      search,
      classFilter,
      deptFilters,
      hazardFilters,
      alignmentFilters
    }));
  }, [search, classFilter, deptFilters, hazardFilters, alignmentFilters]);

  // Derived state
  const isFiltered = useMemo(() => {
    return classFilter !== 'All' || deptFilters.length > 0 || hazardFilters.length > 0 || alignmentFilters.length > 0 || search !== '';
  }, [classFilter, deptFilters, hazardFilters, alignmentFilters, search]);

  const filtered = useMemo(() => {
    const filters: SaintGraphFilters = { search, classFilter, deptFilters, hazardFilters, alignmentFilters };
    return filterServants(allServants, filters);
  }, [search, classFilter, deptFilters, hazardFilters, alignmentFilters, allServants]);

  // Effects
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && currentServant) {
        soundService.playClick();
        setCurrentServant(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentServant]);

  // Handlers
  const selectServant = (s: Servant) => {
    soundService.playSelect();
    setCurrentServant(s);
    setActiveTab('Overview');
  };

  const handleSyncNew = async () => {
    if (!syncName.trim() || isSyncing) return;
    setIsSyncing(true);
    soundService.playStartup();
    try {
      const newServant = await generateServantData(syncName);
      setAllServants(prev => [newServant, ...prev]);
      setSyncName('');
      setShowSyncModal(false);
      selectServant(newServant);
    } catch (err) {
      console.error("Sync Failed", err);
    } finally {
      setIsSyncing(false);
    }
  };

  const clearAllFilters = () => {
    soundService.playTransition();
    setClassFilter('All');
    setDeptFilters([]);
    setHazardFilters([]);
    setAlignmentFilters([]);
    setSearch('');
  };

  const toggleFilter = (list: string[], setList: React.Dispatch<React.SetStateAction<string[]>>, val: string) => {
    soundService.playClick();
    if (val === 'All') {
      setList([]);
    } else {
      setList(prev => 
        prev.includes(val) 
          ? prev.filter(item => item !== val) 
          : [...prev, val]
      );
    }
  };

  return (
    <div className="h-full flex flex-col font-sans relative">
      <header className="px-8 py-6 border-b border-slate-200 dark:border-slate-900 flex justify-between items-end bg-white/60 dark:bg-slate-950/60 backdrop-blur-md sticky top-0 z-20">
        <div>
          <h2 className="text-2xl font-black text-black dark:text-slate-100 tracking-tighter uppercase flex items-center gap-3">
            Personnel & Containment Registry
            <span className="text-[10px] font-mono text-slate-600 bg-slate-100 dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">SHEBA_LINK_V4</span>
          </h2>
          <p className="text-[10px] text-slate-500 font-mono mt-1 uppercase tracking-widest">
            Master Clearance Required // Active Nodes: {allServants.length}
          </p>
        </div>
        <div className="flex gap-4">
          <input 
            type="text" 
            placeholder="FILTER BY ID/NAME..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded px-4 py-2 text-[10px] font-mono text-slate-700 dark:text-slate-300 w-64 focus:outline-none focus:border-blue-500 transition-all"
          />
          {policy.canSyncNew && (
            <button 
              onClick={() => { soundService.playSelect(); setShowSyncModal(true); }}
              className="px-6 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded shadow-lg shadow-blue-900/20 hover:bg-blue-500 transition-all"
            >
              Sync New Signature
            </button>
          )}
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <aside className="w-72 border-r border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-950/40 p-6 space-y-6 overflow-y-auto custom-scrollbar">
          {isFiltered && (
            <button 
              onClick={clearAllFilters}
              className="w-full py-2 mb-4 bg-rose-950/20 border border-rose-900/50 text-rose-600 dark:text-rose-500 text-[10px] font-black uppercase tracking-widest rounded hover:bg-rose-900/40 transition-all animate-in fade-in slide-in-from-top-2"
            >
              Clear All Filters ✕
            </button>
          )}

          <FilterSection 
            label="Class Prototype" 
            activeValues={[classFilter]} 
            onToggle={(v) => { soundService.playClick(); setClassFilter(v); }} 
            options={['All', ...ALL_CLASSES]} 
            multi={false}
          />
          <FilterSection 
            label="Institutional Dept" 
            activeValues={deptFilters.length === 0 ? ['All'] : deptFilters} 
            onToggle={(v) => toggleFilter(deptFilters, setDeptFilters, v)} 
            options={['All', ...DEPARTMENTS]} 
            multi={true}
          />
          <FilterSection 
            label="Hazard Profile" 
            activeValues={hazardFilters.length === 0 ? ['All'] : hazardFilters} 
            onToggle={(v) => toggleFilter(hazardFilters, setHazardFilters, v)} 
            options={['All', ...HAZARDS]} 
            multi={true}
          />
          <FilterSection 
            label="Alignment Filter" 
            activeValues={alignmentFilters.length === 0 ? ['All'] : alignmentFilters} 
            onToggle={(v) => toggleFilter(alignmentFilters, setAlignmentFilters, v)} 
            options={['All', ...ALIGNMENTS]} 
            multi={true}
            defaultOpen={false}
          />
        </aside>

        <main className="flex-1 overflow-y-auto p-8 bg-slate-100/30 dark:bg-slate-900/10 custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map(s => (
              <ServantCard 
                key={s.id} 
                servant={s} 
                isActive={currentServant?.id === s.id} 
                onSelect={selectServant} 
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center opacity-20 py-40">
              <div className="text-6xl mb-4 text-slate-400">∅</div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500">No Matches in Local Buffer</p>
            </div>
          )}
        </main>

        {showSyncModal && (
          <SyncModal 
            isSyncing={isSyncing} 
            syncName={syncName} 
            onNameChange={setSyncName} 
            onSync={handleSyncNew} 
            onClose={() => setShowSyncModal(false)} 
          />
        )}

        {currentServant && (
          <DetailOverlay 
            servant={currentServant} 
            activeTab={activeTab} 
            policy={policy}
            onTabChange={setActiveTab} 
            onClose={() => { soundService.playClick(); setCurrentServant(null); }} 
          />
        )}
      </div>
    </div>
  );
};

export default SaintGraph;
