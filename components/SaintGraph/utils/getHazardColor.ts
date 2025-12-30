// File: components/SaintGraph/utils/getHazardColor.ts
export const getHazardColor = (level?: string) => {
  switch (level) {
    case 'Absolute': return 'text-rose-500 bg-rose-950/30 border-rose-500/50';
    case 'Extreme': return 'text-orange-500 bg-orange-950/30 border-orange-500/50';
    case 'High': return 'text-amber-500 bg-amber-950/30 border-amber-500/50';
    case 'Moderate': return 'text-blue-500 bg-blue-950/30 border-blue-500/50';
    default: return 'text-slate-500 bg-slate-900 border-slate-700';
  }
};
