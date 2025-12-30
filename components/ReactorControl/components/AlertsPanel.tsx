import React from 'react';
import { Alert } from '../types';

interface AlertsPanelProps {
  alerts: Alert[];
  selectedAlert: string | null;
  onAlertClick: (alertId: string) => void;
}

export const AlertsPanel: React.FC<AlertsPanelProps> = ({ alerts, selectedAlert, onAlertClick }) => {
  return (
    <div className="col-span-2 bg-slate-900/40 border border-slate-700 p-6" style={{ maxWidth: '800px', maxHeight: '500px' }}>
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Alerts & Interlocks</h2>
      <div className="space-y-2">
        {alerts.map((alert) => (
          <div key={alert.id} className="border border-slate-700 bg-slate-900/60">
            <button
              onClick={() => onAlertClick(alert.id)}
              className="w-full p-3 flex items-center gap-4 hover:bg-slate-800/40 transition-colors"
            >
              <div
                className={`w-2 h-2 rounded-full ${
                  alert.severity === 'RED'
                    ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)]'
                    : alert.severity === 'AMBER'
                    ? 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                    : 'bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.6)]'
                }`}
              ></div>
              <div className="text-[10px] text-slate-500 font-mono tabular-nums">{alert.timestamp}</div>
              <div className="flex-1 text-sm text-slate-300 text-left">{alert.label}</div>
              <div className="text-slate-600">›</div>
            </button>
            {selectedAlert === alert.id && (
              <div className="p-4 border-t border-slate-700 bg-slate-950/40 space-y-2">
                <div className="text-xs text-slate-400">{alert.details}</div>
                {alert.acknowledgedBy && (
                  <div className="text-[10px] text-emerald-400">✓ Acknowledged by: {alert.acknowledgedBy}</div>
                )}
                {alert.autoAction && (
                  <div className="text-[10px] text-cyan-400">⚡ Auto-action: {alert.autoAction}</div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
