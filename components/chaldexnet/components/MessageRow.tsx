// File: src/pages/chaldexnet/components/MessageRow.tsx
import React from 'react';
import { Message } from '../types.ts';
import { StatusDot } from './StatusDot.tsx';
import { getUsernameColor } from '../utils/getUsernameColor.ts';
import { formatContent } from '../utils/formatContent.tsx';

interface MessageRowProps {
  message: Message;
}

export const MessageRow: React.FC<MessageRowProps> = ({ message }) => (
  <div className="flex gap-5 group animate-in slide-in-from-bottom-2 duration-300">
    <div className="w-10 h-10 rounded shrink-0 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden relative shadow-sm">
      <img src={message.avatar || `https://api.dicebear.com/7.x/identicon/svg?seed=${message.user}&backgroundColor=0f172a`} alt="" className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center gap-3 mb-1.5">
        <div className="flex items-center gap-2">
          <StatusDot user={message.user} />
          <span className={`text-[11px] font-black uppercase tracking-tight ${getUsernameColor(message.user)}`}>
            {message.user}
          </span>
        </div>
        <span className="text-[9px] text-slate-400 dark:text-slate-700 font-mono">{message.timestamp}</span>
      </div>
      <div className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal bg-slate-50 dark:bg-slate-900/20 border-l-2 border-slate-200 dark:border-slate-800 pl-4 py-1 group-hover:border-slate-400 dark:group-hover:border-slate-700 transition-colors whitespace-pre-wrap">
        {formatContent(message.content)}
      </div>
    </div>
  </div>
);
