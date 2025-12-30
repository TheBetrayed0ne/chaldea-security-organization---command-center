// File: pages/staff-portal/components/SatelliteStatusPill.tsx
import React from 'react';

export const SatelliteStatusPill: React.FC = () => (
  <div className="text-right space-y-2">
    <div className="px-4 py-1 bg-cyan-900/20 border border-cyan-500/30 rounded-full text-[10px] font-mono text-cyan-400">
      SATELLITE CHALDEAS: ONLINE
    </div>
    <p className="text-[10px] text-slate-500 font-mono italic">Wing 01 // Sector 4 Analysis active</p>
  </div>
);
