
import { Servant } from '../../../../types.ts';

const Kyle: Servant = {
  id: 'F-Kyle',
  name: 'Kyle',
  class: 'Foreigner',
  rarity: 5,
  image: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=kyle',
  description: 'Reluctantly Assigned Survival Instructor and Entity Warden. Class "How Not to Die" teaches rune-assisted shelter and emergency dream evacuation. Sleeps through his own lectures but students still pass—his aura counts as "ambient tutoring."',
  stats: { atk: 11000, hp: 15000, str: 'B', end: 'A', agi: 'A', man: 'B', lck: 'C', np: 'EX' },
  noblePhantasm: { name: 'Frost-Rend: █ █████', rank: 'EX', type: 'Anti-World' },
  metadata: {
    alignment: 'Neutral Balanced',
    temperament: 'Pragmatic',
    department: 'Warden',
    hazardLevel: 'Extreme',
    operationalTags: ['Survival Instructor', 'Frost Warden', 'Cryptid'],
    interactionNotes: 'Body temp @ 28°C. Do not attempt to use as a heater. Provides excellent listening and cocoa.',
    loiteringSpots: ['Found Room (404)', 'Vents', 'Cafeteria Freezer'],
    favoriteFoods: ['Hot Cocoa', 'Bitter Tea', 'Greg (Spherical Anomaly)']
  },
  incidents: [
    { date: '02:12', cat: 'FROST', msg: 'Expanded Room 404 to include a fishing pier. Staff reporting 100% catch rate of conceptual fish.' },
    { date: '09:46', cat: 'SYS', msg: 'Logged unauthorized containment pod in Storage Wing B-7. Refused to clarify contents.' }
  ]
};

export default Kyle;
