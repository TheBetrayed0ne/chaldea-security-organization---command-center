// File: components/SaintGraph/types.ts
import { Servant } from '../../types.ts';

export type ActiveTab = 'Overview' | 'Operational' | 'Incidents' | 'Amenities';

export interface SaintGraphFilters {
  search: string;
  classFilter: string;
  deptFilters: string[];
  hazardFilters: string[];
  alignmentFilters: string[];
}

export interface RolePolicy {
  canSyncNew: boolean;
  canPrint: boolean;
  canSeeHazards: boolean;
  canViewSensitiveLogs: boolean;
}
