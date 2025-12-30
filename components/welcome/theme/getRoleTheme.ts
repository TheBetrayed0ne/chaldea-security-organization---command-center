import { UserRole } from '../../../context/StatusContext.tsx';
import { WelcomeTheme } from '../types.ts';

export const getRoleTheme = (role: UserRole | null): WelcomeTheme => {
  // Baseline theme matches the original blue/cyan Chaldea aesthetic
  return {
    primaryAccent: "text-cyan-400",
    secondaryAccent: "border-cyan-500",
    backgroundGlow: "bg-[radial-gradient(circle_at_center,#0ea5e922_0%,transparent_70%)]"
  };
};