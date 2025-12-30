// File: pages/staff-portal/utils/normalizeMousePosition.ts
import { MousePos } from '../types.ts';

export const normalizeMousePosition = (clientX: number, clientY: number): MousePos => {
  const x = (clientX / window.innerWidth - 0.5) * 2;
  const y = (clientY / window.innerHeight - 0.5) * 2;
  return { x, y };
};
