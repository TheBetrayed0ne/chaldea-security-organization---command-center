// File: pages/chaldexnet/types.ts

export type StaffStatus = 'online' | 'idle' | 'offline' | 'dnd';

export interface Message {
  user: string;
  content: string;
  timestamp: string;
  avatar?: string;
  type?: 'INFO' | 'WARN' | 'ERR' | 'ALERT';
}

export type MessageMap = Record<string, Message[]>;

export interface Channel {
  id: string;
  name: string;
  desc: string;
  category: string;
  icon?: string;
}

export interface ChaldExNetPolicy {
  canPostMessages: boolean;
  canSeePersonnelSidebar: boolean;
  canUseEmojisOrAttachments: boolean;
  canAccessCertainCategories: boolean;
}