// File: pages/staff-portal/policy/staffPortalPolicy.ts
import { UserRole } from '../../../context/StatusContext.tsx';
import { StaffPortalPolicy } from '../types.ts';

export const getStaffPortalPolicy = (role: UserRole | null): StaffPortalPolicy => {
  // Scaffolding: currently everyone has access to everything
  return {
    canToggleDayNightSync: true,
    canEnterCommand: true,
    canSeeBulletins: true,
    canSeeChefDetails: true,
  };
};
