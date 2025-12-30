// File: components/SaintGraph/detail/DetailTabs.tsx
import React from 'react';
import { ActiveTab } from '../types.ts';
import { soundService } from '../../../services/soundService.ts';

interface DetailTabsProps {
  activeTab: ActiveTab;
  onTabChange: (tab: ActiveTab) => void;
}

export const DetailTabs: React.FC<DetailTabsProps> = ({ activeTab, onTabChange }) => {
  const tabs: ActiveTab[] = ['Overview', 'Operational', 'Incidents', 'Amenities'];

  return (
    <div className="flex justify-center gap-2">
      {tabs.map(tab => (
        <button 
          key={tab} 
          onClick={() => { soundService.playClick(); onTabChange(tab); }}
          className={`px-4 py-1.5 text-[9px] font-mono font-bold uppercase tracking-widest rounded border transition-all ${
            activeTab === tab ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_10px_rgba(37,99,235,0.3)]' : 'bg-slate-900 text-slate-500 border-slate-800 hover:text-slate-300'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};