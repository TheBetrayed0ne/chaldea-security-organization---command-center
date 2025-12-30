// File: components/SaintGraph/detail/components/MiniMetric.tsx
import React from 'react';

interface MiniMetricProps {
  label: string;
  val?: string;
}

export const MiniMetric: React.FC<MiniMetricProps> = ({ label, val }) => (
  <div className="flex flex-col gap-1">
    <span className="text-[8px] font-mono text-slate-600 uppercase font-black">{label}</span>
    <div className="flex items-center gap-2">
      <div className="h-1 flex-1 bg-slate-950 rounded-full overflow-hidden">
        <div className="h-full bg-blue-500/50" style={{ width: val?.includes('EX') ? '100%' : '70%' }}></div>
      </div>
      <span className="text-[10px] font-black text-slate-400 italic">{val}</span>
    </div>
  </div>
);
