// File: src/pages/chaldexnet/config/channels.ts
import { Channel } from '../types.ts';

export const CHANNELS: Channel[] = [
  { id: 'announcements', name: 'announcements', category: 'OPERATIONS', icon: '🌍', desc: 'High-level mission updates, Lostbelt status, security logs.' },
  { id: 'wild-alerts', name: 'wild-servant-alerts', category: 'OPERATIONS', icon: '🧨', desc: 'Real-time notification of Servant clashes and unplanned NP activations.' },
  { id: 'casual-chat', name: 'casual-chat', category: 'OPERATIONS', icon: '💬', desc: 'Staff memes and venting. No Servants (mostly).' },
  { id: 'bbwatch', name: 'bbwatch', category: 'OPERATIONS', icon: '🖥️', desc: 'Tracking BB’s interference across systems.' },
  { id: 'rules', name: 'rules-and-reminders', category: 'OPERATIONS', icon: '📜', desc: 'Official DOs and DON’Ts of Chaldea Security Organization.' },
  { id: 'maint-announcements', name: 'maint-announcements', category: 'MAINTENANCE', icon: '📢', desc: 'System-wide updates about construction and spatial instability.' },
  { id: 'kyle-watch-logs', name: 'kyle-watch-logs', category: 'MAINTENANCE', icon: '🧊', desc: 'Alert space for when Kyle is spotted "doing things" in restricted sectors.' },
  { id: 'power-core', name: 'power-core-systems', category: 'MAINTENANCE', icon: '🔋', desc: 'Energy grid integrity and mana conduit repairs.' },
  { id: 'logistics-hub', name: 'logistics-hub', category: 'LOGISTICS', icon: '📦', desc: 'Central coordination for supply chain and bulk restocks.' },
  { id: 'inventory-audits', name: 'inventory-audits', category: 'LOGISTICS', icon: '📊', desc: 'Tracking storage fluctuations and mana-reactive materials.' },
  { id: 'kyle-incursion', name: 'inventory-kyle-incursion', category: 'LOGISTICS', icon: '❄️', desc: 'If it wasn’t on the manifest and it’s cold, it’s probably his.' },
  { id: 'janitor-command', name: 'janitor-command-hub', category: 'JANITORIAL', icon: '🧽', desc: 'Scheduling and coordination for post-incident cleanup.' },
  { id: 'bio-hazard', name: 'bio-hazard-schedule', category: 'JANITORIAL', icon: '🧼', desc: 'Tracking rotation for monster residue and unknown fluids.' },
  { id: 'hallucination-support', name: 'hallucination-support', category: 'JANITORIAL', icon: '🧠', desc: 'Private vent thread for night-shift trauma and "talking grime".' },
  { id: 'thaum-theory', name: 'thaumaturgical-theory', category: 'MAGECRAFT', icon: '🔮', desc: 'Spell structure theory and magical grammar breakdowns.' },
  { id: 'circle-logic', name: 'circle-logic', category: 'MAGECRAFT', icon: '📐', desc: 'Rune geometry and containment mandala design.' },
  { id: 'rune-comparisons', name: 'rune-system-comparisons', category: 'MAGECRAFT', icon: 'ᚱ', desc: 'Side-by-side semantic analysis of runic systems and interface error logs.' },
  { id: 'kyle-temporal-glyphs', name: 'kyle-post-frost-glyphs', category: 'MAGECRAFT', icon: '❄️', desc: 'Theoretical breakdown of Post-Frost temporal casting. Warning: Skin elasticity risk.' },
  { id: 'engineering-hub', name: 'engineering-hub', category: 'ENGINEERING', icon: '🛠️', desc: 'Active projects, build logs, and "why is this thing on fire".' },
  { id: 'prototypes', name: 'prototype-lab', category: 'ENGINEERING', icon: '🔩', desc: 'Design and testing for Magitek interfaces and weapon mods.' },
  { id: 'research-hub', name: 'research-core-hub', category: 'RESEARCH', icon: '🧪', desc: 'Experiment scheduling and cross-departmental verification.' },
  { id: 'field-results', name: 'field-results-database', category: 'RESEARCH', icon: '📈', desc: 'Real-time metrics for tested magic and NP interactions.' }
];
