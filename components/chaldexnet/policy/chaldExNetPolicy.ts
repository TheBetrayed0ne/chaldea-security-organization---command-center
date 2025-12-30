// File: src/pages/chaldexnet/policy/chaldExNetPolicy.ts
import { UserRole } from '../../../context/StatusContext.tsx';
import { ChaldExNetPolicy } from '../types.ts';

export const getChaldExNetPolicy = (role: UserRole | null): ChaldExNetPolicy => {
  // Scaffolding: for now all roles have full access
  return {
    canPostMessages: true,
    canSeePersonnelSidebar: true,
    canUseEmojisOrAttachments: true,
    canAccessCertainCategories: true
  };
};
