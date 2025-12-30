// File: components/SaintGraph/detail/tabs/AmenitiesTab.tsx
import React from 'react';
import { Servant } from '../../../../types';
import { AmenitiesList } from '../components/AmenitiesList.tsx';

interface AmenitiesTabProps {
  servant: Servant;
}

export const AmenitiesTab: React.FC<AmenitiesTabProps> = ({ servant }) => (
  <div className="space-y-8 animate-in fade-in duration-300">
    <div className="grid grid-cols-2 gap-6">
      <AmenitiesList label="Sustenance Preferences" items={servant.metadata?.favoriteFoods} icon="🍲" />
      <AmenitiesList label="Common Loitering Hubs" items={servant.metadata?.loiteringSpots} icon="🌍" />
    </div>
    
    <div className="bg-blue-950/10 border border-blue-900/30 p-6 rounded-lg text-center">
      <p className="text-[10px] font-mono text-blue-500 uppercase mb-2">Psychological Stability Anchor</p>
      <p className="text-sm text-slate-300">Subject is most stable when provided with <span className="text-blue-400 font-bold">Quiet Reflection</span> periods.</p>
    </div>
  </div>
);
