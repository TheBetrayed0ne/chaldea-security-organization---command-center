// File: components/SaintGraph/components/FilterSection.tsx
import React, { useState } from 'react';
import { soundService } from '../../../services/soundService.ts';

interface FilterSectionProps {
  label: string;
  activeValues: string[];
  onToggle: (val: string) => void;
  options: string[];
  multi: boolean;
  defaultOpen?: boolean;
}

export const FilterSection: React.FC<FilterSectionProps> = ({ label, activeValues, onToggle, options, multi, defaultOpen = true }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleHeaderClick = () => {
    soundService.playClick();
    setIsOpen(!isOpen);
  };

  return (
    <div className="space-y-3 border-b border-slate-900/50 pb-4 last:border-0">
      <button 
        onClick={handleHeaderClick}
        className="w-full flex items-center justify-between group"
      >
        <h3 className="text-[10px] font-mono text-blue-500 uppercase tracking-widest font-black italic group-hover:text-blue-400 transition-colors">
          {label}
        </h3>
        <span className={`text-[8px] text-slate-700 font-bold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100 mt-3' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="flex flex-wrap gap-1.5">
          {options.map((opt: string) => {
            const isActive = activeValues.includes(opt);
            return (
              <button 
                key={opt} 
                onClick={() => onToggle(opt)}
                className={`px-3 py-1 text-[9px] font-mono rounded border transition-all relative flex items-center gap-2 ${
                  isActive 
                    ? 'bg-blue-600 text-white border-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.2)]' 
                    : 'bg-slate-900/40 text-slate-600 border-slate-800 hover:text-slate-400'
                }`}
              >
                {multi && opt !== 'All' && (
                  <div className={`w-1.5 h-1.5 rounded-sm border ${isActive ? 'bg-white border-white' : 'border-slate-700'}`}></div>
                )}
                {opt.toUpperCase()}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
