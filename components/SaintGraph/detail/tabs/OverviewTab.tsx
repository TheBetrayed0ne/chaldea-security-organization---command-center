// File: components/SaintGraph/detail/tabs/OverviewTab.tsx
import React from 'react';
import { Servant } from '../../../../types';
import { StatRow } from '../components/StatRow.tsx';
import { MiniMetric } from '../components/MiniMetric.tsx';

interface OverviewTabProps {
  servant: Servant;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ servant }) => (
  <div className="space-y-8 animate-in fade-in duration-300">
    <div>
      <h4 className="text-[10px] font-mono text-blue-500 uppercase tracking-widest mb-4 font-black flex items-center gap-2">
        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
        Tactical Narrative
      </h4>
      <p className="text-sm text-slate-400 leading-relaxed font-serif italic border-l-2 border-slate-800 pl-6">
        {servant.description}
      </p>
    </div>

    <div className="grid grid-cols-2 gap-8">
      <StatRow label="ATK_DENSITY" value={servant.stats.atk.toLocaleString()} />
      <StatRow label="HP_THRESHOLD" value={servant.stats.hp.toLocaleString()} />
    </div>

    <div className="grid grid-cols-3 gap-y-6 gap-x-4 pt-4 border-t border-slate-800">
      <MiniMetric label="STR" val={servant.stats.str} />
      <MiniMetric label="END" val={servant.stats.end} />
      <MiniMetric label="AGI" val={servant.stats.agi} />
      <MiniMetric label="MAN" val={servant.stats.man} />
      <MiniMetric label="LCK" val={servant.stats.lck} />
      <MiniMetric label="NP" val={servant.stats.np} />
    </div>

    <div className="bg-slate-950/40 border border-slate-800 p-5 rounded relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-blue-600/50 group-hover:bg-blue-600 transition-colors"></div>
      <p className="text-[8px] font-mono text-slate-600 uppercase mb-2">Noble Phantasm_LOG</p>
      <p className="text-lg font-black text-slate-200 uppercase italic font-serif mb-1 group-hover:text-white transition-colors">
        {servant.noblePhantasm.name}
      </p>
      <p className="text-[10px] font-mono text-blue-500 uppercase font-bold">
        {servant.noblePhantasm.rank} // {servant.noblePhantasm.type}
      </p>
    </div>
  </div>
);
