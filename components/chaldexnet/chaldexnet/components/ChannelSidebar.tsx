// File: pages/chaldexnet/components/ChannelSidebar.tsx
import React from 'react';
import { CATEGORIES } from '../config/categories.ts';
import { CHANNELS } from '../config/channels.ts';
import { soundService } from '../../../services/soundService.ts';

interface ChannelSidebarProps {
  activeChannelId: string;
  onSelectChannel: (id: string) => void;
}

export const ChannelSidebar: React.FC<ChannelSidebarProps> = ({ activeChannelId, onSelectChannel }) => {
  return (
    <aside className="w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col bg-white dark:bg-slate-900/40 backdrop-blur-md">
      <div className="p-5 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40">
        <h2 className="text-[10px] font-black tracking-[0.3em] text-black dark:text-slate-100 uppercase mb-1">ChaldExNet</h2>
        <p className="text-[8px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest italic">Staff Collaboration Suite</p>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-6">
        {CATEGORIES.map(cat => (
          <div key={cat}>
            <div className="text-[9px] text-slate-400 dark:text-slate-600 font-mono px-3 mb-2 uppercase tracking-[0.2em] font-bold">{cat}</div>
            <div className="space-y-0.5">
              {CHANNELS.filter(c => c.category === cat).map(ch => (
                <button
                  key={ch.id}
                  onClick={() => {
                    soundService.playSelect();
                    onSelectChannel(ch.id);
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded transition-all flex items-center gap-2 group ${
                    activeChannelId === ch.id ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-900/30' : 'text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/30 border border-transparent'
                  }`}
                >
                  <span className={`text-[10px] ${activeChannelId === ch.id ? 'opacity-100' : 'opacity-40'}`}>{ch.icon || '#'}</span>
                  <span className="text-[11px] font-bold uppercase tracking-tight truncate">{ch.name}</span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};