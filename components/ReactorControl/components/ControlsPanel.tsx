import React from 'react';

interface ControlsPanelProps {
  canControl: boolean;
  showCriticalPanel: boolean;
  onToggleCriticalPanel: () => void;
}

const ROUTINE_MODES = [
  'Base Load',
  'Combat Readiness',
  'Summoning Support',
  'Power-Save',
  'Run Diagnostics',
  'Rebalance Loads',
];

const CRITICAL_ACTIONS = ['Manual Override', 'Bypass Interlock', 'SCRAM Reset', 'Core Mode Change'];

export const ControlsPanel: React.FC<ControlsPanelProps> = ({
  canControl,
  showCriticalPanel,
  onToggleCriticalPanel,
}) => {
  return (
    <div className="space-y-4" style={{ maxWidth: '350px', maxHeight: '600px' }}>
      {/* Routine Controls */}
      <div className="bg-slate-900/40 border border-slate-700 p-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Routine Controls</h3>
        <div className="space-y-2">
          {ROUTINE_MODES.map((mode) => (
            <button
              key={mode}
              disabled={!canControl}
              className={`w-full p-2 text-xs uppercase tracking-wider transition-colors ${
                canControl
                  ? 'bg-slate-800 hover:bg-cyan-900/40 hover:border-cyan-500 text-slate-300 border border-slate-600'
                  : 'bg-slate-900/40 text-slate-600 border border-slate-800 cursor-not-allowed'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
        {!canControl && (
          <div className="mt-3 p-2 bg-amber-950/20 border border-amber-900/40 text-[10px] text-amber-400">
            Requires Engineering Lead approval
          </div>
        )}
      </div>

      {/* Critical Controls */}
      <div className="bg-red-950/20 border-2 border-red-900/40 p-4">
        <button
          onClick={onToggleCriticalPanel}
          className="w-full flex items-center justify-between text-xs font-bold text-red-400 uppercase tracking-wider mb-3"
        >
          <span>⚠ Critical Controls</span>
          <span>{showCriticalPanel ? '▼' : '▶'}</span>
        </button>
        {showCriticalPanel && (
          <div className="space-y-2">
            <div className="text-[10px] text-amber-400 mb-3">⚠ Two-person authorization required</div>
            {CRITICAL_ACTIONS.map((action) => (
              <button
                key={action}
                disabled
                className="w-full p-2 text-xs uppercase tracking-wider bg-slate-900/60 text-slate-700 border border-red-900/60 cursor-not-allowed"
              >
                {action}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
