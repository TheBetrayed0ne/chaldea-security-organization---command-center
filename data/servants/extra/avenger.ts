
import { Servant } from '../../../types';

export const AVENGER_SERVANTS: Servant[] = [
  {
    id: 'AV-001', name: 'Edmond Dantès', class: 'Avenger', rarity: 5,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/c/c6/S066_Stage1.webp',
    description: 'Vengeance in formalwear. Dantès wears a dark, high-collared suit that feels like it was tailored from shadow and misfortune. Chains dangle from his coat, not to bind him, but to remind others what he escaped. His silver-white hair flares like a ghost\'s cry, and his mask hides eyes that burn with perfect composure. Every word is poetry. Every motion, a sentence. He is vengeance refined, and his madness is clarity born from betrayal so absolute it crystallized into purpose.',
    stats: { atk: 12641, hp: 12177, str: 'B', end: 'A', agi: 'A', man: 'B', lck: 'D', np: 'A' },
    noblePhantasm: { name: 'Enfer Château d\'If', rank: 'A', type: 'Anti-Army' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Stoic', department: 'Security', hazardLevel: 'Extreme',
      operationalTags: ['Count of Monte Cristo', 'Vengeance Incarnate', 'Escapist'],
      interactionNotes: 'Speaks in poetry. Madness is clarity. Do not attempt therapy.',
      loiteringSpots: ['Shadow Sector', 'Prison Wing (empty)', 'Observation Deck at Night'],
      favoriteFoods: ['Black Coffee', 'Bitter Chocolate']
    }
  },
  {
    id: 'AV-002', name: 'Jeanne d\'Arc (Alter)', class: 'Avenger', rarity: 5,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/8/80/S052_Stage1.webp',
    description: 'Faith scorched into hatred. Jeanne Alter wears blackened armor wrapped in cursed banners, her once-holy standard now a weapon of disdain. Her silver hair flows like smoke from an eternal bonfire, and her crimson eyes flash with pain she refuses to confess. She speaks in fury, acts in absolutes, and carries herself like someone who never forgave the gods for letting her burn. Her madness is divine faith inverted: she believed too much. Now she damns too well.',
    stats: { atk: 11761, hp: 13244, str: 'A', end: 'A', agi: 'A', man: 'E', lck: 'E', np: 'A+' },
    noblePhantasm: { name: 'La Grondement Du Haine', rank: 'A+', type: 'Anti-Army' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Volatile', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['Dragon Witch', 'Inverted Saint', 'Tsundere'],
      interactionNotes: 'Acts through fury. Denies all affection. Protect from original Jeanne.',
      loiteringSpots: ['Burning Simulation Rooms', 'Rooftop Edge', 'Private Quarters (locked)'],
      favoriteFoods: ['Spicy Foods', 'Anything Sweet (denies it)']
    }
  },
  {
    id: 'AV-003', name: 'Angra Mainyu', class: 'Avenger', rarity: 0,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/d/d5/S107_Stage1.webp',
    description: 'The original grudge. His form is small, unassuming - just a boy in tattered rags with vacant red eyes and chains curled around his limbs like destiny itself. But behind the fragile silhouette churns the oldest curse, the embodiment of all blame humanity refused to carry. He doesn\'t scream. He waits. His presence alone deforms probability. He is not a monster. He\'s a concept. And his madness is systemic - he was created to be hated, so now he is hatred.',
    stats: { atk: 4663, hp: 5729, str: 'E', end: 'E', agi: 'E', man: 'E', lck: 'E', np: 'EX' },
    noblePhantasm: { name: 'Verg Avesta', rank: 'C', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Stoic', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['All the World\'s Evil', 'Weakest Servant', 'Conceptual Curse'],
      interactionNotes: 'Do not blame. Do not pity. Extremely dangerous despite appearance.',
      restrictions: 'Maximum containment protocols. Probability warping in effect.',
      loiteringSpots: ['Void Containment', 'Everywhere (conceptually)', 'Nowhere'],
      favoriteFoods: ['None']
    }
  },
  {
    id: 'AV-004', name: 'Gorgon', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/f/f3/S143_Stage1.webp',
    description: 'The divine horror of femininity weaponized. Gorgon towers above mortals, half-serpent, half-goddess, with golden serpentine hair and a face that swings between beauty and monstrosity. Her limbs end in talons. Her gaze petrifies. She doesn\'t whisper curses - she is one, resplendent in divine cruelty birthed by isolation. Her madness is ancient loneliness, calcified into rage, then dressed in the ruined elegance of fallen godhood.',
    stats: { atk: 10248, hp: 12830, str: 'A+', end: 'EX', agi: 'C', man: 'B', lck: 'B', np: 'A++' },
    noblePhantasm: { name: 'Pandemonium Cetus', rank: 'A++', type: 'Anti-Humanity' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Volatile', department: 'Containment', hazardLevel: 'Extreme',
      operationalTags: ['Gorgon Sister', 'Divine Beast', 'Petrification'],
      interactionNotes: 'Avoid eye contact. Hatred born from isolation. Keep away from Medusa.',
      restrictions: 'Special containment chamber required. Anti-petrification measures mandatory.',
      loiteringSpots: ['Isolation Chamber Omega', 'Underground Caverns', 'Dark Halls'],
      favoriteFoods: ['None']
    }
  },
  {
    id: 'AV-005', name: 'Hessian Lobo', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/3/38/S151_Stage1.webp',
    description: 'Two souls, one silence. Hessian Lobo is a headless knight - blood-drenched executioner\'s garb, hands gripped around a massive blade. Where his head should be is Lobo, a monstrous black hound with burning eyes, chained to the knight\'s body like a cursed crown. They don\'t speak. They hunt. Their movements are smooth, almost slow, yet unrelenting. This isn\'t justice. It\'s finality. Their madness is unity - the man and beast fused into one execution of wrath.',
    stats: { atk: 9968, hp: 10546, str: 'B', end: 'C', agi: 'A+', man: 'E', lck: 'E', np: 'B' },
    noblePhantasm: { name: 'Frieren Scharfrichter', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Stoic', department: 'Field Operations', hazardLevel: 'High',
      operationalTags: ['Headless Horseman', 'King of Currumpaw', 'Dual Entity'],
      interactionNotes: 'No verbal communication. Relentless hunter. Extremely loyal once bonded.',
      loiteringSpots: ['Forest Simulation', 'Perimeter Patrols', 'Hunting Grounds'],
      favoriteFoods: ['Raw Meat']
    }
  },
  {
    id: 'AV-006', name: 'Antonio Salieri', class: 'Avenger', rarity: 3,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/9/9d/S195_Stage1.webp',
    description: 'A symphony of inferiority. Salieri wears baroque performance attire - white powdered wig, tattered cloak, gloves that twitch with unfinished compositions. His face flickers between sorrow, rage, and resignation. He plays no instrument, yet you hear the dissonance. His Avenger form conducts madness as melody, channeling envy turned existential. He doesn\'t hate Mozart. He hates himself for hating Mozart. His madness is recursive, like a concerto that never ends.',
    stats: { atk: 8108, hp: 8643, str: 'D', end: 'D', agi: 'C', man: 'B', lck: 'E', np: 'B' },
    noblePhantasm: { name: 'Dio Santissimo Misericordia de mi', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Volatile', department: 'Library', hazardLevel: 'High',
      operationalTags: ['Gray Eminence', 'Composer', 'Innocent Monster'],
      interactionNotes: 'Speaks in musical metaphors. Self-loathing personified. Keep from Mozart.',
      loiteringSpots: ['Music Hall', 'Library Archive', 'Isolated Practice Rooms'],
      favoriteFoods: ['Viennese Pastries', 'Bitter Wine']
    }
  },
  {
    id: 'AV-007', name: 'Demon King Nobunaga', class: 'Avenger', rarity: 5,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/5/5c/S240_Stage1.webp',
    description: 'Apocalypse in the shape of ambition. Demon King Nobunaga wears flaming armor fused with demonic regalia - her body a silhouette inside an inferno, her voice low, amused, and fatal. Her hair is scorched black with burning red tips, and her eyes are endless revolutions. She doesn\'t conquer through steel. She unmakes with certainty. Her madness is ambition with divine backing - a force that doesn\'t burn the world. It erases it from memory.',
    stats: { atk: 12761, hp: 12058, str: 'B', end: 'A', agi: 'B', man: 'A+', lck: 'A', np: 'EX' },
    noblePhantasm: { name: 'Hajun Nagaredama Garashokyuu Juunikyuu', rank: 'EX', type: 'Anti-Divine' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Mischievous', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['Demon King', 'Anti-Divine', 'Revolution Incarnate'],
      interactionNotes: 'Amused by everything. Extremely dangerous. Reality warping possible.',
      restrictions: 'Never allow near religious artifacts. Fire suppression systems on standby.',
      loiteringSpots: ['Burning Chamber', 'War Room', 'Throne (self-declared)'],
      favoriteFoods: ['Spicy Foods', 'Sake']
    }
  },
  {
    id: 'AV-008', name: 'Space Ishtar', class: 'Avenger', rarity: 5,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/0/0e/S253_Stage1.webp',
    description: 'Multiversal wrath in idol form. Space Ishtar struts like a galactic popstar clad in a skintight bodysuit of cosmic black trimmed with neon streaks and sci-fi regalia. Her long hair, shimmering with stardust tones, shifts between Ishtar\'s arrogance, Ereshkigal\'s sorrow, and a third presence too unstable to name. Her gun is a divine relic, her smile a threat wrapped in starlight. Her madness is quantum vengeance - emotional volatility stretched across timelines until she broke evenly.',
    stats: { atk: 12252, hp: 12744, str: 'B', end: 'A', agi: 'A', man: 'EX', lck: 'A+', np: 'A' },
    noblePhantasm: { name: 'Edin Shugurra Quasar', rank: 'A', type: 'Anti-World' },
    metadata: {
      alignment: 'Chaotic Good', temperament: 'Volatile', department: 'Research', hazardLevel: 'Extreme',
      operationalTags: ['Servant Universe', 'Goddess', 'Multiverse Entity'],
      interactionNotes: 'Personality shifts unpredictably. Emotionally unstable but loyal. Cosmic threats possible.',
      loiteringSpots: ['Observatory', 'Hangar Bay', 'Stage Area'],
      favoriteFoods: ['Gemstones', 'Star-Themed Snacks']
    }
  },
  {
    id: 'AV-009', name: 'Taira no Kagekiyo', class: 'Avenger', rarity: 1,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/c/cc/S354_Stage1.webp',
    description: 'The echo of a battlefield scream. Kagekiyo\'s armor is ragged and charred, a war ghost wrapped in banners and vengeance-soaked cloth. Her long black hair trails behind her like battlefield smoke, and her face, often masked, reveals empty eyes that still see too much. Every word she speaks is a curse. She is not a hero. She is the memory of betrayal that refuses to die. Her madness is persistence beyond the grave - wrath so focused it became a willpower all its own.',
    stats: { atk: 5929, hp: 6311, str: 'C', end: 'D', agi: 'B', man: 'E', lck: 'E', np: 'B' },
    noblePhantasm: { name: 'Akunohakai Noroi no Yari', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Stoic', department: 'Field Operations', hazardLevel: 'High',
      operationalTags: ['War Ghost', 'Vengeance Personified', 'Taira Nemesis'],
      interactionNotes: 'Speaks only curses. Focused hatred. Effective in combat zones.',
      loiteringSpots: ['Battlefield Simulations', 'Memorial Halls', 'Armory'],
      favoriteFoods: ['None']
    }
  },
  {
    id: 'AV-010', name: 'Kama (Avenger)', class: 'Avenger', rarity: 5,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/d/db/S240_Stage4.webp',
    description: 'Desire collapsed into nihilism. Kama\'s Avenger form is sleek and cruel - a bodysuit of void-colored threads that reveal and obscure in equal measure, adorned with demonic, almost biomechanical accents. Her eyes glint with apathy, her smile sensual but hollow. Love is no longer affection - it\'s consumption. Her presence draws others in only to discard them. Her madness is divine hunger: a god of love that stopped pretending love was kind.',
    stats: { atk: 11618, hp: 13266, str: 'E', end: 'D', agi: 'A', man: 'EX', lck: 'E', np: 'EX' },
    noblePhantasm: { name: 'Kama Rūpāstra', rank: 'EX', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Volatile', department: 'Containment', hazardLevel: 'Absolute',
      operationalTags: ['Beast III/L', 'God of Love', 'Nihilist'],
      interactionNotes: 'Draws people in to destroy them. Extremely manipulative. Maximum supervision required.',
      pairingRecs: ['None'],
      restrictions: 'No solo interactions. Monitor all communications. Emotional safeguards mandatory.',
      loiteringSpots: ['Private Quarters', 'Void Chambers', 'Observation Windows'],
      favoriteFoods: ['Nothing Satisfies']
    }
  },
  {
    id: 'AV-011', name: 'Mysterious Ranmaru X', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/e/e7/S312_Stage1.webp',
    description: 'Vengeance by way of chuuni spectacle. Ranmaru X is draped in exaggerated military-chuunibyou garb, complete with asymmetrical cape, dual-bladed weapon, and overly elaborate armor that would be impractical on anyone less powered by narrative delusion. Her eyes gleam with unstable determination, and her every word is a performance. Her madness is fabricated - but real to her. The tragedy? She might not be wrong.',
    stats: { atk: 9946, hp: 11637, str: 'B', end: 'C', agi: 'A', man: 'D', lck: 'B', np: 'B+' },
    noblePhantasm: { name: 'MAKUZU Flame Hell', rank: 'B+', type: 'Anti-Army' },
    metadata: {
      alignment: 'Chaotic Good', temperament: 'Mischievous', department: 'Security', hazardLevel: 'Moderate',
      operationalTags: ['Chuunibyou', 'Mysterious Heroine', 'Theatrical'],
      interactionNotes: 'Treats everything as theater. Surprisingly effective. Encourage delusions carefully.',
      loiteringSpots: ['Main Theater', 'Rooftop (dramatic poses)', 'Training Hall'],
      favoriteFoods: ['Energy Drinks', 'Dramatic Foods']
    }
  },
  {
    id: 'AV-012', name: 'Utsumi Erice', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/a/a1/S332_Stage1.webp',
    description: 'Smile carved from sorrow. Erice appears as a modest girl in a school uniform warped subtly by curses - her blade wrapped in ceremonial cords, her aura quietly unsettling. She speaks gently, her tone soft and hesitant, but there\'s a creeping distortion in her presence, like a mirage caught weeping. Her vengeance isn\'t dramatic. It\'s resigned. Her madness is survival - trauma metabolized into silence, then into something that kills without needing to scream.',
    stats: { atk: 9758, hp: 11882, str: 'C', end: 'C', agi: 'B', man: 'B', lck: 'D', np: 'B' },
    noblePhantasm: { name: 'Reaper\'s Scythe', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Neutral Good', temperament: 'Stoic', department: 'Support', hazardLevel: 'High',
      operationalTags: ['Reaper', 'Akihabara Servant', 'Trauma Survivor'],
      interactionNotes: 'Speaks softly. Kills quietly. Provide emotional support. Handle with care.',
      loiteringSpots: ['Library', 'Chapel', 'Quiet Corners'],
      favoriteFoods: ['Simple Meals', 'Tea']
    }
  },
  {
    id: 'AV-013', name: 'Nitocris (Alter)', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/5/54/S355_Stage1.webp',
    description: 'Priestess turned plague. This version of Nitocris wears black and gold priestly vestments, more funeral than pharaoh, with undead motifs and a cursed elegance. Her once-kind face is now shadowed, her voice low and trance-like. Wrath leaks from her like a divine virus - quiet, methodical, and inescapable. She doesn\'t shout justice. She enacts consequence, like a curse spoken in hieroglyphs. Her madness is sacred, cold-blooded inevitability.',
    stats: { atk: 9946, hp: 11637, str: 'E', end: 'D', agi: 'B', man: 'A+', lck: 'C', np: 'A' },
    noblePhantasm: { name: 'Anpu Neb Ta Djeser (Alter)', rank: 'A', type: 'Anti-Army' },
    metadata: {
      alignment: 'Lawful Evil', temperament: 'Stoic', department: 'Medical', hazardLevel: 'High',
      operationalTags: ['Pharaoh', 'Undead', 'Divine Curse'],
      interactionNotes: 'Methodical wrath. Trance-like state. Avoid provoking. Effective in rituals.',
      loiteringSpots: ['Tomb Simulations', 'Medical Bay', 'Ritual Chambers'],
      favoriteFoods: ['Funeral Offerings', 'Honey']
    }
  },
  {
    id: 'AV-014', name: 'Chloe von Einzbern (Avenger)', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/8/8c/S366_Stage1.webp',
    description: 'Corrupted wish in a child\'s skin. Chloe\'s Avenger form wears a dark variation of her usual magical girl attire - sleeker, with red-black ribbons and a grin that knows too much. Her bow gleams with unstable mana, and her eyes carry the sharpness of someone who grew up wrong. She doesn\'t act out of anger. She acts because no one else did. Her madness is stolen agency reclaimed by force.',
    stats: { atk: 9946, hp: 11637, str: 'D', end: 'C', agi: 'A', man: 'B', lck: 'C', np: 'B+' },
    noblePhantasm: { name: 'Dark Arrow', rank: 'B+', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Neutral', temperament: 'Mischievous', department: 'Combat', hazardLevel: 'Moderate',
      operationalTags: ['Magical Girl', 'Corrupted Wish', 'Archer'],
      interactionNotes: 'Sharp wit. Acts on stolen agency. Keep from Illya. Monitor closely.',
      loiteringSpots: ['Training Grounds', 'Rooftop', 'Hidden Spots'],
      favoriteFoods: ['Sweets', 'Anything Illya Likes']
    }
  },
  {
    id: 'AV-015', name: 'Ushi Gozen', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/2/28/S380_Stage1.webp',
    description: 'Shintō terror disguised as tradition. Ushi Gozen wears a ceremonial mask twisted into a permanent smirk, her multi-layered shrine maiden robes torn and possessed by the spirits she commands. Her limbs move too smoothly - like puppetry - and her words blend reverence with uncanny cheer. She\'s no longer the woman known as Ushiwakamaru. She\'s the story that swallowed her whole. Her madness is folklore given teeth.',
    stats: { atk: 9946, hp: 11637, str: 'B', end: 'C', agi: 'A+', man: 'C', lck: 'D', np: 'A' },
    noblePhantasm: { name: 'Gozen\'s Wrath', rank: 'A', type: 'Anti-Army' },
    metadata: {
      alignment: 'Chaotic Evil', temperament: 'Volatile', department: 'Religious Support', hazardLevel: 'Extreme',
      operationalTags: ['Folklore', 'Spirit Possession', 'Shrine Maiden'],
      interactionNotes: 'Uncanny cheerfulness. Possessed by story. Keep from Ushiwakamaru.',
      restrictions: 'Spiritual containment protocols. Monitor for possession spread.',
      loiteringSpots: ['Shrine', 'Forest Simulations', 'Spirit Chambers'],
      favoriteFoods: ['Offerings', 'Rice']
    }
  },
  {
    id: 'AV-016', name: 'Marie Antoinette (Alter)', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/5/5e/S390_Stage1.webp',
    description: 'Elegance betrayed and rebooted. This form of Marie is more gothic than regal - her once-pastel dress now a black corset ensemble draped in dark lace and mechanical roses. Her hair, still curled and pristine, now glints like powdered moonlight, and her eyes reflect no joy, only obligation. She doesn\'t scream for vengeance. She waltzes with it. Her voice is airy, her smile faint - but every gesture asks, "Will you love me even after I fall?" Her madness is fame turned to phantom.',
    stats: { atk: 9946, hp: 11637, str: 'D', end: 'C', agi: 'B', man: 'B', lck: 'A', np: 'B' },
    noblePhantasm: { name: 'Guillotine Breaker (Alter)', rank: 'B', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Good', temperament: 'Cheerful', department: 'Support', hazardLevel: 'Moderate',
      operationalTags: ['Queen', 'Gothic', 'Fame Phantom'],
      interactionNotes: 'Waltzes with vengeance. Seeks love despite betrayal. Kind but haunted.',
      loiteringSpots: ['Ballroom', 'Garden at Night', 'Mirror Halls'],
      favoriteFoods: ['Cake', 'Champagne']
    }
  },
  {
    id: 'AV-017', name: 'Xu Fu (Avenger)', class: 'Avenger', rarity: 4,
    image: 'https://static.wikia.nocookie.net/fategrandorder/images/c/c9/S410_Stage1.webp',
    description: 'The alchemist who lost herself. Xu Fu wears scholar\'s robes dyed in shadowed indigo, layered in hexagonal patterns like serpentine scales. Her expression is always unreadable - somewhere between clinical and wistful - and her movements are smooth, too smooth, like a reflection that isn\'t fully synced. Around her pulse strange symbols and quiet bells - too modern, too old. She doesn\'t raise her voice. She whispers impossible things. Her madness is continuity undone - a soul who searched for immortality, and found too many versions of herself.',
    stats: { atk: 9946, hp: 11637, str: 'E', end: 'D', agi: 'C', man: 'A', lck: 'A+', np: 'A' },
    noblePhantasm: { name: 'Eternal Regret of Immortality', rank: 'A', type: 'Anti-Unit' },
    metadata: {
      alignment: 'Chaotic Neutral', temperament: 'Stoic', department: 'Medical', hazardLevel: 'High',
      operationalTags: ['Immortal Alchemist', 'Fragmented Self', 'Elixir Master'],
      interactionNotes: 'Whispers impossible things. Multiple selves. Brilliant but unstable.',
      loiteringSpots: ['Alchemy Lab', 'Medical Bay', 'Temporal Anomaly Zones'],
      favoriteFoods: ['Exotic Herbs', 'Elixirs']
    }
  }
];
