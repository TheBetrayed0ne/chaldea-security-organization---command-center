// File: pages/dashboard/components/StatTile.tsx
import React from 'react';

interface StatTileProps {
  label: string;
  value: string;
  sub: string;
  icon: string;
  color?: string;
}

export const StatTile: React.FC<StatTileProps> = ({ label, value, sub, icon, color = "text-slate-400" }) => (
  <div className="bg-slate-900/40 border border-slate-900 p-6 rounded group hover:border-slate-700 transition-all">
    <div className="flex justify-between items-start mb-4">
      <div className="text-xl opacity-30 group-hover:opacity-100 transition-all">{icon}</div>
      <div className="w-1 h-1 bg-slate-800 rounded-full"></div>
    </div>
    <div className="text-2xl font-black text-slate-100 uppercase tracking-tighter">{value}</div>
    <div className="mt-1 flex items-center justify-between">
      <span className={`text-[9px] font-mono font-bold uppercase tracking-widest ${color}`}>{label}</span>
      <span className="text-[8px] font-mono text-slate-600 uppercase">{sub}</span>
    </div>
  </div>
);
