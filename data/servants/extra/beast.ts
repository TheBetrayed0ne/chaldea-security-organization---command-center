
import { Servant } from '../../../types';

export const BEAST_SERVANTS: Servant[] = [
  { 
    id: 'Bs-001', name: 'Space Ereshkigal', class: 'Beast', rarity: 5, 
    image: '/images/servants/Bs001.png',
    description: 'Mistress of the Underworld and Vessel for a Beast of the Servant Universe. Recast as a galactic singularity in a bodysuit veiled in black hole shimmer. Embodying the Logos of Hoarding. Signature phrase "~na no dawa" is active. Confident, elegant, and guided by entropy dignified.', 
    stats: { atk: 12554, hp: 14220, str: 'B', end: 'B', agi: 'A', man: 'EX', lck: 'A', np: 'EX' }, 
    noblePhantasm: { name: 'Archetype Inception', rank: 'EX', type: 'Anti-World' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Cheerful', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['Logos of Hoarding', 'Galactic Singularity', 'Super Goddess'],
      interactionNotes: 'Unless she has to, she will stay in her first Ascension.Great at hand-to-hand combat.',
      loiteringSpots: ['The Edge of Time', 'Staff Garden', 'Observation Deck'],
      favoriteFoods: ['Star-Infused Sweets', 'Lunar Cocoa']
    }
  },
  { 
    id: 'Bs-002', name: 'Sodom\'s Beast / Draco', class: 'Beast', rarity: 5, 
    image: '/images/servants/Bs002.webp',
    description: 'Juvenile form of Beast VI/S. Ruthless queen but ultimate cool-heart tsundere. Born from a "what-if" where Nero did not meet her end alone. Loathes slothfulness and corruption. Stays in child-like first ascension to chat with "younger servants".', 
    stats: { atk: 12116, hp: 14680, str: 'A', end: 'A', agi: 'B', man: 'A', lck: 'D', np: 'EX' }, 
    noblePhantasm: { name: 'Great Flood of Depravity', rank: 'EX', type: 'Anti-World' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Stoic', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['Enemy of Passion', 'Babylon Destroyer', 'Nero Variant'],
      interactionNotes: 'Prefers 1st Ascension. Strictly serious queen. Will never show her dere side.',
      loiteringSpots: ['Director\'s Private Balcony', 'Younger Servant Quarters'],
      favoriteFoods: ['Gold-leafed Grapes', 'Rare Steaks']
    }
  },
  { 
    id: 'Bs-003', name: 'U-Olga Marie', class: 'Beast', rarity: 5, 
    image: '/images/servants/Bs003.webp',
    description: 'The Alien God in the appearance of former director Olga Marie. Highly prideful yet carrying a deep-rooted persecution complex. In her 3rd Ascension (President of Earth), she is introverted and passive, believing herself to always be right. Occasionally speaks as a 16-year-old girl.', 
    stats: { atk: 13000, hp: 15500, str: 'A', end: 'A', agi: 'B', man: 'EX', lck: 'B', np: 'EX' }, 
    noblePhantasm: { name: 'The Alien Sun', rank: 'EX', type: 'Anti-World' },
    metadata: {
      alignment: 'Lawful Neutral', temperament: 'Volatile', department: 'Research', hazardLevel: 'Absolute',
      operationalTags: ['President of Earth', 'Alien God', 'Persecution Complex'],
      interactionNotes: 'Unless she has to, she will stay in her third Ascension. Respects competent individuals.',
      loiteringSpots: ['Director\'s Office (Legacy)', 'Sector 4 Observations'],
      favoriteFoods: ['Gourmet Croissants', 'High-end Tea']
    }
  },
];
