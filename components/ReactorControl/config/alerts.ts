import { Alert } from '../types';

export const MOCK_ALERTS: Alert[] = [
  {
    id: '1',
    severity: 'AMBER',
    timestamp: '14:23:41',
    label: 'Coolant ΔP low on Loop B',
    details: 'Primary coolant differential pressure 2.1 kPa below nominal on Loop B. Pump B2 operating at 87% efficiency.',
    acknowledgedBy: 'Eng. Santos',
    autoAction: 'Pump B3 standby activated'
  },
  {
    id: '2',
    severity: 'CYAN',
    timestamp: '14:18:02',
    label: 'Scheduled diagnostic in 45 min',
    details: 'Weekly containment integrity scan scheduled at 15:00. Estimated duration: 12 minutes.',
    autoAction: 'Calendar reminder sent'
  },
  {
    id: '3',
    severity: 'AMBER',
    timestamp: '14:12:33',
    label: 'Mana harmonic drift +0.8%',
    details: 'Thaumic resonance frequency drifting above tolerance band. Currently +0.8% from baseline.',
    acknowledgedBy: 'Eng. Chen'
  },
];
