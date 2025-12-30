
import React, { useState, useMemo } from 'react';
import { Anomaly } from '../types.ts';
import { soundService } from '../services/soundService.ts';

/**
 * CHALDEA TACTICAL DATA: LOCALIZED ANOMALIES
 */
const MOCK_ANOMALIES: Anomaly[] = [
  { id: 'AL-01', title: 'Spiritron Flux Leak', location: 'Sector G-04', severity: 'Moderate', status: 'Open', description: 'Localized leakage of high-density spiritrons. Hazard to non-magus staff.', timestamp: '14:22' },
  { id: 'AL-02', title: 'Conceptual Overlap', location: 'Library Archives', severity: 'Major', status: 'Monitoring', description: 'Historical texts becoming self-editing. Murasaki Shikibu is investigating.', timestamp: '12:05' },
  { id: 'AL-03', title: 'Frostbite Zone Alpha', location: 'Wing B Vents', severity: 'Minor', status: 'Monitoring', description: 'Unexplained temperature drop to -50C. Kyle suspected of loitering.', timestamp: '09:30' },
  { id: 'AL-04', title: 'Singularity Echo', location: 'Training Hall', severity: 'Catastrophic', status: 'Open', description: 'Ghostly images of Tiamat manifesting. Emergency containment active.', timestamp: '03:15' },
  { id: 'AL-05', title: 'Mana Grid Spike', location: 'Power Core', severity: 'Moderate', status: 'Resolved', description: 'Brief spike in mana output. Cause: Merlin laughing too hard.', timestamp: 'Yesterday' },
];

const Anomalies: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [selectedId, setSelectedId] = useState<string | null>(null);

  // Fix: Define 'filtered' using useMemo based on the 'filter' state
  /**
   * Filtered anomalies based on current dashboard status
   */
  const filtered = useMemo(() => {
    return filter === 'All' ? MOCK_ANOMALIES : MOCK_ANOMALIES.filter(a => a.status === filter);
  }, [filter]);

  // Fix: Define 'selected' using useMemo to find the anomaly by 'selectedId'
  /**
   * Detailed view for selected anomaly record
   */
  const selected = useMemo(() => {
    return MOCK_ANOMALIES.find(a => a.id === selectedId);
  }, [selectedId]);

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-black text-black dark:text-slate-100 uppercase tracking-tighter">Localized Anomaly Index</h2>
          <p className="text-[10px] font-mono text-rose-600 dark:text-rose-500 uppercase tracking-widest mt-1">Status: Active Monitoring // TRISMEGISTUS_SUBVIEW</p>
        </div>
        <div className="flex gap-2">
          {['All', 'Open', 'Monitoring', 'Resolved'].map(s => (
            <button 
              key={s} 
              onClick={() => { soundService.playClick(); setFilter(s); }}
              className={`px-3 py-1 text-[10px] font-bold uppercase rounded border transition-all ${filter === s ? 'bg-rose-600 text-white border-rose-400' : 'bg-white dark:bg-slate-900 text-slate-500 border-slate-200 dark:border-slate-800'}`}
            >
              {s}
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-3 space-y-2">
          {/* Fix: use the 'filtered' variable defined above */}
          {filtered.map(a => (
            <button 
              key={a.id}
              onClick={() => { soundService.playSelect(); setSelectedId(a.id); }}
              className={`w-full flex items-center justify-between p-4 rounded border text-left transition-all ${selectedId === a.id ? 'bg-slate-100 dark:bg-slate-800 border-rose-400 dark:border-rose-500/50' : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:border-slate-700 shadow-sm dark:shadow-none'}`}
            >
              <div className="flex items-center gap-6">
                <div className={`w-2 h-2 rounded-full ${
                  a.severity === 'Catastrophic' ? 'bg-rose-500 shadow-[0_0_8px_#f43f5e]' :
                  a.severity === 'Major' ? 'bg-orange-500' :
                  a.severity === 'Moderate' ? 'bg-amber-500' : 'bg-slate-400 dark:bg-slate-700'
                }`}></div>
                <div>
                  <h3 className="text-sm font-bold text-slate-800 dark:text-slate-200 uppercase">{a.title}</h3>
                  <p className="text-[10px] font-mono text-slate-400 dark:text-slate-600">{a.id} // {a.location}</p>
                </div>
              </div>
              <div className="text-right font-mono text-[9px]">
                <p className="text-slate-400 dark:text-slate-500">{a.timestamp}</p>
                <p className={a.status === 'Resolved' ? 'text-emerald-600 dark:text-emerald-500' : 'text-rose-600 dark:text-rose-500'}>{a.status.toUpperCase()}</p>
              </div>
            </button>
          ))}
        </div>
        
        {/* Fix: Implement the detail panel for selected anomalies */}
        <div className="lg:col-span-1">
          {selected ? (
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-rose-900/30 p-6 rounded-lg shadow-sm dark:shadow-none animate-in slide-in-from-right-2">
              <h3 className="text-lg font-black text-slate-800 dark:text-slate-100 uppercase mb-4">{selected.title}</h3>
              <div className="space-y-4 text-xs font-mono">
                <div>
                  <p className="text-slate-400 uppercase">Description</p>
                  <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed italic">"{selected.description}"</p>
                </div>
                <div>
                  <p className="text-slate-400 uppercase">Severity</p>
                  <p className={`font-bold ${selected.severity === 'Catastrophic' ? 'text-rose-600' : 'text-slate-600'}`}>{selected.severity.toUpperCase()}</p>
                </div>
              </div>
              <button 
                onClick={() => setSelectedId(null)}
                className="w-full mt-8 py-2 bg-slate-100 dark:bg-slate-800 text-[10px] font-bold uppercase rounded border border-slate-200 dark:border-slate-700 hover:text-rose-500 transition-colors"
              >
                Close File
              </button>
            </div>
          ) : (
            <div className="h-full flex flex-col items-center justify-center opacity-20 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-lg p-10 text-center">
              <span className="text-4xl mb-4">🔍</span>
              <p className="text-[10px] font-mono uppercase tracking-widest">Select an entry for tactical analysis</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Anomalies;
