// File: pages/chaldexnet/components/StatusLegend.tsx
import React from 'react';
import { StatusDot } from './StatusDot.tsx';

export const StatusLegend: React.FC = () => (
  <div className="flex flex-col justify-center gap-1.5 pr-4 border-r border-slate-200 dark:border-slate-800 shrink-0">
    <div className="flex items-center gap-2 group/legend cursor-help" title="Active / Operational">
      <StatusDot statusOverride="online" />
      <span className="text-[7px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-tighter">ON</span>
    </div>
    <div className="flex items-center gap-2 group/legend cursor-help" title="Away / Idle">
      <StatusDot statusOverride="idle" />
      <span className="text-[7px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-tighter">IDL</span>
    </div>
    <div className="flex items-center gap-2 group/legend cursor-help" title="Busy / Do Not Disturb">
      <StatusDot statusOverride="dnd" />
      <span className="text-[7px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-tighter">DND</span>
    </div>
    <div className="flex items-center gap-2 group/legend cursor-help" title="Offline / Disconnected">
      <StatusDot statusOverride="offline" />
      <span className="text-[7px] font-mono text-slate-400 dark:text-slate-600 uppercase tracking-tighter">OFF</span>
    </div>
  </div>
);