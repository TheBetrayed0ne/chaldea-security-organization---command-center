import { LoadCategory } from '../types';

export const LOAD_CATEGORIES: LoadCategory[] = [
  { id: 'life', name: 'Life Support', currentDraw: 142, maxDraw: 200, priority: 'CRITICAL', sheddable: false },
  { id: 'command', name: 'Command & Comms', currentDraw: 89, maxDraw: 150, priority: 'CRITICAL', sheddable: false },
  { id: 'summoning', name: 'Summoning Systems', currentDraw: 234, maxDraw: 400, priority: 'HIGH', sheddable: false },
  { id: 'containment', name: 'Containment / Wards', currentDraw: 156, maxDraw: 250, priority: 'CRITICAL', sheddable: false },
  { id: 'labs', name: 'Labs', currentDraw: 67, maxDraw: 120, priority: 'NORMAL', sheddable: true },
  { id: 'habitation', name: 'Habitation', currentDraw: 98, maxDraw: 150, priority: 'HIGH', sheddable: true },
  { id: 'hangar', name: 'Hangar/Transport', currentDraw: 61, maxDraw: 100, priority: 'LOW', sheddable: true },
];
