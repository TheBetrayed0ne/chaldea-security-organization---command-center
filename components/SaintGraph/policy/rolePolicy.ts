// File: components/SaintGraph/policy/rolePolicy.ts
import { UserRole } from '../../../context/StatusContext.tsx';
import { RolePolicy } from '../types.ts';

/**
 * Returns functional permissions based on the user's role.
 * Currently defaults to true for all roles to maintain legacy behavior.
 */
export const getRolePolicy = (role: UserRole | null): RolePolicy => {
  // Scaffolding for future gating
  return {
    canSyncNew: true,
    canPrint: true,
    canSeeHazards: true,
    canViewSensitiveLogs: true,
  };
};