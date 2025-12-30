import React from 'react';
import { AccessLevel, AutonomyState } from '../types';

interface ReactorHeaderProps {
  currentTime: Date;
  currentOperator: string;
  accessLevel: AccessLevel;
  autonomyState: AutonomyState;
  autonomyPhrase: string;
  use24Hour: boolean;
  onToggleTimeFormat: () => void;
}

export const ReactorHeader: React.FC<ReactorHeaderProps> = ({
  currentTime,
  currentOperator,
  accessLevel,
  autonomyState,
  autonomyPhrase,
  use24Hour,
  onToggleTimeFormat
}) => {
  return (
    <header className="bg-slate-900 border-2 border-cyan-500/30 p-4 mb-6" style={{ maxWidth: '1200px', maxHeight: '150px' }}>
      <div className="flex items-center justify-between mb-3">
        <div>
          <h1 className="text-2xl font-black tracking-[0.3em] text-cyan-400 uppercase">Fire of Prometheus</h1>
          <p className="text-xs text-slate-500 tracking-[0.2em] uppercase">Main Reactor // Thaumic Core</p>
        </div>
        <div className="text-right">
          <button
            onClick={onToggleTimeFormat}
            className="text-2xl font-bold text-cyan-400 tabular-nums hover:text-cyan-300 transition-colors cursor-pointer"
            title="Click to toggle 12/24 hour format"
          >
            {currentTime.toLocaleTimeString('en-US', { hour12: !use24Hour })}
          </button>
          <div className="text-xs text-slate-500 uppercase tracking-wider">Operator: {currentOperator}</div>
        </div>
      </div>
      <div className="flex items-center gap-4 pt-3 border-t border-slate-700">
        <div className="text-xs text-slate-400 uppercase tracking-wider">Access:</div>
        <div
          className={`text-sm font-bold tracking-wide px-3 py-1 rounded ${
            accessLevel === 'VIEW ONLY'
              ? 'bg-slate-800 text-slate-400'
              : accessLevel === 'CRITICAL ACTIONS LOCKED'
              ? 'bg-amber-900/20 text-amber-500'
              : 'bg-cyan-900/20 text-cyan-400'
          }`}
        >
          {accessLevel}
        </div>
        <div className="flex-1"></div>
        <div className="text-xs text-slate-500 uppercase tracking-wider">
          Autonomy: <span className="text-cyan-400">{autonomyPhrase}</span>
        </div>
      </div>
    </header>
  );
};
