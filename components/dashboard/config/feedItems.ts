// File: pages/dashboard/config/feedItems.ts
import { RawFeedItem } from '../types.ts';

export const RAW_FEED_ITEMS: RawFeedItem[] = [
  { time: "14:12", cat: "WILD", msg: "Medb detected in sector B. Deployment of additional barriers recommended.", color: "text-rose-500", level: 'ops' },
  { time: "14:08", cat: "FROST", msg: "Kyle sightings near the vending cluster. Temperature drop confirmed.", color: "text-blue-500", level: 'ops' },
  { time: "13:55", cat: "SYS", msg: "TRISMEGISTUS II buffer cleared. Analysis capacity @ 100%.", color: "text-emerald-500", level: 'all' },
  { time: "13:42", cat: "WARN", msg: "Gordolf's breakfast requisition exceeded weight limit by 4.2kg.", color: "text-amber-500", level: 'all' },
  { time: "13:30", cat: "INFO", msg: "Satellite CHALDEAS scan complete. No new singularities.", color: "text-slate-600", level: 'all' }
];
