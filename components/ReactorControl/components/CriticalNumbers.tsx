import React from 'react';
import { ReactorData } from '../types';

interface CriticalNumbersProps {
  data: ReactorData;
}

export const CriticalNumbers: React.FC<CriticalNumbersProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-2 gap-2" style={{ maxWidth: '320px', width: '100%' }}>
      <div className="bg-slate-900/60 border-2 border-cyan-500/40 p-2.5">
        <div className="text-[7px] text-cyan-400 uppercase tracking-widest mb-0.5 font-bold">Output</div>
        <div className="h-px bg-cyan-500/30 mb-1"></div>
        <div className="text-lg font-black text-white tabular-nums leading-tight">{data.output}<span className="text-xs ml-0.5 font-bold">MW</span></div>
        <div className="text-[8px] text-slate-500 uppercase tracking-wide">Thaumic Equiv.</div>
      </div>

      <div className="bg-slate-900/60 border-2 border-cyan-500/40 p-2.5">
        <div className="text-[7px] text-cyan-400 uppercase tracking-widest mb-0.5 font-bold">Reserve Time</div>
        <div className="h-px bg-cyan-500/30 mb-1"></div>
        <div className="text-lg font-black text-white tabular-nums leading-tight">{data.reserveTime.split(' ')[0]}<span className="text-xs ml-0.5 font-bold">HOURS</span></div>
        <div className="text-[8px] text-slate-500 uppercase tracking-wide">At Current Load</div>
      </div>

      <div className="bg-slate-900/60 border-2 border-cyan-500/40 p-2.5">
        <div className="text-[7px] text-cyan-400 uppercase tracking-widest mb-0.5 font-bold">Core Stability</div>
        <div className="h-px bg-cyan-500/30 mb-1"></div>
        <div className="text-lg font-black text-white tabular-nums leading-tight">{Math.round(data.stabilityIndex * 100)}<span className="text-xs ml-0.5 font-bold">%</span></div>
        <div className="text-[8px] text-slate-500 uppercase tracking-wide">Nominal</div>
      </div>

      <div className="bg-slate-900/60 border-2 border-cyan-500/40 p-2.5">
        <div className="text-[7px] text-cyan-400 uppercase tracking-widest mb-0.5 font-bold">Containment Integrity</div>
        <div className="h-px bg-cyan-500/30 mb-1"></div>
        <div className="text-lg font-black text-white tabular-nums leading-tight">{Math.round(data.containmentIntegrity)}<span className="text-xs ml-0.5 font-bold">%</span></div>
        <div className="text-[8px] text-slate-500 uppercase tracking-wide">Secure</div>
      </div>
    </div>
  );
};
