/**
 * COMMAND CORE AUTHORITY FIGURES
 * Central command personnel authorized for Human Order operations
 */

export interface CommandCoreMember {
  id: string;
  name: string;
  title: string;
  role: string;
  permissions: string[];
  avatar: string;
  description: string;
}

export const COMMAND_CORE_MEMBERS: CommandCoreMember[] = [
  {
    id: 'ritsuka',
    name: 'Ritsuka Fujimaru',
    title: 'Last Master of Humanity',
    role: 'Master // Rayshift Operator',
    permissions: ['master', 'rayshift', 'servant-command', 'all-access'],
    avatar: '/images/avatars/master-female.webp', // Will switch based on gender setting
    description: 'Candidate 48. The anchor point for humanity\'s survival. Contracts with Heroic Spirits and leads field operations across singularities.'
  },
  {
    id: 'da-vinci',
    name: 'Leonardo da Vinci',
    title: 'Technical Director',
    role: 'Operations // R&D Oversight',
    permissions: ['technical', 'research', 'engineering', 'operations'],
    avatar: '/images/servants/S127.webp',
    description: 'Genius Universal. Oversees all technical operations, Spiritron systems, and strategic planning. The facility\'s operational backbone.'
  },
  {
    id: 'goredolf',
    name: 'Goredolf Musik',
    title: 'Director of Chaldea',
    role: 'Administrative // Command Authority',
    permissions: ['administrative', 'budgetary', 'personnel', 'oversight'],
    avatar: '/images/avatars/goredolf.webp',
    description: 'Acting Director. Handles administrative oversight, budget allocation, and official command authority. Surprisingly competent under pressure.'
  },
  {
    id: 'sion',
    name: 'Sion Eltnam Sokaris',
    title: 'Systems Director',
    role: 'Technical // Systems Authority',
    permissions: ['technical', 'systems', 'analysis', 'diagnostics'],
    avatar: '/images/avatars/sion.webp',
    description: 'Atlas Institute alchemist. Oversees CHALDEAS systems architecture, computational thaumatology, and predictive analysis. Unmatched technical expertise in spiritron framework maintenance.'
  },
  {
    id: 'nightingale',
    name: 'Florence Nightingale',
    title: 'Chief Medical Officer',
    role: 'Medical // Emergency Authority',
    permissions: ['medical', 'emergency', 'quarantine', 'health-protocols'],
    avatar: '/images/servants/S105.webp',
    description: 'The Lady with the Lamp. Absolute authority over medical operations, emergency protocols, and personnel health. Ruthlessly efficient. Do not argue with her treatment plans.'
  },
  {
    id: 'mash',
    name: 'Mash Kyrielight',
    title: 'Shielding Demi-Servant',
    role: 'Security // Field Operations',
    permissions: ['security', 'field-ops', 'defensive-protocols', 'servant-liaison'],
    avatar: '/images/servants/SH-001.webp',
    description: 'Demi-Servant fused with the spirit of Galahad. Primary defensive specialist and Master\'s partner in all Rayshift operations. Unwavering loyalty and tactical expertise in protecting humanity\'s last hope.'
  }
];
