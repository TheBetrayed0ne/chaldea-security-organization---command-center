export type HRTab = 'Dashboard' | 'Personnel Files' | 'Concerns' | 'Policy' | 'Wellbeing' | 'Boundaries';

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  dept: string;
  type: 'Staff' | 'Servant' | 'Entity';
  status: string;
  clearance: string;
  tags: string[];
}

export interface Policy {
  id: string;
  title: string;
  cat: string;
  content: string;
}

export interface MediationSession {
  room: string;
  time: string;
  parties: string;
  status: string;
}

export interface QueueEntry {
  stage: string;
  label: string;
  date: string;
}

export interface BoundaryProtocol {
  zone: string;
  rules: string[];
  color: string;
}
