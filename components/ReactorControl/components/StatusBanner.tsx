import React from 'react';
import { ReactorStatus } from '../types';

interface StatusBannerProps {
  reactorStatus: ReactorStatus;
  statusReason: string;
}

export const StatusBanner: React.FC<StatusBannerProps> = ({ reactorStatus, statusReason }) => {
  return (
    <div
      className={`p-4 mb-6 border-2 ${
        reactorStatus === 'NOMINAL'
          ? 'bg-emerald-950/40 border-emerald-500'
          : reactorStatus === 'DEGRADED'
          ? 'bg-amber-950/40 border-amber-500'
          : 'bg-red-950/40 border-red-500'
      }`}
      style={{ maxWidth: '1200px', maxHeight: '120px' }}
    >
      <div className="flex items-center gap-4">
        <div
          className={`text-3xl font-black tracking-wider ${
            reactorStatus === 'NOMINAL'
              ? 'text-emerald-400'
              : reactorStatus === 'DEGRADED'
              ? 'text-amber-400'
              : 'text-red-400'
          }`}
        >
          {reactorStatus}
        </div>
        <div className="h-8 w-px bg-slate-600"></div>
        <div className="text-sm text-slate-300">{statusReason}</div>
      </div>
    </div>
  );
};
