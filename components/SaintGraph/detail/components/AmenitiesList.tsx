// File: components/SaintGraph/detail/components/AmenitiesList.tsx
import React from 'react';

interface AmenitiesListProps {
  label: string;
  items?: string[];
  icon: React.ReactNode;
}

export const AmenitiesList: React.FC<AmenitiesListProps> = ({ label, items, icon }) => (
  <div className="space-y-4">
    <h4 className="text-[9px] font-mono text-slate-600 uppercase flex items-center gap-2">
      <span>{icon}</span> {label}
    </h4>
    <ul className="space-y-2">
      {items?.map((it: string) => (
        <li key={it} className="text-xs text-slate-400 flex items-center gap-2">
          <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
          {it}
        </li>
      )) || <li className="text-[10px] text-slate-700 italic">Data missing</li>}
    </ul>
  </div>
);
