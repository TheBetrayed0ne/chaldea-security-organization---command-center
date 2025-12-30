// File: pages/staff-portal/components/AccessCommandButton.tsx
import React from 'react';
import { soundService } from '../../../services/soundService.ts';

interface AccessCommandButtonProps {
  onEnter: () => void;
}

export const AccessCommandButton: React.FC<AccessCommandButtonProps> = ({ onEnter }) => (
  <button 
    onClick={() => {
      soundService.playStartup();
      onEnter();
    }}
    onMouseEnter={() => soundService.playClick()}
    className="mt-12 px-14 py-4 bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-bold rounded shadow-[0_0_40px_rgba(8,145,178,0.5)] transition-all hover:scale-105 active:scale-95 flex items-center gap-4 uppercase tracking-[0.2em] text-sm group relative z-50"
  >
    Access Command Core
    <span className="text-xl group-hover:translate-x-2 transition-transform">➔</span>
  </button>
);
