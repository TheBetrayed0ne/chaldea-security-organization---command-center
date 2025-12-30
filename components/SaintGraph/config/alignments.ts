// File: components/SaintGraph/config/alignments.ts
export const ALIGNMENTS = [
  'Lawful Good',
  'Neutral Good',
  'Chaotic Good',
  'Lawful Balanced',
  'Neutral Balanced',
  'Chaotic Balanced',
  'Lawful Neutral',
  'Neutral Neutral',
  'Chaotic Neutral',
  'Lawful Evil',
  'Neutral Evil',
  'Chaotic Evil',
  'Chaotic Mad'
] as const;

export type Alignment = typeof ALIGNMENTS[number];
