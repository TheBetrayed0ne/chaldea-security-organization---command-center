
import { Servant } from '../../../../types.ts';

const EMIYA: Servant = {
  id: 'A-001',
  name: 'EMIYA',
  class: 'Archer',
  rarity: 4,
  image: 'https://static.wikia.nocookie.net/fategrandorder/images/d/d9/S011_Stage1.webp/revision/latest?cb=20220910075638',
  description: 'A walking contradiction wrapped in red cloth and black steel. White hair, sharp eyes. Built for war and rebuilt for penance.',
  stats: { atk: 9398, hp: 11521, str: 'D', end: 'C', agi: 'C', man: 'B', lck: 'E', np: 'A' },
  noblePhantasm: { name: 'Unlimited Blade Works', rank: 'A', type: 'Anti-Unit' },
  metadata: {
    alignment: 'Neutral Balanced',
    temperament: 'Pragmatic',
    department: 'Culinary',
    hazardLevel: 'Moderate',
    operationalTags: ['Counter Guardian', 'Master Chef'],
    interactionNotes: 'Excellent chef. Essential for facility morale during high-stress singularities.',
    loiteringSpots: ['Staff Kitchen', 'Rooftop'],
    favoriteFoods: ['Simple Home Cooking', 'Earl Grey Tea']
  },
  incidents: [
    { date: 'Yesterday', cat: 'SUPPLY', msg: 'Organized pantry by alphabetical order and spiritron density. Logistics efficiency increased by 14%.' }
  ]
};

export default EMIYA;
