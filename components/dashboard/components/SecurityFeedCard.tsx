// File: pages/dashboard/components/SecurityFeedCard.tsx
import React from 'react';
import { FeedItem } from './FeedItem.tsx';
import { RawFeedItem } from '../types.ts';

interface SecurityFeedCardProps {
  items: RawFeedItem[];
  alertDensity: string;
}

export const SecurityFeedCard: React.FC<SecurityFeedCardProps> = ({ items, alertDensity }) => {
  return (
    <div className="lg:col-span-4 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded flex flex-col shadow-sm dark:shadow-none">
      <div className="p-4 border-b border-slate-200 dark:border-slate-900 bg-slate-50 dark:bg-slate-950/50 flex justify-between items-center">
        <h3 className="text-[10px] font-mono text-rose-600 dark:text-rose-500 uppercase tracking-widest font-black">Security Feed</h3>
        <span className="text-[8px] font-mono text-rose-800 dark:text-rose-900 animate-pulse-soft font-bold">● {alertDensity.toUpperCase()}</span>
      </div>
      <div className="flex-1 p-4 space-y-4 overflow-y-auto custom-scrollbar font-mono text-[10px]">
         {items.length > 0 ? items.map((item, idx) => (
           <FeedItem key={idx} time={item.time} cat={item.cat} msg={item.msg} color={item.color} />
         )) : (
           <p className="text-center py-10 text-slate-400 dark:text-slate-700 italic">No alerts matching filter.</p>
         )}
      </div>
    </div>
  );
};