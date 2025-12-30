// File: pages/dashboard/components/FeedItem.tsx
import React from 'react';

interface FeedItemProps {
  time: string;
  cat: string;
  msg: string;
  color: string;
}

export const FeedItem: React.FC<FeedItemProps> = ({ time, cat, msg, color }) => (
  <div className="flex gap-4 border-b border-slate-100 dark:border-slate-900/50 pb-3 group">
    <span className="text-slate-400 dark:text-slate-600 shrink-0">[{time}]</span>
    <div className="min-w-0">
      <span className={`font-black mr-2 uppercase tracking-tighter ${color}`}>{cat}</span>
      <span className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-900 dark:group-hover:text-slate-200 transition-colors">{msg}</span>
    </div>
  </div>
);