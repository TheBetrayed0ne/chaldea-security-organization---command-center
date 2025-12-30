// File: components/HRDepartment/config/staffData.ts
import { StaffMember } from '../types/index.ts';

export const HR_STAFF: StaffMember[] = [
  { id: 'H1', name: 'Fujimaru Ritsuka', role: 'Master', dept: 'Command', type: 'Staff', status: 'Nominal', clearance: 'LEVEL_EX', tags: ['High Stress Risk', 'Existential Weight'] },
  { id: 'H2', name: 'Mash Kyrielight', role: 'Sub-Servant', dept: 'Security', type: 'Servant', status: 'Stable', clearance: 'LEVEL_5', tags: ['Overworked', 'Protective Anchor'] },
  { id: 'H3', name: 'Kyle', role: 'Foreigner', dept: 'Warden', type: 'Entity', status: 'Lazy', clearance: 'BEYOND_DOMAIN', tags: ['Non-humanoid cognition', 'Safeguarding Anchor', 'Requires Accommodations'] },
  { id: 'H4', name: 'Vending-A1', role: 'Sustenance Logic', dept: 'Logistics', type: 'Entity', status: 'Moody', clearance: 'LEVEL_1', tags: ['Ensouled Asset', 'Requires Accommodations'] },
  { id: 'H5', name: 'Medea', role: 'Head of Magecraft', dept: 'Magecraft', type: 'Servant', status: 'Stable', clearance: 'LEVEL_4', tags: ['Ritual Specialist', 'Independent Action'] },
  { id: 'H6', name: 'EMIYA', role: 'Executive Chef', dept: 'Culinary', type: 'Servant', status: 'Nominal', clearance: 'LEVEL_3', tags: ['Kitchen Sovereign', 'Pragmatic'] },
  { id: 'H7', name: 'Goredolf Musik', role: 'Director', dept: 'Command', type: 'Staff', status: 'Stressed', clearance: 'LEVEL_EX', tags: ['Dietary Management', 'High Stress Risk'] },
];
