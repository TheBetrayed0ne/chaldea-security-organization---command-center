// File: pages/staff-portal/components/StaffBulletinsPanel.tsx
import React from 'react';
import { Bulletin } from '../types.ts';
import { SOURCE_AVATARS } from '../config/sourceAvatars.ts';

interface StaffBulletinsPanelProps {
  bulletins: Bulletin[];
}

export const StaffBulletinsPanel: React.FC<StaffBulletinsPanelProps> = ({ bulletins }) => (
  <div className="bg-slate-900/40 border border-slate-800 rounded-lg flex-1 flex flex-col overflow-hidden">
     <div className="p-4 bg-slate-950/60 border-b border-slate-800 flex justify-between items-center">
        <h3 className="text-xs font-mono text-rose-400 uppercase tracking-widest font-bold">Staff Bulletins</h3>
        <span className="text-[8px] px-1.5 py-0.5 border border-rose-500/50 text-rose-500 rounded font-mono">LIVE_LOG</span>
     </div>
     <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-hide">
        {bulletins.map(b => (
          <div key={b.id} className="group relative flex gap-3 pl-3 py-2 border-l border-slate-800 hover:border-cyan-500 transition-colors">
            <div className="w-10 h-10 rounded shrink-0 bg-slate-800 border border-slate-700 overflow-hidden mt-1 p-0.5">
               <img src={SOURCE_AVATARS[b.tag]} alt={b.tag} className="w-full h-full object-cover rounded-sm" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex gap-2 items-center mb-1">
                <span className={`text-[8px] font-mono px-1 rounded truncate ${
                  b.type === 'URGENT' ? 'bg-rose-900/40 text-rose-400' : 
                  b.type === 'WARN' ? 'bg-amber-900/40 text-amber-400' : 
                  'bg-slate-800 text-slate-400'
                }`}>{b.tag}</span>
              </div>
              <p className="text-[11px] font-mono text-slate-400 leading-snug group-hover:text-slate-200 transition-colors">
                {b.msg}
              </p>
            </div>
          </div>
        ))}
     </div>
  </div>
);
