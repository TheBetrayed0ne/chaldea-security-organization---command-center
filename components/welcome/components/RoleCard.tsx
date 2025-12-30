import React from 'react';
import { UserRole } from '../../../context/StatusContext.tsx';
import { soundService } from '../../../services/soundService.ts';
import { RoleConfig } from '../types.ts';

interface RoleCardProps extends RoleConfig {
  role: UserRole;
  onClick: () => void;
  disabled: boolean;
  active: boolean;
}

export const RoleCard: React.FC<RoleCardProps> = ({ 
  title, 
  designation, 
  color, 
  icon, 
  onClick, 
  disabled, 
  active 
}) => (
  <button 
    onClick={onClick}
    disabled={disabled}
    onMouseEnter={() => soundService.playClick()}
    className={`group relative p-8 border-2 bg-slate-900/40 backdrop-blur-md rounded-xl transition-all duration-300 flex flex-col items-center text-center hover:-translate-y-2 ${color} ${active ? 'scale-105 bg-slate-800 border-white ring-4 ring-white/10' : 'hover:bg-slate-800/80'} ${disabled && !active ? 'opacity-30' : 'opacity-100'}`}
  >
    <div className="text-5xl mb-6 transition-transform duration-500 group-hover:rotate-12">{icon}</div>
    <h3 className="text-xl font-black uppercase tracking-tighter mb-2">{title}</h3>
    <p className="text-[9px] font-mono text-slate-500 uppercase leading-relaxed">{designation}</p>
    
    <div className="mt-8 px-6 py-2 border border-current text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
      Establish Link
    </div>

    {active && (
      <div className="absolute -bottom-2 bg-white text-slate-950 px-3 py-0.5 rounded text-[8px] font-black uppercase animate-bounce">
        Authenticated
      </div>
    )}
  </button>
);