
import React from 'react';
import { soundService } from '../services/soundService';

export interface ResourceItem {
  id: string;
  label: string;
  value: string;
  color: string;
  desc: string;
}

interface ResourceSummaryProps {
  resources: ResourceItem[];
  critical?: boolean;
  onSelect?: (id: string) => void;
  selectedId?: string | null;
}

const ResourceSummary: React.FC<ResourceSummaryProps> = ({ resources, critical = false, onSelect, selectedId }) => {
  return (
    <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 ${critical ? 'border-l-2 border-cyan-500/50 pl-4' : ''}`}>
      {resources.map((curr) => (
        <button 
          key={curr.id}
          onClick={() => {
            soundService.playClick();
            // Parent component (Dashboard/Logistics) handles the toggle logic (prev === id ? null : id)
            onSelect?.(curr.id);
          }}
          className={`p-3 rounded border transition-all text-center flex flex-col items-center gap-1 relative overflow-hidden group ${
            selectedId === curr.id 
              ? 'bg-slate-800 border-slate-700 ring-1 ring-blue-500/30' 
              : 'bg-slate-900/40 border-slate-900 hover:border-slate-800'
          }`}
        >
          {critical && (
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
          )}
          <span className={`text-[8px] font-mono uppercase font-bold tracking-widest ${critical ? 'text-cyan-600' : 'text-slate-600'}`}>
            {curr.label}
            {critical && <span className="ml-1 animate-pulse">●</span>}
          </span>
          <span className={`text-sm font-black ${curr.color} group-hover:scale-105 transition-transform`}>{curr.value}</span>
          
          {critical && (
            <div className="mt-1 h-[2px] w-8 bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-2/3 animate-[shimmer_2s_infinite]"></div>
            </div>
          )}
        </button>
      ))}
    </div>
  );
};

export default ResourceSummary;
