import { UserRole } from '../../../context/StatusContext.tsx';
import { RoleConfig } from '../types.ts';

export const ROLE_UI_CONFIG: Record<UserRole, RoleConfig> = {
  master: {
    title: "Master",
    designation: "Candidate 48 // Human Order Anchor",
    color: "border-cyan-500 text-cyan-400 shadow-cyan-900/20",
    icon: "◈"
  },
  staff: {
    title: "Facility Staff",
    designation: "Departmental Operations // Logistics",
    color: "border-blue-500 text-blue-400 shadow-blue-900/20",
    icon: "⚙"
  },
  servant: {
    title: "Servant",
    designation: "Heroic Spirit // Aether Signature",
    color: "border-purple-500 text-purple-400 shadow-purple-900/20",
    icon: "☍"
  }
};