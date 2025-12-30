// File: pages/staff-portal/config/dailyBulletins.ts
import { Bulletin } from '../types.ts';

export const DAILY_BULLETINS: Bulletin[] = [
  { id: 1, type: 'URGENT', tag: 'SECURITY', msg: 'Mordred-proofed utensils activated in Main Hall after the "Steak Incident".' },
  { id: 2, type: 'INFO', tag: 'MAINTENANCE', msg: 'Room 404 (Found Room) reporting frost build-up on the ceiling. Kyle confirmed present.' },
  { id: 3, type: 'WARN', tag: 'ENGINEERING', msg: 'Da Vinci warns: DO NOT use the Holy Grail as a coffee mug. Again.' },
  { id: 4, type: 'EVENT', tag: 'CULINARY', msg: "Beni-Enma's Soul-Cuisine discipline training begins at 14:00. Bring proper posture." },
  { id: 5, type: 'LOG', tag: 'SUPPLY', msg: "Gordolf's croissant emergency supply is at 12%. Requisition pending." },
  { id: 6, type: 'ALERT', tag: 'MAGECRAFT', msg: 'Mana fluctuation detected in the deep corridors. Possible Golem hide-and-seek.' },
  { id: 7, type: 'INFO', tag: 'PERSONNEL', msg: 'Reminder: The "Cold Booth" is reserved for Master and the Warden. Do not loiter.' },
];
