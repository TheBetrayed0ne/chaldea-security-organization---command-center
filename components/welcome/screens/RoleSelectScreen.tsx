import React from 'react';
import { UserRole } from '../../../context/StatusContext.tsx';
import { RoleCard } from '../components/RoleCard.tsx';
import { ROLE_UI_CONFIG } from '../config/roleUiConfig.ts';
import { WelcomeTheme } from '../types.ts';

interface RoleSelectScreenProps {
  onSelect: (role: UserRole) => void;
  selectedRole: UserRole | null;
  theme: WelcomeTheme;
}

export const RoleSelectScreen: React.FC<RoleSelectScreenProps> = ({ 
  onSelect, 
  selectedRole,
  theme 
}) => {
  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden font-mono text-slate-200">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className={`absolute inset-0 ${theme.backgroundGlow}`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e911_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e911_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative w-full max-w-5xl p-8 animate-in fade-in zoom-in-95 duration-500">
        <header className="text-center mb-12">
          <h1 className="text-2xl font-black text-slate-100 tracking-[0.4em] uppercase mb-2">Identify Persona</h1>
          <p className="text-[10px] text-cyan-600 tracking-[0.2em] uppercase font-bold">Chaldea Security Org // Auth Protocol 0-0-1</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {(Object.entries(ROLE_UI_CONFIG) as [UserRole, any][]).map(([role, config]) => (
            <RoleCard 
              key={role}
              role={role}
              {...config}
              onClick={() => onSelect(role)}
              disabled={!!selectedRole}
              active={selectedRole === role}
            />
          ))}
        </div>

        <footer className="mt-16 text-center">
          <p className="text-[8px] text-slate-700 uppercase tracking-widest italic animate-pulse">
            Unauthorized access to command-level terminals is a capital offense in 7 temporal zones.
          </p>
        </footer>
      </div>
    </div>
  );
};