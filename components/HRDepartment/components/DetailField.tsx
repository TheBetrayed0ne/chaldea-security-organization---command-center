// File: components/HRDepartment/components/DetailField.tsx
import React from 'react';

interface DetailFieldProps {
  label: string;
  value: string;
}

export const DetailField: React.FC<DetailFieldProps> = ({ label, value }) => (
  <div>
    <p className="text-[8px] font-mono text-slate-500 dark:text-slate-600 uppercase mb-0.5">{label}</p>
    <p className="text-xs font-bold text-slate-800 dark:text-slate-300 uppercase tracking-tighter">{value}</p>
  </div>
);
