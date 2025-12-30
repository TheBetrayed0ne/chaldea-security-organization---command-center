import React from 'react';
import { WelcomeTheme } from '../types.ts';
import { COMMAND_CORE_MEMBERS, CommandCoreMember } from '../config/commandCoreMembers.ts';

interface CommandCoreSelectScreenProps {
  onSelect: (memberId: string, memberName: string, permissions: string[]) => void;
  onBack?: () => void;
  selectedMember: string | null;
  theme: WelcomeTheme;
  masterGender: 'male' | 'female';
}

export const CommandCoreSelectScreen: React.FC<CommandCoreSelectScreenProps> = ({
  onSelect,
  onBack,
  selectedMember,
  theme,
  masterGender
}) => {
  // Adjust Ritsuka's avatar based on gender setting
  const members = COMMAND_CORE_MEMBERS.map(member => {
    if (member.id === 'ritsuka') {
      return {
        ...member,
        avatar: masterGender === 'male'
          ? '/images/avatars/master-male.webp'
          : '/images/avatars/master-female.webp'
      };
    }
    return member;
  });

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto font-mono text-slate-200 custom-scrollbar">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-left: 1px solid rgba(6, 182, 212, 0.2);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: rgba(6, 182, 212, 0.3) rgba(15, 23, 42, 0.5);
        }
      `}</style>
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className={`absolute inset-0 ${theme.backgroundGlow}`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e911_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e911_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative w-full max-w-6xl p-8 mx-auto my-8 animate-in fade-in zoom-in-95 duration-500">
        <header className="text-center mb-12">
          <h1 className="text-2xl font-black text-slate-100 tracking-[0.4em] uppercase mb-2">Command Core Identity</h1>
          <p className="text-[10px] text-cyan-600 tracking-[0.2em] uppercase font-bold">Central Authority // Human Order Oversight</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {members.map((member) => (
            <button
              key={member.id}
              onClick={() => onSelect(member.id, member.name, member.permissions)}
              disabled={!!selectedMember}
              className={`
                relative p-6 rounded-lg border-2 transition-all duration-300
                ${selectedMember === member.id
                  ? 'border-cyan-500 bg-cyan-500/10 shadow-[0_0_30px_rgba(34,211,238,0.3)]'
                  : 'border-slate-800 bg-slate-900/40 hover:border-cyan-700 hover:bg-slate-800/60'
                }
                ${selectedMember && selectedMember !== member.id ? 'opacity-30' : ''}
                disabled:cursor-not-allowed
                group
              `}
            >
              <div className="space-y-4">
                {/* Avatar */}
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-lg">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Name & Title */}
                <div className="text-center space-y-1">
                  <h3 className="text-base font-bold text-slate-100 uppercase tracking-wider">
                    {member.name}
                  </h3>
                  <p className="text-[10px] text-cyan-400 uppercase tracking-wide font-semibold">
                    {member.title}
                  </p>
                  <p className="text-[9px] text-slate-500 uppercase tracking-wider">
                    {member.role}
                  </p>
                </div>

                {/* Description */}
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-[10px] text-slate-400 leading-relaxed text-center">
                    {member.description}
                  </p>
                </div>

                {/* Permissions */}
                <div className="pt-3 border-t border-slate-700">
                  <p className="text-[8px] text-slate-500 uppercase mb-2 text-center">Clearance Level</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {member.permissions.slice(0, 3).map((perm) => (
                      <span
                        key={perm}
                        className="text-[7px] px-1.5 py-0.5 bg-slate-800 text-cyan-400 rounded uppercase tracking-wider"
                      >
                        {perm}
                      </span>
                    ))}
                    {member.permissions.length > 3 && (
                      <span className="text-[7px] px-1.5 py-0.5 bg-slate-800 text-slate-500 rounded uppercase tracking-wider">
                        +{member.permissions.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {selectedMember === member.id && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg animate-in zoom-in duration-200">
                  <span className="text-slate-950 text-sm font-bold">✓</span>
                </div>
              )}
            </button>
          ))}
        </div>

        <footer className="mt-16 text-center space-y-4">
          {onBack && (
            <button
              onClick={onBack}
              disabled={!!selectedMember}
              className="px-6 py-2 border border-slate-700 bg-slate-900/40 hover:bg-slate-800/60 hover:border-cyan-700 text-slate-400 hover:text-cyan-400 rounded font-mono text-xs uppercase tracking-wider transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Back to Role Selection
            </button>
          )}
          <p className="text-[8px] text-slate-700 uppercase tracking-widest italic animate-pulse">
            Command authority verified via CHALDEAS authentication protocol
          </p>
        </footer>
      </div>
    </div>
  );
};
