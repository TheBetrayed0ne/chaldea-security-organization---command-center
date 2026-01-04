// VoidTube Type Definitions
// Reality is optional. Viewer discretion is not.

export type VideoCategory =
  | 'OPERATIONS'
  | 'COOKING'
  | 'TUTORIALS'
  | 'LIVESTREAMS'
  | 'CHAOS'
  | 'WHOLESOME'
  | 'ELDRITCH'
  | 'CONTAINMENT';

export type EmotionReaction =
  | 'laughter'
  | 'soul-crack'
  | 'eldritch-awe'
  | 'comfort'
  | 'drifting'
  | 'panic'
  | 'chaos'
  | 'hope';

export type AnomalousTag =
  | 'Panik'
  | 'OwMySoul'
  | 'BBMadeMeDoIt'
  | 'Blursed'
  | 'Wholesome'
  | 'ServantKitchenNightmares'
  | 'ShinjukuButItsASitcom'
  | 'ContainmentRequired'
  | 'ColdResistanceA';

export type CompressionZone = 'normal' | 'reality-marble' | 'conceptual' | 'sealed-domain';

export interface Video {
  id: string;
  title: string;
  creator: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploadDate: string;
  category: VideoCategory;
  description: string;
  tags: AnomalousTag[];
  compressionZone?: CompressionZone;
  emotionReactions: Record<EmotionReaction, number>;
  corruptionLevel?: number; // 0-100
  requiresColdResistance?: boolean;
  isLive?: boolean;
  hasMotion?: boolean; // Thumbnail has subtle animation
}

export interface Creator {
  id: string;
  displayName: string;
  channelName: string;
  avatar: string;
  subscribers: number;
  verified: boolean;
  bio: string;
  banner?: string;
  specialEffects?: {
    thumbnailGlitch?: boolean;
    auraBehavior?: 'calm' | 'chaotic' | 'void' | 'eldritch';
  };
}

export interface LiveStream extends Video {
  isLive: true;
  viewerCount: number;
  emotionWaveform: number[]; // Real-time emotion intensity data
  chatEnabled: boolean;
}

export interface ChatMessage {
  user: string;
  content: string;
  timestamp: string;
  emotion?: EmotionReaction;
  avatar?: string;
}

export interface Playlist {
  id: string;
  name: string;
  creator: string;
  videos: string[]; // Video IDs
  description?: string;
  warning?: string;
}

export interface VoidTubePolicy {
  canUploadVideos: boolean;
  canAccessContainment: boolean;
  canBypassWarnings: boolean;
  canViewLiveStreams: boolean;
  accessibleCategories: VideoCategory[];
  maxCorruptionLevel: number;
}

export interface RecommendationFeed {
  trending: Video[];
  forYou: Video[];
  subscriptions: Video[];
  containment: Video[];
  liveNow: LiveStream[];
}