
// File: components/SaintGraph/detail/DetailOverlay.tsx
import React from 'react';
import { Servant } from '../../../types.ts';
import { ActiveTab, RolePolicy } from '../types.ts';
import { soundService } from '../../../services/soundService.ts';
import { DetailTabs } from './DetailTabs.tsx';
import { OverviewTab } from './tabs/OverviewTab.tsx';
import { OperationalTab } from './tabs/OperationalTab.tsx';
import { IncidentsTab } from './tabs/IncidentsTab.tsx';
import { AmenitiesTab } from './tabs/AmenitiesTab.tsx';

interface DetailOverlayProps {
  servant: Servant;
  activeTab: ActiveTab;
  policy: RolePolicy;
  onTabChange: (tab: ActiveTab) => void;
  onClose: () => void;
}

export const DetailOverlay: React.FC<DetailOverlayProps> = ({ 
  servant, 
  activeTab, 
  policy,
  onTabChange, 
  onClose 
}) => {
  return (
    <>
      <div 
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[45] animate-in fade-in duration-300"
        onClick={onClose}
      />
      
      <div className="fixed top-14 bottom-0 right-0 w-full max-w-[550px] bg-slate-900 border-l border-slate-800 shadow-2xl z-50 flex flex-col animate-in slide-in-from-right-full duration-500">
        <div className="p-8 border-b border-slate-800 bg-slate-950/40 relative">
          <button 
            onClick={onClose} 
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-rose-900/40 text-slate-400 hover:text-rose-500 border border-slate-700 hover:border-rose-500/50 transition-all z-10"
            aria-label="Close Archive"
          >
            ✕
          </button>
          
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-64 h-64 rounded-xl bg-slate-950 border-4 border-slate-800 overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)] mb-6 group relative flex items-center justify-center">
              <img 
                src={servant.image || `https://api.dicebear.com/7.x/identicon/svg?seed=${servant.name}&backgroundColor=0f172a`} 
                alt={servant.name} 
                className="w-full h-full object-cover object-top filter brightness-110 saturate-125 contrast-110 transition-all duration-700" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black/80 py-2 text-center text-[9px] font-mono text-blue-400 uppercase tracking-[0.2em] font-bold border-t border-blue-900/50">
                Saint Graph Archival: ACTIVE
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-center gap-1 mb-2">
                {[...Array(servant.rarity)].map((_, i) => (
                  <span key={i} className="text-yellow-500 text-lg drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]">✦</span>
                ))}
              </div>
              <h3 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">{servant.name}</h3>
              <div className="flex items-center justify-center gap-3 pt-3">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 text-[10px] font-mono border border-blue-900/50 rounded uppercase font-bold tracking-widest">{servant.class}</span>
                <div className="w-1.5 h-1.5 bg-slate-800 rounded-full"></div>
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{servant.metadata?.alignment || 'Unknown Alignment'}</span>
              </div>
            </div>
          </div>

          <DetailTabs activeTab={activeTab} onTabChange={onTabChange} />
        </div>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar space-y-8">
          {activeTab === 'Overview' && <OverviewTab servant={servant} />}
          {activeTab === 'Operational' && <OperationalTab servant={servant} />}
          {activeTab === 'Incidents' && <IncidentsTab servant={servant} />}
          {activeTab === 'Amenities' && <AmenitiesTab servant={servant} />}
        </div>
        
        <div className="p-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center gap-4">
          <button 
            onClick={onClose}
            className="flex-1 py-2 border border-slate-800 hover:bg-slate-800 text-slate-500 hover:text-white text-[10px] font-bold uppercase rounded transition-all tracking-widest"
          >
            Return to Registry
          </button>
          {policy.canPrint && (
            <button className="flex-1 py-2 bg-blue-600 text-white text-[10px] font-bold uppercase rounded hover:bg-blue-500 transition-colors tracking-widest shadow-lg">
              Print Archive File
            </button>
          )}
        </div>
      </div>
    </>
  );
};
