
import React from 'react';
import { ProfileStatProps } from '../types';

export const ProfileStat: React.FC<ProfileStatProps> = ({ label, value, color = "text-slate-200" }) => (
  <div className="flex justify-between items-center py-2 border-b border-slate-800/50 last:border-0">
    <span className="text-[9px] font-mono text-slate-600 uppercase">{label}</span>
    <span className={`text-[10px] font-black uppercase tracking-tighter ${color}`}>{value}</span>
  </div>
);
