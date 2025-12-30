// File: pages/chaldexnet/config/initialMessages.ts
import { MessageMap } from '../types.ts';

export const INITIAL_MESSAGES: MessageMap = {
  'rune-comparisons': [
    { user: 'Rune_Specialist_B', content: 'Attempting side-by-side compile of standard Futhark "Ansuz" vs. Scathach-style Primordial equivalent. Buffer stability looks... questionable.', timestamp: '10:00', type: 'INFO' },
    { user: 'Rune_Specialist_B', content: '```\n[FUTHARK SET]  |  [PRIMORDIAL SET]\n(A) ᚫ [OK]      |  (A) █ [CURSED]\n(F) ᚠ [OK]      |  (F) █ [ERR_BLOOD_REQUIRED]\n```', timestamp: '10:05', type: 'INFO' },
    { user: 'Magecraft_A', content: '🚨 CRITICAL INTERFACE ERROR: Attempting to render the Primordial F-glyph caused the screen to begin weeping mineral oil. DO NOT ATTEMPT INCOMPATIBLE RENDERS WITHOUT COLD-VACUUM SHIELDING.', timestamp: '10:12', type: 'ERR' },
    { user: 'ModVinci', content: 'I warned you about the semantic overlap. Primordial runes aren\'t data, they\'re declarations. Your terminal is literally being told it isn\'t a machine anymore.', timestamp: '10:20', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=davinci' }
  ],
  'wild-alerts': [
    { user: 'Security_A3', content: '⚠️ WILD SERVANT EVENT – Detected @ Cafeteria Hallway 2. Medb vs Beowulf. Status: Food-related escalation, currently at Flirting-Adjacent Violence.', timestamp: '12:02', type: 'ALERT' },
    { user: 'DefinitelyNotBB', content: 'Casualty Prediction Humor Rating: 8.5/10. Medb is using a baguette as a whip again! ✨', timestamp: '12:04', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=bb' },
    { user: 'VoidOnStandby', content: 'Let her tire herself out. Bring cocoa. ❄️', timestamp: '12:05', avatar: 'https://api.dicebear.com/7.x/pixel-art/svg?seed=kyle' }
  ]
};