// File: pages/chaldexnet/policy/chaldExNetPolicy.ts
import { UserRole } from '../../../context/StatusContext.tsx';
import { ChaldExNetPolicy } from '../types.ts';

export const getChaldExNetPolicy = (role: UserRole | null): ChaldExNetPolicy => {
  return {
    canPostMessages: true,
    canSeePersonnelSidebar: true,
    canUseEmojisOrAttachments: true,
    canAccessCertainCategories: true
  };
};