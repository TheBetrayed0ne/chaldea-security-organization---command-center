// File: components/SaintGraph/config/departments.ts
export const DEPARTMENTS = [
  'Wardrobe',
  'Religious Support',
  'Field Operations',
  'Custodial',
  'Education',
  'Finance',
  'Medical',
  'Library',
  'Magecraft',
  'Engineering',
  'Combat',
  'Research',
  'Support',
  'Containment',
  'Culinary',
  'Security',
  'Legal',
  'Command'
] as const;

export type Department = typeof DEPARTMENTS[number];
