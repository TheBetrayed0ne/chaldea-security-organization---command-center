// File: components/SaintGraph/components/ServantCard.tsx
import React from 'react';
import { Servant } from '../../../types';
import { getHazardColor } from '../utils/getHazardColor.ts';

interface ServantCardProps {
  servant: Servant;
  isActive: boolean;
  onSelect: (s: Servant) => void;
}

export const ServantCard: React.FC<ServantCardProps> = ({ servant, isActive, onSelect }) => {
  return (
    <button 
      onClick={() => onSelect(servant)}
      className={`group relative text-center flex flex-col items-center bg-white dark:bg-slate-900/40 border p-6 rounded-xl transition-all hover:bg-slate-50 dark:hover:bg-slate-800/40 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm dark:shadow-none ${isActive ? 'border-blue-500 ring-1 ring-blue-500/20' : 'border-slate-200 dark:border-slate-800'}`}
    >
      <div className="w-full flex justify-between items-start mb-6">
        <div className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${getHazardColor(servant.metadata?.hazardLevel)}`}>
          {servant.metadata?.hazardLevel?.toUpperCase() || 'UNKNOWN'}_HZ
        </div>
        <span className="text-[8px] text-slate-400 dark:text-slate-700 font-mono font-bold uppercase tracking-tighter">UID_{servant.id}</span>
      </div>
      
      <div className="w-52 h-52 bg-slate-100 dark:bg-slate-950 border-4 border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-md dark:shadow-[0_0_30px_rgba(0,0,0,0.5)] mb-6 group-hover:scale-105 transition-transform duration-500 relative flex items-center justify-center">
        <img 
          src={servant.image || `https://api.dicebear.com/7.x/identicon/svg?seed=${servant.name}&backgroundColor=0f172a`} 
          alt={servant.name} 
          className="w-full h-full object-cover object-top filter contrast-110 saturate-110 brightness-110" 
        />
        <div className="absolute inset-0 border border-white/5 pointer-events-none"></div>
      </div>

      <h3 className="text-2xl font-black text-slate-800 dark:text-slate-100 uppercase tracking-tight leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1">
        {servant.name}
      </h3>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-[10px] font-mono text-blue-600 dark:text-blue-500 uppercase font-bold tracking-widest">{servant.class}</span>
        <div className="w-1 h-1 bg-slate-300 dark:bg-slate-700 rounded-full"></div>
        <span className="text-[10px] font-mono text-slate-500 dark:text-slate-500 uppercase">{servant.metadata?.department || 'Unassigned'}</span>
      </div>

      <p className="text-[11px] text-slate-600 dark:text-slate-500 line-clamp-2 italic mb-6 px-4 leading-relaxed">
        "{servant.metadata?.interactionNotes || servant.description || 'No additional logs.'}"
      </p>

      <div className="w-full flex justify-between items-end mt-auto pt-4 border-t border-slate-100 dark:border-slate-800/40">
        <div className="flex gap-0.5">
          {[...Array(servant.rarity)].map((_, i) => <span key={i} className="text-yellow-600 text-[10px]">✦</span>)}
        </div>
        <div className="text-[8px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-widest">Access Profile ➔</div>
      </div>
    </button>
  );
};