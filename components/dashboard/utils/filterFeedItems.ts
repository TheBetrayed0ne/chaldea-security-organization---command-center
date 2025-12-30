// File: pages/dashboard/utils/filterFeedItems.ts
import { RawFeedItem } from '../types.ts';

export const filterFeedItems = (
  items: RawFeedItem[],
  alertDensity: 'critical' | 'ops' | 'all'
): RawFeedItem[] => {
  return items.filter(item => {
    if (alertDensity === 'critical') return item.level === 'critical' || item.cat === 'WARN';
    if (alertDensity === 'ops') return item.level === 'ops' || item.level === 'critical';
    return true;
  });
};
