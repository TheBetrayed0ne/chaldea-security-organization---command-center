// File: pages/staff-portal/components/EnvironmentalStatusHeader.tsx
import React from 'react';
import { soundService } from '../../../services/soundService.ts';

interface EnvironmentalStatusHeaderProps {
  currentTime: Date;
  isMilitaryTime: boolean;
  onToggleMilitaryTime: () => void;
  isCelsius: boolean;
  onToggleCelsius: () => void;
  externalTemp: number;
  currentTempF: number;
}

export const EnvironmentalStatusHeader: React.FC<EnvironmentalStatusHeaderProps> = ({
  currentTime,
  isMilitaryTime,
  onToggleMilitaryTime,
  isCelsius,
  onToggleCelsius,
  externalTemp,
  currentTempF
}) => {
  const formattedTime = currentTime.toLocaleTimeString([], { 
    hour12: !isMilitaryTime, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });

  return (
    <div className="space-y-1">
      <div className="text-[10px] font-mono text-cyan-500 uppercase tracking-[0.4em]">Environmental Status</div>
      <div className="flex gap-6">
        <div 
          className="flex flex-col cursor-pointer group/time" 
          onClick={() => {
            soundService.playClick();
            onToggleMilitaryTime();
          }}
        >
          <span className="text-2xl font-bold transition-colors group-hover/time:text-cyan-400">
            {formattedTime}
          </span>
          <span className="text-[10px] text-slate-500 font-mono uppercase">
            {currentTime.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </span>
        </div>
        
        <div className="w-px h-10 bg-slate-800"></div>
        
        <div 
          className="flex flex-col cursor-pointer group/temp" 
          onClick={() => {
            soundService.playClick();
            onToggleCelsius();
          }}
        >
          <span className="text-2xl font-bold text-sky-400 transition-colors group-hover/temp:text-cyan-400">
            {isCelsius ? `${externalTemp.toFixed(1)}°C` : `${currentTempF}°F`}
          </span>
          <span className="text-[10px] text-slate-500 font-mono uppercase">Antarctica // External</span>
        </div>
      </div>
    </div>
  );
};
