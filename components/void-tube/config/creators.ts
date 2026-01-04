import type { Creator } from '../types';

export const VOID_TUBE_CREATORS: Creator[] = [
  {
    id: 'glacial-anomaly-ex',
    displayName: 'Kyle',
    channelName: 'GlacialAnomalyEX',
    avatar: '❄️',
    subscribers: 12847,
    verified: true,
    bio: 'Ambient content. Cold facts. Don\'t watch before sleep (seriously).',
    banner: 'A blizzard horizon with Frost-Rend silhouette',
    specialEffects: {
      auraBehavior: 'void',
    },
  },
  {
    id: 'void-master',
    displayName: 'Void_Master',
    channelName: 'Void_Master Presents',
    avatar: '◯',
    subscribers: 8234,
    verified: false,
    bio: 'Stories from the edges. For quiet hours.',
    banner: 'Black background with thin ring of pale light',
    specialEffects: {
      auraBehavior: 'calm',
    },
  },
  {
    id: 'emiya-cooks',
    displayName: 'EMIYA',
    channelName: 'EMIYA Cooks (Now With Less Salt)',
    avatar: '🍳',
    subscribers: 45231,
    verified: true,
    bio: 'Cooking tutorials that sometimes involve flamethrowers.',
  },
  {
    id: 'bb-broadcasts',
    displayName: 'BB',
    channelName: 'BB_Broadcasts',
    avatar: '💜',
    subscribers: 99999,
    verified: true,
    bio: 'Your favorite kouhai bringing you the chaos you didn\'t ask for but definitely needed~',
    specialEffects: {
      thumbnailGlitch: true,
      auraBehavior: 'chaotic',
    },
  },
  {
    id: 'da-vinci-live',
    displayName: 'Leonardo da Vinci',
    channelName: 'Da Vinci LIVE',
    avatar: '🎨',
    subscribers: 38956,
    verified: true,
    bio: 'Universal genius at work. High-speed invention showcases.',
  },
  {
    id: 'mash-kyrielight',
    displayName: 'Mash Kyrielight',
    channelName: 'Shield Hero Training Vlogs',
    avatar: '🛡️',
    subscribers: 52341,
    verified: true,
    bio: 'Training logs, reaction videos, and occasional tech support.',
  },
  {
    id: 'abby-dreams',
    displayName: 'Abigail Williams',
    channelName: 'Abby Dreams',
    avatar: '🌙',
    subscribers: 19847,
    verified: true,
    bio: 'Whispery ASMR and impossible architecture walkthroughs. Very soothing. Very cursed.',
    specialEffects: {
      auraBehavior: 'eldritch',
    },
  },
  {
    id: 'kama-corner',
    displayName: 'Kama',
    channelName: 'Kama\'s Corner',
    avatar: '💋',
    subscribers: 34821,
    verified: true,
    bio: 'Beauty advice, mind control tips, ethical lines are just suggestions.',
  },
  {
    id: 'gilgamesh-vault',
    displayName: 'Gilgamesh',
    channelName: 'Treasury Tours with the King',
    avatar: '👑',
    subscribers: 41203,
    verified: true,
    bio: 'Witness treasures beyond your mongrel comprehension.',
  },
  {
    id: 'hokusai-art',
    displayName: 'Katsushika Hokusai',
    channelName: 'Hokusai & Oei Art Studio',
    avatar: '🎨',
    subscribers: 27564,
    verified: true,
    bio: 'Art tutorials from a master. Octopus not included (usually).',
  },
  {
    id: 'ishtar-adventures',
    displayName: 'Ishtar',
    channelName: 'Goddess Ishtar\'s Adventures',
    avatar: '⭐',
    subscribers: 36982,
    verified: true,
    bio: 'Gems, adventures, and only occasionally catastrophic property damage.',
  },
];

// Quick lookup by ID
export const getCreator = (id: string): Creator | undefined => {
  return VOID_TUBE_CREATORS.find((c) => c.id === id);
};

// Get creator by channel name
export const getCreatorByChannel = (channelName: string): Creator | undefined => {
  return VOID_TUBE_CREATORS.find((c) => c.channelName === channelName);
};