// File: components/HRDepartment/components/StatusBox.tsx
import React from 'react';

interface StatusBoxProps {
  label: string;
  val: string;
  color?: string;
}

export const StatusBox: React.FC<StatusBoxProps> = ({ label, val, color = "text-slate-600 dark:text-slate-400" }) => (
  <div className="bg-slate-50 dark:bg-slate-950 p-2 rounded border border-slate-200 dark:border-slate-800">
    <p className="text-[7px] font-mono text-slate-400 dark:text-slate-700 uppercase">{label}</p>
    <p className={`text-[10px] font-black uppercase ${color}`}>{val}</p>
  </div>
);
