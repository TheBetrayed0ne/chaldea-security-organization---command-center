// File: components/SaintGraph/detail/components/IncidentLog.tsx
import React from 'react';

interface IncidentLogProps {
  date: string;
  cat: string;
  msg: string;
}

export const IncidentLog: React.FC<IncidentLogProps> = ({ date, cat, msg }) => (
  <div className="flex gap-4 p-3 bg-slate-950/40 rounded border border-slate-800/50 group">
    <span className="text-[9px] font-mono text-slate-700 shrink-0">[{date}]</span>
    <div>
      <span className={`text-[9px] font-black mr-2 uppercase ${cat === 'WILD' ? 'text-rose-500' : 'text-blue-500'}`}>{cat}</span>
      <span className="text-[11px] text-slate-500 group-hover:text-slate-300 transition-colors">{msg}</span>
    </div>
  </div>
);
