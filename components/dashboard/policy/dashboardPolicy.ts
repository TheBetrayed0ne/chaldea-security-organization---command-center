// File: pages/dashboard/policy/dashboardPolicy.ts
import { UserRole } from '../../../context/StatusContext.tsx';
import { DashboardPolicy } from '../types.ts';

export const getDashboardPolicy = (role: UserRole | null): DashboardPolicy => {
  // Scaffolding: currently everyone sees everything
  return {
    canSeeEconomy: true,
    canSeeFeed: true,
    canSeeDetailedTiles: true,
    canManageResources: true
  };
};
