// File: components/HRDepartment/components/QueueItem.tsx
import React from 'react';

interface QueueItemProps {
  stage: string;
  label: string;
  date: string;
}

export const QueueItem: React.FC<QueueItemProps> = ({ stage, label, date }) => (
  <div className="flex justify-between items-center p-3 border-b border-slate-100 dark:border-slate-800/50 hover:bg-slate-50 dark:hover:bg-slate-900/30 rounded transition-all cursor-help">
    <div>
      <div className="text-[11px] font-bold text-slate-800 dark:text-slate-300">{label}</div>
      <div className="text-[8px] font-mono text-slate-500 dark:text-slate-600 uppercase">{date}</div>
    </div>
    <span className={`text-[8px] font-mono px-1.5 py-0.5 rounded border ${
      stage === 'Resolved' ? 'bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900' :
      stage === 'Intake' ? 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700' :
      'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-900'
    }`}>{stage.toUpperCase()}</span>
  </div>
);
