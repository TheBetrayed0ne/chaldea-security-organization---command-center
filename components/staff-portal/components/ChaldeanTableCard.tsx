// File: pages/staff-portal/components/ChaldeanTableCard.tsx
import React from 'react';
import { Chef } from '../types.ts';

interface ChaldeanTableCardProps {
  chef: Chef;
}

export const ChaldeanTableCard: React.FC<ChaldeanTableCardProps> = ({ chef }) => (
  <div className="bg-slate-900/40 border border-cyan-900/30 p-6 rounded-lg backdrop-blur-md relative overflow-hidden group flex-1">
    <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500"></div>
    <h3 className="text-sm font-mono text-cyan-500 uppercase tracking-widest mb-1 font-bold">The Chaldean Table</h3>
    <p className="text-[10px] text-slate-500 font-mono mb-4 uppercase tracking-tighter italic">Daily Sustenance Log</p>
    
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-cyan-500/50 flex items-center justify-center overflow-hidden shadow-lg group-hover:scale-110 transition-transform">
          <img src={chef.avatar} alt={chef.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-[10px] text-slate-500 font-mono uppercase">Chef of the Day</p>
          <p className="text-lg font-bold text-white uppercase tracking-tight">{chef.name}</p>
        </div>
      </div>

      <div className="p-3 bg-slate-950/40 rounded border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
        <p className="text-[10px] text-cyan-500 font-mono uppercase mb-2">Today's Menu</p>
        <ul className="text-xs space-y-2 text-slate-300 italic">
          {chef.menu.map((item, idx) => (
            <li key={idx} className="flex gap-2">
              <span className="text-cyan-900">•</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="text-[10px] font-mono text-slate-500 space-y-1">
        <div className="flex justify-between">
          <span>Specialty:</span>
          <span className="text-slate-300">{chef.specialty}</span>
        </div>
        <div className="flex justify-between">
          <span>Vibe:</span>
          <span className="text-slate-300">{chef.vibe}</span>
        </div>
      </div>
    </div>
  </div>
);
