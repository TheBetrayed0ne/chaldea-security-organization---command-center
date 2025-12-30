// File: src/pages/chaldexnet/components/PersonnelSidebar.tsx
import React, { useMemo } from 'react';
import { STAFF_STATUS } from '../config/staffStatus.ts';
import { StatusDot } from './StatusDot.tsx';

export const PersonnelSidebar: React.FC = () => {
  const sortedStaff = useMemo(() => {
    return Object.entries(STAFF_STATUS).sort((a, b) => {
      const order = { online: 0, dnd: 1, idle: 2, offline: 3 };
      return order[a[1]] - order[b[1]];
    });
  }, []);

  return (
    <aside className="w-56 border-l border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 flex flex-col backdrop-blur-md">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
         <h2 className="text-[10px] font-black tracking-[0.2em] text-black dark:text-slate-100 uppercase">Active Personnel</h2>
         <p className="text-[7px] font-mono text-slate-400 uppercase tracking-widest mt-1">Syncing signatures...</p>
      </div>
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 space-y-6">
         <div className="space-y-3">
            {sortedStaff.map(([name, s]) => (
              <div key={name} className="flex items-center gap-3 group cursor-default">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 overflow-hidden group-hover:border-cyan-500 transition-all">
                    <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=${name}&backgroundColor=0f172a`} alt="" className="scale-110 grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" />
                  </div>
                  <div className="absolute -bottom-0.5 -right-0.5 ring-2 ring-white dark:ring-slate-900 rounded-full scale-75">
                    <StatusDot user={name} />
                  </div>
                </div>
                <div className="min-w-0">
                  <p className={`text-[10px] font-bold uppercase tracking-tight truncate ${s === 'offline' ? 'text-slate-400' : 'text-slate-700 dark:text-slate-200'}`}>
                    {name}
                  </p>
                  <p className="text-[8px] font-mono text-slate-400 uppercase leading-none mt-0.5">
                    {s === 'dnd' ? 'Busy' : s === 'idle' ? 'Away' : s === 'online' ? 'Active' : 'Offline'}
                  </p>
                </div>
              </div>
            ))}
         </div>
      </div>
    </aside>
  );
};
