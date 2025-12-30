// File: pages/staff-portal/components/ClimateStat.tsx
import React from 'react';

interface ClimateStatProps {
  label: string;
  value: number;
  color: string;
}

export const ClimateStat: React.FC<ClimateStatProps> = ({ label, value, color }) => (
  <div className="space-y-1">
    <div className="flex justify-between text-[10px] font-mono uppercase">
      <span className="text-slate-400">{label}</span>
      <span className="text-slate-200">{value}%</span>
    </div>
    <div className="h-1 bg-slate-800 rounded-full overflow-hidden">
      <div className={`h-full ${color} transition-all duration-1000`} style={{ width: `${value}%` }}></div>
    </div>
  </div>
);
