// File: components/HRDepartment/components/MediationItem.tsx
import React from 'react';

interface MediationItemProps {
  room: string;
  time: string;
  parties: string;
  status: string;
}

export const MediationItem: React.FC<MediationItemProps> = ({ room, time, parties, status }) => (
  <div className="flex gap-4 items-center group">
    <div className="w-10 py-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-center rounded">
      <div className="text-[10px] font-bold text-slate-800 dark:text-slate-200">{room}</div>
    </div>
    <div className="flex-1 min-w-0">
      <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300 truncate">{parties}</div>
      <div className="text-[8px] font-mono text-slate-500 dark:text-slate-600 uppercase">{time} JST // {status}</div>
    </div>
  </div>
);
