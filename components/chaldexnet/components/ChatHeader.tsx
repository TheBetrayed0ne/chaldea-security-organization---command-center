// File: src/pages/chaldexnet/components/ChatHeader.tsx
import React from 'react';
import { Channel } from '../types.ts';

interface ChatHeaderProps {
  activeChannel: Channel;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({ activeChannel }) => (
  <header className="h-14 border-b border-slate-200 dark:border-slate-800 flex items-center px-8 justify-between bg-white/40 dark:bg-slate-950/40 backdrop-blur-sm z-10">
    <div className="flex items-center gap-4 min-w-0">
      <span className="text-xl text-slate-400 dark:text-slate-600 font-serif">#</span>
      <div className="min-w-0">
        <h2 className="text-sm font-black text-black dark:text-slate-100 uppercase tracking-tight truncate">{activeChannel.name}</h2>
        <p className="text-[9px] text-slate-500 font-mono uppercase truncate opacity-70">
          {activeChannel.desc}
        </p>
      </div>
    </div>
    <div className="flex gap-2">
      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-tighter">Gateway Connected</span>
    </div>
  </header>
);
