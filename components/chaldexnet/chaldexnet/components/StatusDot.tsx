// File: pages/chaldexnet/components/StatusDot.tsx
import React from 'react';
import { StaffStatus } from '../types.ts';
import { STAFF_STATUS } from '../config/staffStatus.ts';

interface StatusDotProps {
  user?: string;
  statusOverride?: StaffStatus;
}

export const StatusDot: React.FC<StatusDotProps> = ({ user, statusOverride }) => {
  const status = statusOverride || (user ? STAFF_STATUS[user] : 'online') || 'online';
  
  const colors = {
    online: 'bg-emerald-500 shadow-sm dark:shadow-[0_0_8px_rgba(16,185,129,0.4)]',
    idle: 'bg-amber-500 shadow-sm dark:shadow-[0_0_8px_rgba(245,158,11,0.4)]',
    offline: 'bg-slate-300 dark:bg-slate-700 shadow-none',
    dnd: 'bg-rose-500 shadow-sm dark:shadow-[0_0_8px_rgba(244,63,94,0.4)]'
  };

  const labels = {
    online: 'Online',
    idle: 'Away',
    offline: 'Offline',
    dnd: 'Do Not Disturb'
  };

  return (
    <div 
      className={`w-2 h-2 rounded-full ${colors[status]} transition-all duration-500 relative group/status`}
      title={labels[status]}
    >
      {status === 'dnd' && (
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-1.5 h-[1px] bg-white opacity-80"></div>
        </div>
      )}
    </div>
  );
};