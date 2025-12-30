// File: pages/staff-portal/components/EmotionalClimateCard.tsx
import React from 'react';
import { ClimateStat } from './ClimateStat.tsx';

interface EmotionalClimateCardProps {
  calm: number;
  existential: number;
  hungry: number;
}

export const EmotionalClimateCard: React.FC<EmotionalClimateCardProps> = ({ calm, existential, hungry }) => (
  <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-lg backdrop-blur-md">
    <h3 className="text-xs font-mono text-cyan-500 uppercase tracking-widest mb-4">Emotional Climate</h3>
    <div className="space-y-4">
      <ClimateStat label="Calm" value={Math.round(calm)} color="bg-emerald-500" />
      <ClimateStat label="Existential" value={Math.round(existential)} color="bg-purple-500" />
      <ClimateStat label="Hungry" value={Math.round(hungry)} color="bg-orange-500" />
    </div>
  </div>
);
