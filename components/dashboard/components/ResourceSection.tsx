// File: pages/dashboard/components/ResourceSection.tsx
import React from 'react';
import ResourceSummary, { ResourceItem } from '../../ResourceSummary.tsx';

interface ResourceSectionProps {
  resources: ResourceItem[];
  operationalFocus: string;
  activeCurrencyId: string | null;
  onSelectResource: (id: string) => void;
  onClearSelection: () => void;
  currentCurrency?: ResourceItem;
}

export const ResourceSection: React.FC<ResourceSectionProps> = ({
  resources,
  operationalFocus,
  activeCurrencyId,
  onSelectResource,
  onClearSelection,
  currentCurrency
}) => {
  return (
    <>
      <section className="space-y-4">
        <div className="flex justify-between items-end px-2">
          <h4 className="text-[9px] font-mono text-cyan-500 uppercase tracking-[0.3em] font-bold">Institutional Resource Matrix</h4>
          <span className="text-[8px] text-slate-700 font-mono uppercase tracking-widest">Focus: {operationalFocus}</span>
        </div>
        <ResourceSummary 
          resources={resources} 
          critical={true} 
          onSelect={onSelectResource} 
          selectedId={activeCurrencyId} 
        />
      </section>

      {currentCurrency && (
        <div className="bg-slate-900/60 border border-slate-800 p-4 rounded text-[10px] font-mono text-slate-400 animate-in slide-in-from-top-2 relative">
          <button onClick={onClearSelection} className="absolute top-2 right-4 text-slate-700 hover:text-slate-400">✕</button>
          <span className="text-slate-200 font-bold mr-2 uppercase">{currentCurrency.label} LOG:</span>
          {currentCurrency.desc}
        </div>
      )}
    </>
  );
};