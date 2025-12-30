
import { Servant } from '../types.ts';
import { ALL_SERVANTS as MODULAR_SERVANTS } from './servants/index.ts';

import { SABER_SERVANTS } from './servants/normal/saber.ts';
import { ARCHER_SERVANTS } from './servants/normal/archer.ts';
import { LANCER_SERVANTS } from './servants/normal/lancer.ts';
import { RIDER_SERVANTS } from './servants/normal/rider.ts';
import { CASTER_SERVANTS } from './servants/normal/caster.ts';
import { ASSASSIN_SERVANTS } from './servants/normal/assassin.ts';
import { BERSERKER_SERVANTS } from './servants/normal/berserker.ts';

import { RULER_SERVANTS } from './servants/extra/ruler.ts';
import { AVENGER_SERVANTS } from './servants/extra/avenger.ts';
import { MOON_CANCER_SERVANTS } from './servants/extra/moon-cancer.ts';
import { ALTER_EGO_SERVANTS } from './servants/extra/alter-ego.ts';
import { FOREIGNER_SERVANTS } from './servants/extra/foreigner.ts';
import { PRETENDER_SERVANTS } from './servants/extra/pretender.ts';
import { BEAST_SERVANTS } from './servants/extra/beast.ts';

/**
 * CHALDEA DATA MERGE:
 * This list combines legacy flat-file data with the new modular directory structure.
 * Modular entries are prioritized (filtered by ID to avoid duplicates).
 */
const legacyServants: Servant[] = [
  ...SABER_SERVANTS,
  ...ARCHER_SERVANTS,
  ...LANCER_SERVANTS,
  ...RIDER_SERVANTS,
  ...CASTER_SERVANTS,
  ...ASSASSIN_SERVANTS,
  ...BERSERKER_SERVANTS,
  ...RULER_SERVANTS,
  ...AVENGER_SERVANTS,
  ...MOON_CANCER_SERVANTS,
  ...ALTER_EGO_SERVANTS,
  ...FOREIGNER_SERVANTS,
  ...PRETENDER_SERVANTS,
  ...BEAST_SERVANTS,
];

// Deduplicate based on ID, favoring the modular structure
export const RECORDED_SERVANTS: Servant[] = [
  ...MODULAR_SERVANTS,
  ...legacyServants.filter(ls => !MODULAR_SERVANTS.some(ms => ms.id === ls.id))
];
