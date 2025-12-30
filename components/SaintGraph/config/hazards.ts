// File: components/SaintGraph/config/hazards.ts
export const HAZARDS = ['Nominal', 'Moderate', 'High', 'Extreme', 'Absolute'] as const;

export type HazardLevel = typeof HAZARDS[number];
