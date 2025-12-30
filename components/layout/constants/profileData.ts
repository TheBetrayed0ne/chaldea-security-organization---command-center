
import { UserRole } from '../../../context/StatusContext.tsx';

/**
 * Using any here to match the original implementation's flexibility for nested profile fields 
 * while maintaining a Record-keyed structure for UserRole.
 */
export const PROFILE_DATA: Record<UserRole, any> = {
  master: {
    name: "Fujimaru Ritsuka",
    shortName: "R. Fujimaru",
    id: "STAFF_8392",
    designation: "48th Candidate // LAST MASTER",
    avatar: 'https://static.wikia.nocookie.net/fategrandorder/images/4/49/FujimaruRitsuka_Portrait_Female.webp/revision/latest?cb=20231219055143',
    clearance: "Level_EX",
    syncStatus: "OPTIMAL",
    stats: [
      { label: "Mental Fortitude", value: "EX (UNSHAKABLE)", color: "text-rose-400" },
      { label: "Mana Circuit Quality", value: "D (NON-MAGUS ORIGIN)", color: "text-slate-500" },
      { label: "Mana Circuit Quantity", value: "C", color: "text-slate-400" },
      { label: "Sleep Dept", value: "2,482 HOURS", color: "text-amber-500" }
    ],
    bio: '"Subject exhibits extreme resilience to existential dread. High compatibility with almost all Heroic Spirit temperaments. Recommended for critical frontline oversight."',
    privileges: [
      { title: "Cafeteria Priority", desc: "Unlimited refills on Beni-Enma's restorative stews and Emiya's special burgers." },
      { title: "Sector 404 Access", desc: "Authorized for drift-naps in the Warden's 'Found Room' without logging paperwork." },
      { title: "Emergency Override", desc: "Can initiate direct voice link to TRISMEGISTUS II during localized spatial collapse." }
    ]
  },
  staff: {
    name: "Operational Analyst",
    shortName: "Staff Analyst",
    id: "OPS_4210",
    designation: "Facility Support // Logistics Division",
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=staff_member&backgroundColor=0f172a',
    clearance: "Level_3",
    syncStatus: "NOMINAL",
    stats: [
      { label: "Bureaucratic Skill", value: "A+", color: "text-blue-400" },
      { label: "Coffee Tolerance", value: "EX", color: "text-amber-600" },
      { label: "Rayshift Resistance", value: "B-", color: "text-slate-400" },
      { label: "Paperwork Speed", value: "0.4s / Page", color: "text-emerald-500" }
    ],
    bio: '"Subject is an efficient cog in the Chaldea machine. Capable of ignoring 4th-dimensional screaming while filing inventory reports. Essential for base stability."',
    privileges: [
      { title: "Standard Rations", desc: "Access to daily balanced meals. Extra sugar permitted during 24-hour monitoring shifts." },
      { title: "Staff Lounge Access", desc: "Entry to Sector C social zones. Includes use of the 'Mostly-Functional' vending machines." },
      { title: "Safety Protocol Beta", desc: "Authorized to use emergency fire-runes and anti-noise earmuffs in high-mana zones." }
    ]
  },
  servant: {
    name: "Heroic Spirit Asset",
    shortName: "Spirit Node",
    id: "REG_9999",
    designation: "Combat Entity // Saint Graph Registry",
    avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=heroic_spirit&backgroundColor=0f172a',
    clearance: "Level_S",
    syncStatus: "MANIFESTED",
    stats: [
      { label: "Aether Density", value: "HIGH", color: "text-purple-400" },
      { label: "Spiritron Flux", value: "STABLE", color: "text-cyan-400" },
      { label: "Noble Phantasm Ready", value: "98.2%", color: "text-emerald-500" },
      { label: "Existential Anchor", value: "MASTER_LINK", color: "text-blue-400" }
    ],
    bio: '"Entity registered in the Saint Graph. Displays standard Heroic Spirit behavioral patterns. To be deployed only under Master authorization or emergency defense protocols."',
    privileges: [
      { title: "Mana Recharging", desc: "Priority access to base mana-conduits during low-intensity operational hours." },
      { title: "Sim-Room Priority", desc: "Can requisition Simulation Room 01 for training or 'conceptual recreation' requests." },
      { title: "Spirit-Origin Care", desc: "Bi-weekly checks with Nurse Nightingale to ensure Saint Graph integrity and sanity." }
    ]
  }
};
