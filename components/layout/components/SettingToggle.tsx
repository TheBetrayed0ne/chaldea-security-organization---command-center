
import React from 'react';
import { SettingToggleProps } from '../types';

export const SettingToggle: React.FC<SettingToggleProps> = ({ label, active, onClick }) => (
  <div className="flex items-center justify-between">
    <span className="text-[10px] font-bold uppercase text-slate-400 tracking-tighter">{label}</span>
    <button 
      onClick={(e) => { e.stopPropagation(); onClick(); }}
      className={`w-10 h-5 rounded-full relative transition-colors ${active ? 'bg-cyan-500' : 'bg-slate-800'}`}
    >
      <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${active ? 'left-6' : 'left-1'}`} />
    </button>
  </div>
);
