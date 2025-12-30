
import { Servant } from '../../../../types.ts';
import { incidents } from './tabs/incidents.ts';

const Artoria: Servant = {
  id: 'S-001',
  name: 'Artoria Pendragon',
  class: 'Saber',
  rarity: 5,
  image: 'https://static.wikia.nocookie.net/fategrandorder/images/0/0b/Sabercardborder1.webp/revision/latest?cb=20221104083319',
  description: 'The embodiment of chivalry and nobility, Artoria stands proud in silver armor with a flowing blue dress beneath. emerald eyes—like someone who has borne the weight of a kingdom far too long.',
  stats: { atk: 11221, hp: 15150, str: 'B', end: 'B', agi: 'B', man: 'A', lck: 'A+', np: 'A++' },
  noblePhantasm: { name: 'Excalibur', rank: 'A++', type: 'Anti-Fortress' },
  metadata: {
    alignment: 'Lawful Good',
    temperament: 'Stoic',
    department: 'Combat',
    hazardLevel: 'Moderate',
    operationalTags: ['King of Knights', 'Holy Sword'],
    interactionNotes: 'Highly reliable. Maintain steady supply of Lion Cub Cakes for morale maintenance.',
    loiteringSpots: ['Training Hall', 'Garden Hub'],
    favoriteFoods: ['Lion Cub Cakes', 'Home-cooked Rice']
  },
  incidents
};

export default Artoria;
