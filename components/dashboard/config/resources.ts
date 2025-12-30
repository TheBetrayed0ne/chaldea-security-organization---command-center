// File: pages/dashboard/config/resources.ts
import { ResourceItem } from '../../ResourceSummary.tsx';

export const ECONOMY_MASTER_DATA: ResourceItem[] = [
  { id: 'qp', label: 'QP', value: '1.2B', color: 'text-amber-500', desc: 'Quantum Piece. Fundamental currency for Saint Graph processing.' },
  { id: 'mc', label: 'Mana Chits', value: '84,392', color: 'text-blue-400', desc: 'Spiritron-encoded vouchers for intra-departmental transactions.' },
  { id: 'au', label: 'Anchor Units', value: '12,400', color: 'text-emerald-500', desc: 'Existential stability markers from Singularity resolution.' },
  { id: 'cp', label: 'Craft Prism', value: '452', color: 'text-rose-400', desc: 'Crystallized essence for high-grade synthesis.' },
  { id: 'sq', label: 'Saint Quartz', value: '284', color: 'text-indigo-400', desc: 'Compressed Mana Crystals. Crucial for Fate-system summoning.' },
];