
import React from 'react';
import { HistoryEventProps } from '../types';

export const HistoryEvent: React.FC<HistoryEventProps> = ({ year, event, status }) => (
  <div className="flex gap-4 items-center group">
    <div className="w-12 py-1 bg-slate-950 border border-slate-800 text-center rounded text-[9px] font-mono text-slate-600">{year}</div>
    <div className="flex-1 min-w-0">
      <p className="text-[10px] font-bold text-slate-300 truncate uppercase">{event}</p>
      <p className={`text-[8px] font-mono uppercase ${status === 'RESOLVED' ? 'text-emerald-600' : 'text-cyan-600'}`}>{status}</p>
    </div>
  </div>
);
