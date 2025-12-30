// File: components/SaintGraph/detail/components/StatRow.tsx
import React from 'react';

interface StatRowProps {
  label: string;
  value: string;
}

export const StatRow: React.FC<StatRowProps> = ({ label, value }) => (
  <div>
    <p className="text-[8px] font-mono text-slate-600 uppercase mb-1">{label}</p>
    <p className="text-2xl font-black text-slate-100 tracking-tighter uppercase">{value}</p>
  </div>
);
