// File: pages/staff-portal/components/FacilityStatusHeader.tsx
import React from 'react';
import { GlobalStatus } from '../../../context/StatusContext.tsx';
import { soundService } from '../../../services/soundService.ts';

interface FacilityStatusHeaderProps {
  status: GlobalStatus;
  onUpdateSettings: (updates: any) => void;
}

export const FacilityStatusHeader: React.FC<FacilityStatusHeaderProps> = ({
  status,
  onUpdateSettings
}) => {
  return (
    <div className="space-y-1">
      <div className="text-[10px] font-mono text-emerald-500 uppercase tracking-[0.4em] flex items-center justify-between">
        <span>Facility Status</span>
        <button 
          onClick={() => {
            soundService.playClick();
            onUpdateSettings({ dayNightSync: !status.settings.dayNightSync });
          }}
          className={`text-[8px] px-2 py-0.5 border rounded-full transition-all duration-300 ${status.settings.dayNightSync ? 'border-cyan-500 text-cyan-400 bg-cyan-950/40 shadow-[0_0_10px_rgba(34,211,238,0.3)]' : 'border-slate-700 text-slate-500 bg-slate-900 hover:text-slate-300'}`}
        >
          {status.settings.dayNightSync ? 'SYNC: ENABLED' : 'SYNC: OVERRIDDEN'}
        </button>
      </div>
      <div className="flex gap-6">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full shadow-[0_0_8px] ${status.facility === 'NOMINAL' ? 'bg-emerald-500 shadow-emerald-500/40' : 'bg-rose-500 shadow-rose-500/40'}`}></div>
            <span className="text-2xl font-bold text-slate-100 uppercase">{status.facility}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono uppercase">Interior Life Support</span>
        </div>

        <div className="w-px h-10 bg-slate-800"></div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></div>
            <span className="text-2xl font-bold text-slate-100 font-mono">{Math.round(status.manaLoad)}%</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono uppercase">Mana Load // Grid A</span>
        </div>

        <div className="w-px h-10 bg-slate-800"></div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full shadow-[0_0_8px] ${status.containment === 'GREEN' ? 'bg-emerald-500 shadow-emerald-500/40' : 'bg-rose-500 shadow-rose-500/40'}`}></div>
            <span className="text-2xl font-bold text-slate-100 uppercase">{status.containment}</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono uppercase">Containment Shield</span>
        </div>
      </div>
    </div>
  );
};
