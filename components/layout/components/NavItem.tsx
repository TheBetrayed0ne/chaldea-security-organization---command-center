
import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItemProps } from '../types';
import { soundService } from '../../../services/soundService.ts';

export const NavItem: React.FC<NavItemProps> = ({ to, icon, label }) => (
  <NavLink
    to={to}
    onClick={() => soundService.playSelect()}
    onMouseEnter={() => soundService.playClick()}
    className={({ isActive }) =>
      `flex items-center gap-3 px-6 py-2 transition-all duration-200 group relative ${
        isActive ? 'text-white bg-slate-800/50' : 'text-slate-500 hover:text-slate-200'
      }`
    }
  >
    {({ isActive }) => (
      <>
        {isActive && <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500"></div>}
        <span className="text-xs font-mono opacity-50">{icon}</span>
        <span className="text-[10px] font-bold uppercase tracking-widest">{label}</span>
      </>
    )}
  </NavLink>
);
