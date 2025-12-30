
import { Servant } from '../types.ts';

// Saber Class
import ArtoriaSaber from './Saber/S001_Artoria/profile.ts';

// Archer Class
import EMIYA_Archer from './Archer/A001_EMIYA/profile.ts';

// Foreigner Class
import KyleWarden from './Foreigner/Kyle/profile.ts';

// Central Class-based Registry
export const SERVANT_REGISTRY: Record<string, Servant[]> = {
  Saber: [ArtoriaSaber],
  Archer: [EMIYA_Archer],
  Lancer: [],
  Rider: [],
  Caster: [],
  Assassin: [],
  Berserker: [],
  Ruler: [],
  Avenger: [],
  MoonCancer: [],
  AlterEgo: [],
  Foreigner: [KyleWarden],
  Pretender: [],
  Beast: []
};

// Flattened list for main search/display
export const ALL_SERVANTS: Servant[] = Object.values(SERVANT_REGISTRY).flat();
