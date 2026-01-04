import type { EmotionReaction } from '../types';

export const EMOTION_COLORS: Record<EmotionReaction, string> = {
  laughter: '#FFD700',
  'soul-crack': '#FF6B9D',
  'eldritch-awe': '#9D4EDD',
  comfort: '#90EE90',
  drifting: '#87CEEB',
  panic: '#FF4444',
  chaos: '#FF00FF',
  hope: '#FFA500',
};

export const EMOTION_ICONS: Record<EmotionReaction, string> = {
  laughter: '😂',
  'soul-crack': '💔',
  'eldritch-awe': '🌀',
  comfort: '💚',
  drifting: '🌊',
  panic: '😱',
  chaos: '🎭',
  hope: '✨',
};

export const EMOTION_LABELS: Record<EmotionReaction, string> = {
  laughter: 'Laughter',
  'soul-crack': 'Ow My Soul',
  'eldritch-awe': 'Eldritch Awe',
  comfort: 'Comfort',
  drifting: 'Drifting',
  panic: 'Panik',
  chaos: 'Chaos',
  hope: 'Hope',
};

export const getEmotionColor = (emotion: EmotionReaction): string => {
  return EMOTION_COLORS[emotion] || '#666666';
};

export const getEmotionIcon = (emotion: EmotionReaction): string => {
  return EMOTION_ICONS[emotion] || '❓';
};
