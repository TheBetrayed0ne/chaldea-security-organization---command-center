// File: pages/staff-portal/types.ts
import { GlobalStatus } from '../../context/StatusContext.tsx';

export interface StaffPortalProps {
  chefIndex: number;
  onEnterCommand: () => void;
}

export interface Chef {
  name: string;
  title: string;
  specialty: string;
  vibe: string;
  menu: string[];
  avatar: string;
}

export interface Bulletin {
  id: number;
  type: string;
  tag: string;
  msg: string;
}

export interface Atmosphere {
  landFilter: string;
  cloudOpacity: number;
  sunGradient: string;
  glowColor: string;
  label: string;
}

export interface MousePos {
  x: number;
  y: number;
}

export interface StaffPortalPolicy {
  canToggleDayNightSync: boolean;
  canEnterCommand: boolean;
  canSeeBulletins: boolean;
  canSeeChefDetails: boolean;
}
