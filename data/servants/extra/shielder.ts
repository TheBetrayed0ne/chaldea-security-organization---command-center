
import { Servant } from '../../../types';

export const SHIELDER_SERVANTS: Servant[] = [
  {
    id: 'SH-001',
    name: 'Mash Kyrielight',
    class: 'Shielder',
    rarity: 4,
    image: '/images/servants/SH-001.webp',
    description: 'The first and only Shielder-class Servant. A designer baby born in Chaldea, fused with the Heroic Spirit of Sir Galahad to become humanity\'s shield. Wears a black and purple combat suit with armored plating, her enormous cross-shaped shield as much a symbol as a weapon. Violet eyes filled with quiet determination, short lavender hair framing a face that\'s learned to be brave despite never asking for this life. Polite, earnest, and selfless to a fault. Her existence is a contradiction—artificial yet deeply human, fragile yet unbreakable. She fights not because she\'s strong, but because someone has to.',
    stats: {
      atk: 6400,
      hp: 13796,
      str: 'C',
      end: 'A',
      agi: 'D',
      man: 'B',
      lck: 'A',
      np: 'C'
    },
    noblePhantasm: {
      name: 'Lord Camelot',
      rank: 'C',
      type: 'Anti-Evil'
    },
    metadata: {
      alignment: 'Lawful Good',
      temperament: 'Stoic',
      department: 'Security',
      hazardLevel: 'Nominal',
      operationalTags: ['Demi-Servant', 'Kouhai', 'Shield of Humanity'],
      interactionNotes: 'Unfailingly loyal and protective. Addresses superiors with respect. Still learning what it means to live.',
      pairingRecs: ['Fujimaru Ritsuka', 'Romani Archaman', 'Leonardo da Vinci'],
      loiteringSpots: ['Command Room', 'Training Hall', 'Library', 'Cafeteria'],
      favoriteFoods: ['Cake', 'Tea', 'Home Cooking']
    }
  }
];
