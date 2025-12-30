// File: pages/chaldexnet/utils/pickResponder.ts
import { StaffStatus } from '../types.ts';

export const pickResponder = (userName: string, staffStatus: Record<string, StaffStatus>): string => {
  const onlineStaff = Object.entries(staffStatus).filter(
    ([name, s]) => (s === 'online' || s === 'idle' || s === 'dnd') && name !== userName
  );
  
  return onlineStaff.length > 0 
    ? onlineStaff[Math.floor(Math.random() * onlineStaff.length)][0]
    : 'System_Log';
};