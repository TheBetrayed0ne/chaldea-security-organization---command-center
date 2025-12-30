
export interface Incident {
  date: string;
  cat: string;
  msg: string;
}

export interface Servant {
  id: string;
  name: string;
  class: string;
  rarity: number;
  description: string;
  image?: string;
  stats: {
    atk: number;
    hp: number;
    str: string;
    end: string;
    agi: string;
    man: string;
    lck: string;
    np: string;
  };
  noblePhantasm: {
    name: string;
    rank: string;
    type: string;
  };
  metadata?: {
    alignment: string;
    temperament: 'Stoic' | 'Volatile' | 'Cheerful' | 'Pragmatic' | 'Mischievous' | 'Unknown';
    department: 'Combat' | 'Research' | 'Support' | 'Containment' | 'Engineering' | 'Magecraft' | 'Library' | 'Logistics' | 'Education' | 'Finance' | 'Culinary' | 'Medical' | 'Legal' | 'Custodial' | 'Field Operations' | 'Wardrobe' | 'Security' | 'Religious Support' | 'Command' | 'Warden';
    hazardLevel: 'Nominal' | 'Moderate' | 'High' | 'Extreme' | 'Absolute';
    operationalTags: string[];
    interactionNotes: string;
    pairingRecs?: string[];
    restrictions?: string;
    loiteringSpots: string[];
    favoriteFoods: string[];
  };
  incidents?: Incident[];
}

export interface Mission {
  id: string;
  codename: string;
  singularityId: string;
  status: 'PREPARATION' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Critical';
  team: string[];
  objective: string;
  eta?: string;
}

export interface Anomaly {
  id: string;
  title: string;
  location: string;
  severity: 'Minor' | 'Moderate' | 'Major' | 'Catastrophic';
  status: 'Open' | 'Monitoring' | 'Resolved';
  description: string;
  assignedTo?: string;
  timestamp: string;
}

export interface Singularity {
  id: string;
  name: string;
  location: string;
  era: string;
  status: 'STABLE' | 'UNSTABLE' | 'CRITICAL' | 'RESOLVED';
  threatLevel: number;
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: number;
}

export interface ChaldExChannel {
  id: string;
  name: string;
  tagline: string;
  messages: Array<{
    user: string;
    content: string;
    timestamp: string;
    avatar?: string;
    type?: 'INFO' | 'WARN' | 'ERR' | 'ALERT';
  }>;
}

export interface EconomyState {
  qp: string;
  mc: number;
  au: number;
  cp: number;
  rp: number;
  sq: number;
  pp: number;
}
