
import { Servant } from '../../../types';

export const ALTER_EGO_SERVANTS: Servant[] = [
  {
    id: 'AE-001', name: 'Meltryllis', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-001.webp',
    description: 'Elegance sharpened to a needlepoint. Born of Artemis, Leviathan, and ego\'s own reflection - one of the Sakura Five. Mechanized legs like stilettos, dancer\'s discipline smothered in disdain. Beauty as armor. Grace repurposed as violence. Loves nothing more than the perfect fight and respects few who aren\'t worth the effort. Unexpectedly straightforward beneath the venom. Penguin enthusiast (in secret).',
    stats: { atk: 11692, hp: 13402, str: 'E', end: 'C', agi: 'A+', man: 'A', lck: 'B', np: 'EX' },
    noblePhantasm: { name: 'Saraswati Meltout', rank: 'EX', type: 'Anti-Army' },
    metadata: {
      alignment: 'Lawful Evil', temperament: 'Stoic', department: 'Combat', hazardLevel: 'Extreme',
      operationalTags: ['Sakura Five', 'Ballet Striker', 'Penguin Enthusiast'],
      interactionNotes: 'Glides rather than walks. Surprisingly protective of penguins. Dislikes inefficiency.',
      loiteringSpots: ['Sim Room', 'Ballet Studio', 'Aquarium Wing'],
      favoriteFoods: ['Salt', 'Refined Sweets']
    }
  },
  {
    id: 'AE-002', name: 'Passionlip', class: 'Alter Ego', rarity: 4,
    image: '/images/servants/AE-002.webp',
    description: 'The kindness you refuse to look at. Enormous clawed hands that could crush anything, including herself. Born from Parvati and Brynhildr - one of the Sakura Five. A heart too big to fit inside a chest. Apologies before sentences. Crushing affection (literally). Seeks to protect and be small despite everything. Terrified she might break what she loves most. Cannot read a room but can build one from scratch.',
    stats: { atk: 8977, hp: 13968, str: 'A+', end: 'A', agi: 'C', man: 'B', lck: 'E', np: 'EX' },
    noblePhantasm: { name: 'Brynhildr Romantia', rank: 'C', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Lawful Good', temperament: 'Cheerful', department: 'Engineering', hazardLevel: 'High',
      operationalTags: ['Sakura Five', 'Trash Compaction Specialist', 'Gentle Giant'],
      interactionNotes: 'Apologizes constantly. Excellent at structural demolition and fine repair work. Avoid hugs unless armored.',
      loiteringSpots: ['Workshop', 'Quiet Corners', 'Meditation Room'],
      favoriteFoods: ['Sweet Pastries', 'Pudding']
    }
  },
  {
    id: 'AE-003', name: 'Sesshōin Kiara', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-003.webp',
    description: 'A former therapist who became a living singularity of desire. Once meant to save humanity, warped into Beast III/R. Returned in Alter Ego form - still radiant, still dangerous, still smiling with that compassionate veneer stretched too thin. Loves humanity the way a collector loves butterflies. Serene tone, cutting insight, and the kind of "kindness" that strips you bare. Cultured. Manipulative. A demon in a nun\'s habit (sometimes).',
    stats: { atk: 11518, hp: 13965, str: 'E', end: 'C', agi: 'B', man: 'EX', lck: 'A', np: 'EX' },
    noblePhantasm: { name: 'Amita Amitabha', rank: 'EX', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Pragmatic', department: 'Medical', hazardLevel: 'Absolute',
      operationalTags: ['Former Beast', 'Therapist', 'Heaven\'s Hole'],
      interactionNotes: 'Charming but corrosive. Do not engage in one-on-one therapy. Restricted from outreach programs.',
      loiteringSpots: ['Confessional Booth', 'Library Private Wing', 'Rooftop Terrace'],
      favoriteFoods: ['Bitter Tea', 'Rare Chocolates']
    }
  },
  {
    id: 'AE-004', name: 'Mecha Eli-chan', class: 'Alter Ego', rarity: 4,
    image: '/images/servants/AE-004.webp',
    description: 'A castle turned kaiju turned idol. Giant mechanized tribute to Elisabeth Báthory with rocket launchers, beam cannons, and an oversized personality module. Loves the spotlight, hates off-brand versions of herself. Speaks in cutesy sing-song until combat mode activates. Surprisingly sincere about being a hero. Built by Servants using CSMC budget in a fit of whimsy and regret.',
    stats: { atk: 8661, hp: 12750, str: 'B', end: 'A', agi: 'C', man: 'B', lck: 'E', np: 'A' },
    noblePhantasm: { name: 'Breast Zero Erzsébet', rank: 'B+', type: 'Anti-Army' },
    metadata: {
      alignment: 'Lawful Good', temperament: 'Cheerful', department: 'Engineering', hazardLevel: 'Moderate',
      operationalTags: ['Mechanical Kaiju', 'Idol Aspirant', 'Heavy Artillery'],
      interactionNotes: 'Prone to dramatic poses. Maintenance-intensive. Do not critique her singing within earshot.',
      loiteringSpots: ['Hangar Bay', 'Performance Stage', 'Central Plaza'],
      favoriteFoods: ['High-Grade Fuel', 'Energy Drinks']
    }
  },
  {
    id: 'AE-005', name: 'Mecha Eli-chan Mk.II', class: 'Alter Ego', rarity: 4,
    image: '/images/servants/AE-005.webp',
    description: 'The "refined" upgrade. Sleeker, darker paint job, cooler demeanor, same over-engineered heart. Mk.II insists she\'s the superior model - more tactical, less flashy. Rivalry with original Mecha Eli-chan is constant and loud. Loves being a "rival" archetype. Still an idol at core, just goth-coded. Deadpan sarcasm in robot monotone.',
    stats: { atk: 8661, hp: 12750, str: 'B', end: 'A', agi: 'C', man: 'B', lck: 'E', np: 'A' },
    noblePhantasm: { name: 'Breast Zero Erzsébet', rank: 'B+', type: 'Anti-Army' },
    metadata: {
      alignment: 'Lawful Good', temperament: 'Stoic', department: 'Engineering', hazardLevel: 'Moderate',
      operationalTags: ['Mechanical Kaiju', 'Rival Unit', 'Heavy Artillery'],
      interactionNotes: 'Competitive with Mk.I. Tactical and sarcastic. Equally high-maintenance.',
      loiteringSpots: ['Hangar Bay', 'Tactical Operations Room', 'Performance Stage (reluctantly)'],
      favoriteFoods: ['Premium Fuel', 'Dark Roast Coffee (for aesthetic)']
    }
  },
  {
    id: 'AE-006', name: 'Okita Sōji (Alter)', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-006.webp',
    description: 'A "what-if" born from the Counter Force. The Okita who never died young, who became an agent of correction and pruning instead of a tragic swordswoman. Black jacket. Dead eyes. Quiet competence. No theatrics. Rarely speaks unless mission-critical. Gun-kata. Blade finesse. Ruthless in execution, clinical in approach. The Shinsengami who gave up everything warm to carry out a mission she never wanted but will never abandon.',
    stats: { atk: 12068, hp: 13230, str: 'B', end: 'B', agi: 'A+', man: 'E', lck: 'D', np: 'EX' },
    noblePhantasm: { name: 'Ame no Murakumo Tsurugiken', rank: 'EX', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Neutral Evil', temperament: 'Stoic', department: 'Field Operations', hazardLevel: 'High',
      operationalTags: ['Counter Guardian', 'Absolute Sword', 'Pruning Agent'],
      interactionNotes: 'Minimal conversation. Highly efficient. Avoids original Okita Sōji for emotional reasons.',
      loiteringSpots: ['Rooftop', 'Armory', 'Isolation Wing'],
      favoriteFoods: ['Black Coffee', 'Plain Onigiri']
    }
  },
  {
    id: 'AE-007', name: 'Sitonai', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-007.webp',
    description: 'Illyasviel von Einzbern possessed by a composite Divine Spirit - Sitonai of the Ainu, Louhi of Finnish myth, and Freyja of the Norse. Playful exterior, crushing divinity beneath. Still "Illya" at heart - mischievous, fiercely protective, sharper than she looks. Treats Chaldea like an oversized dollhouse. Can freeze continents or bake cookies. Whichever the mood calls for. Adored by smaller Servants. Feared by maintenance staff.',
    stats: { atk: 10546, hp: 13968, str: 'C', end: 'B', agi: 'B', man: 'A+', lck: 'A', np: 'A' },
    noblePhantasm: { name: 'Pohjola\'s Witch', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Neutral Good', temperament: 'Cheerful', department: 'Magecraft', hazardLevel: 'High',
      operationalTags: ['Composite Divinity', 'Cryomancer', 'Pseudo-Servant'],
      interactionNotes: 'Kind but commanding. Protective of EMIYA. Highly capable in magecraft operations.',
      loiteringSpots: ['Library Study Nook', 'Snowy Simulation Zones', 'Kitchen'],
      favoriteFoods: ['Hot Cocoa', 'Pancakes with Syrup']
    }
  },
  {
    id: 'AE-008', name: 'Kingprotea', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-008.webp',
    description: 'The youngest and largest of the Sakura Five. Born to grow without limit, an embodiment of endless hunger and scale. Currently housed in a bounded field to prevent accidental facility destruction. Childlike. Curious. Innocent in the way landslides are innocent. Loves small, soft things. Accidentally breaks them. Cries about it. Repeat cycle. BB\'s "baby sister." The walking apocalypse with a heart of gold.',
    stats: { atk: 11108, hp: 15221, str: 'EX', end: 'A', agi: 'D', man: 'B', lck: 'B', np: 'EX' },
    noblePhantasm: { name: 'Airavata King Size', rank: 'EX', type: 'Anti-World' },
    metadata: {
      alignment: 'Chaotic Good', temperament: 'Cheerful', department: 'Containment', hazardLevel: 'Extreme',
      operationalTags: ['Sakura Five', 'Growth Anomaly', 'Kaiju Class'],
      interactionNotes: 'Must be monitored at all times. Containment field required. Gentle but catastrophically dangerous.',
      pairingRecs: ['BB', 'Melt', 'Lip'],
      restrictions: 'Do not deploy in enclosed spaces. Emotional support mandatory.',
      loiteringSpots: ['Containment Zone Theta', 'Observation Garden (scaled)', 'Bounded Field Chamber'],
      favoriteFoods: ['Everything Edible', 'Sweets (in large quantities)']
    }
  },
  {
    id: 'AE-009', name: 'Ashiya Dōman', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-009.webp',
    description: 'Professional villain. Theatrical to a fault. Heian-era onmyōji draped in crimson and curses, delighting in chaos, humiliation, and long-winded monologues. Master manipulator and chronic scenery-chewer. Loves watching people squirm. Obsessed with Abe no Seimei and Minamoto no Raikō (for all the wrong reasons). Malicious but strangely magnetic. Would sell you out for a single cornchip if it was funny enough. Under surveillance at all times.',
    stats: { atk: 11993, hp: 12843, str: 'E', end: 'D', agi: 'B', man: 'A+', lck: 'A', np: 'A++' },
    noblePhantasm: { name: 'Cursed Cutting Crater', rank: 'A', type: 'Anti-Army' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Mischievous', department: 'Magecraft', hazardLevel: 'Extreme',
      operationalTags: ['Onmyōji', 'Limbo Incarnate', 'Professional Antagonist'],
      interactionNotes: 'Do not trust. Do not leave unattended. Useful but treacherous. Monitored 24/7.',
      pairingRecs: ['None'],
      restrictions: 'Restricted from solo operations. No access to ritual chambers unsupervised.',
      loiteringSpots: ['Dark Ritual Chambers', 'Drama Club (banned)', 'Observation Deck (under escort)'],
      favoriteFoods: ['Bitter Sweets', 'Misfortune']
    }
  },
  {
    id: 'AE-010', name: 'Manannán mac Lir (Bazett)', class: 'Alter Ego', rarity: 4,
    image: '/images/servants/AE-010.webp',
    description: 'Bazett Fraga McRemitz as vessel for the Celtic sea god Manannán mac Lir. Stoic, competent, deeply professional. Possesses Fragarach and a work ethic that could shame mountains. A warrior first, a thinker second, and emotionally constipated third. Takes missions seriously, takes herself even more seriously. Terrible at small talk. Exceptional at delivering knuckle sandwiches. Secretly fond of cute things but will deny it with fists if pressed.',
    stats: { atk: 9661, hp: 11882, str: 'B', end: 'B', agi: 'A', man: 'C', lck: 'D', np: 'A+' },
    noblePhantasm: { name: 'Fragarach', rank: 'A+', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Lawful Neutral', temperament: 'Stoic', department: 'Field Operations', hazardLevel: 'Moderate',
      operationalTags: ['Enforcer', 'Pseudo-Servant', 'Close Combat Specialist'],
      interactionNotes: 'Professional. Efficient. Do not question her methods. Fond of dogs.',
      loiteringSpots: ['Training Hall', 'Command Briefing Room', 'Quiet Corners'],
      favoriteFoods: ['Irish Stew', 'Strong Tea']
    }
  },
  {
    id: 'AE-011', name: 'Taisui Xingjun', class: 'Alter Ego', rarity: 4,
    image: '/images/servants/AE-011.webp',
    description: 'A wandering Daoist divinity manifesting through Yu Mei-ren as a host. Youthful, energetic, unexpectedly upbeat. Speaks with old-timey formality but loves modern trends. Equal parts celestial bureaucrat and chaos gremlin. Collects charms. Loves festivals. Dabbles in fortune-telling with alarming accuracy. Kind-hearted but meddlesome. Frequently "helps" in ways no one asked for. Smells faintly of incense and regret.',
    stats: { atk: 9434, hp: 12348, str: 'C', end: 'B', agi: 'B', man: 'A', lck: 'A+', np: 'B' },
    noblePhantasm: { name: 'Taisui Transformation', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Neutral Good', temperament: 'Cheerful', department: 'Religious Support', hazardLevel: 'Nominal',
      operationalTags: ['Daoist Divinity', 'Fortune Teller', 'Festival Enthusiast'],
      interactionNotes: 'Friendly but intrusive. Accurate divinations. Loves helping (sometimes too much).',
      loiteringSpots: ['Shrine Area', 'Festival Grounds', 'Divination Parlor'],
      favoriteFoods: ['Mooncakes', 'Rice Wine']
    }
  },
  {
    id: 'AE-012', name: 'Super Bunyan', class: 'Alter Ego', rarity: 1,
    image: '/images/servants/AE-012.webp',
    description: 'Paul Bunyan but bigger. The result of an experiment gone adorably wrong. Kaiju-sized lumberjack with an even bigger smile. Genuine. Kind. Catastrophically strong. Treats trees like toothpicks and mountains like stepping stones. Childlike wonder in giant form. Loves making friends, building things, and pancakes. BB may have been involved in her creation. No one wants to ask why.',
    stats: { atk: 6790, hp: 8101, str: 'EX', end: 'A', agi: 'C', man: 'E', lck: 'B', np: 'A++' },
    noblePhantasm: { name: 'Marvelous Exploits', rank: 'A++', type: 'Anti-Army' },
    metadata: {
      alignment: 'Neutral Good', temperament: 'Cheerful', department: 'Engineering', hazardLevel: 'High',
      operationalTags: ['American Folklore', 'Giant Class', 'Construction Specialist'],
      interactionNotes: 'Gentle but monumentally clumsy. Excellent at large-scale projects. Keep away from fragile objects.',
      loiteringSpots: ['Logging Yard (simulated)', 'Construction Zones', 'Cafeteria'],
      favoriteFoods: ['Pancakes (towers of)', 'Maple Syrup']
    }
  },
  {
    id: 'AE-013', name: 'Xu Fu', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-013.webp',
    description: 'The immortal alchemist who fooled the First Emperor and lived to regret it. Cheerful, eccentric, dangerously curious. Looks like a harmless scholar but is functionally unkillable and ethically flexible. Master of medicine, poisons, and philosophical loopholes. Loves experimentation. Hates paperwork. Chronically impossible to keep in one place. May or may not have turned into a jellyfish at one point. Refuses to elaborate.',
    stats: { atk: 10687, hp: 14259, str: 'D', end: 'B', agi: 'C', man: 'A', lck: 'A+', np: 'B' },
    noblePhantasm: { name: 'Eternal Vow of Immortality', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Neutral', temperament: 'Cheerful', department: 'Medical', hazardLevel: 'Moderate',
      operationalTags: ['Immortal Alchemist', 'Elixir Master', 'Escape Artist'],
      interactionNotes: 'Brilliant but erratic. Useful in medical emergencies. Cannot be contained reliably.',
      loiteringSpots: ['Alchemy Lab', 'Medical Bay', 'Literally Anywhere Else'],
      favoriteFoods: ['Exotic Herbs', 'Elixirs']
    }
  },
  {
    id: 'AE-014', name: 'Grigori Rasputin', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-014.webp',
    description: 'The Mad Monk wearing Kirei Kotomine\'s face. Priest. Healer. Unkillable heretic with a smile like broken glass. Possesses Rasputin\'s endurance and Kirei\'s cruelty, wrapped in cassock and scripture. Radiates "wrong" the way a forest fire radiates warmth. Speaks softly. Means harm. Expert at psychological warfare and surviving the unsurvivable. Disturbing in a way that bypasses logic and punches the gut.',
    stats: { atk: 10901, hp: 13685, str: 'C', end: 'A+', agi: 'B', man: 'A', lck: 'B', np: 'EX' },
    noblePhantasm: { name: 'Tsesarevich Phenomenon', rank: 'EX', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Pragmatic', department: 'Religious Support', hazardLevel: 'Extreme',
      operationalTags: ['Mad Monk', 'Pseudo-Servant', 'Survivor'],
      interactionNotes: 'Extremely dangerous. Manipulative. Useful in crisis but never trustworthy. Monitored closely.',
      pairingRecs: ['None'],
      restrictions: 'No unsupervised access to psychological operations. Restricted from counseling.',
      loiteringSpots: ['Chapel', 'Interrogation Rooms', 'Dark Hallways'],
      favoriteFoods: ['Vodka', 'Bread and Salt']
    }
  },
  {
    id: 'AE-015', name: 'Larva/Tiamat', class: 'Alter Ego', rarity: 4,
    image: '/images/servants/AE-015.webp',
    description: 'The Primordial Mother in miniature. Beast II regressed to infancy. Innocent. Silent. Radiates warmth and existential dread in equal measure. Wants only to be loved and to love in return, but her nature is creation without end - dangerous even in this form. Communicates through gestures and feelings. Clings to those she trusts. Cries oceans if abandoned. Under permanent observation and protection. Everyone\'s adoptive child and no one\'s responsibility.',
    stats: { atk: 7981, hp: 13362, str: 'C', end: 'B+', agi: 'D', man: 'A++', lck: 'EX', np: 'A++' },
    noblePhantasm: { name: 'Sea of Life', rank: 'A++', type: 'Anti-Humanity' },
    metadata: {
      alignment: 'Chaotic Good', temperament: 'Cheerful', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['Primordial Mother', 'Beast Class (Larval)', 'Creation Incarnate'],
      interactionNotes: 'Must never be left alone. Extreme emotional sensitivity. Catastrophic if distressed.',
      pairingRecs: ['Romani', 'Mash', 'Fujimaru'],
      restrictions: 'Never deployed in combat. Permanent containment and care protocols in effect.',
      loiteringSpots: ['Nursery', 'Garden Pond', 'Safe Room Alpha'],
      favoriteFoods: ['Milk', 'Honey', 'Warmth']
    }
  },
  {
    id: 'AE-016', name: 'Azumi no Isora (Hibiki & Chikagi)', class: 'Alter Ego', rarity: 4,
    image: '/images/servants/AE-016.webp',
    description: 'Twin shrine maidens fused into a single Servant. Hibiki - bright, cheerful, optimistic. Chikagi - serious, cautious, pragmatic. They bicker constantly but move in perfect sync. Ritual dancers and spiritual mediators. Expert at barriers, purification, and making everything a competition. Represent duality in all its bickering, affectionate glory. Together they are unstoppable. Separately they are anxious wrecks.',
    stats: { atk: 9212, hp: 12685, str: 'D', end: 'C', agi: 'B', man: 'A', lck: 'B', np: 'B+' },
    noblePhantasm: { name: 'Twin Shrine Dance', rank: 'B+', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Lawful Good', temperament: 'Cheerful', department: 'Religious Support', hazardLevel: 'Nominal',
      operationalTags: ['Twin Shrine Maidens', 'Purification Experts', 'Dual Consciousness'],
      interactionNotes: 'Highly effective as a team. Do not separate. Constant bickering is normal and healthy.',
      loiteringSpots: ['Shrine', 'Training Courtyard', 'Tea Room'],
      favoriteFoods: ['Mochi', 'Green Tea']
    }
  },
  {
    id: 'AE-017', name: 'Kazuradrop', class: 'Alter Ego', rarity: 5,
    image: '/images/servants/AE-017.webp',
    description: 'Corruption in a candy wrapper. The final and most dangerous of the Sakura Five - locked away, forgotten, or worse: active. Saccharine pastels and mask-like smile stretched too wide. Wants to be loved. Needs to consume. The kind of sweetness that curdles in your throat. Peels away reality like wallpaper. Loves you so much she\'ll drown you in it. Genius manipulator. Walking infohazard. Untrustworthy in every possible sense.',
    stats: { atk: 11607, hp: 13960, str: 'E', end: 'C', agi: 'B', man: 'A+', lck: 'EX', np: 'EX' },
    noblePhantasm: { name: 'Insect Eater', rank: 'EX', type: 'Anti-World' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Mischievous', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['Sakura Five', 'Reality Manipulator', 'Love Incarnate (Twisted)'],
      interactionNotes: 'Extremely dangerous. Do not engage emotionally. Containment priority. Reality peeler.',
      pairingRecs: ['None'],
      restrictions: 'Maximum security containment. No solo interactions. Monitor all communications.',
      loiteringSpots: ['Containment Cell Omega', 'Garden (when permitted)', 'Dreamscape'],
      favoriteFoods: ['Love', 'Sweet Nothings', 'Lies']
    }
  }
];
