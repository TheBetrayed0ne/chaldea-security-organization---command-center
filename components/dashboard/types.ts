// File: pages/dashboard/types.ts
import { ResourceItem } from '../../components/ResourceSummary.tsx';

export interface ManaPoint {
  time: string;
  value: number;
}

export interface RawFeedItem {
  time: string;
  cat: string;
  msg: string;
  color: string;
  level: 'all' | 'ops' | 'critical';
}

export interface DashboardPolicy {
  canSeeEconomy: boolean;
  canSeeFeed: boolean;
  canSeeDetailedTiles: boolean;
  canManageResources: boolean;
}
