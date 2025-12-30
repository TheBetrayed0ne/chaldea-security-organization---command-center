import React from 'react';
import { UserRole } from '../../../context/StatusContext.tsx';
import { soundService } from '../../../services/soundService.ts';
import { WelcomeTheme } from '../types.ts';

interface AuthScreenProps {
  statusLogs: string[];
  isAuthenticating: boolean;
  onInitiate: () => void;
  selectedRole: UserRole | null;
  theme: WelcomeTheme;
}

export const AuthScreen: React.FC<AuthScreenProps> = ({ 
  statusLogs, 
  isAuthenticating, 
  onInitiate, 
  selectedRole,
  theme 
}) => {
  const hasFinishedLogs = statusLogs.length >= 6; // Matching length of logs constant

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center overflow-hidden font-mono text-slate-200">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className={`absolute inset-0 ${theme.backgroundGlow}`}></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e911_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e911_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative w-full max-w-2xl p-8 bg-slate-900/40 border border-cyan-900/50 backdrop-blur-xl rounded-lg shadow-[0_0_50px_rgba(6,182,212,0.1)]">
        <div className="absolute -top-1 -left-1 w-8 h-8 border-t-2 border-l-2 border-cyan-500"></div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-2 border-r-2 border-cyan-500"></div>

        <div className="flex flex-col items-center space-y-8">
          <div className="relative">
            <div className={`w-24 h-24 rounded-full border-2 border-cyan-500/30 flex items-center justify-center transition-all duration-1000 ${isAuthenticating ? 'scale-110 border-cyan-400 shadow-[0_0_30px_#22d3ee]' : ''}`}>
               <span className="text-5xl font-bold text-cyan-400">C</span>
            </div>
            {isAuthenticating && (
              <div className="absolute inset-[-10px] border border-cyan-400 rounded-full animate-ping opacity-20"></div>
            )}
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-100 tracking-[0.2em] mb-1">CHALDEA SECURITY ORGANIZATION</h1>
            <p className="text-cyan-500 text-[10px] tracking-[0.5em] uppercase">Tactical Terminal // Wing 01</p>
          </div>

          <div className="w-full bg-slate-950/80 p-4 rounded border border-cyan-900/30 h-40 overflow-y-auto scrollbar-hide text-[10px]">
            {statusLogs.map((line, idx) => (
              <div key={idx} className="flex gap-2 mb-1 animate-in slide-in-from-left-2 duration-300">
                <span className="text-cyan-900">[{new Date().toLocaleTimeString([], { hour12: false })}]</span>
                <span className="text-cyan-600">
                  {line || "..."}
                </span>
              </div>
            ))}
            {isAuthenticating && (
               <div className="w-full h-0.5 bg-cyan-900 mt-2 relative overflow-hidden">
                 <div className="absolute inset-0 bg-cyan-400 animate-[shimmer_2s_infinite]"></div>
                 <p className="text-[8px] text-cyan-400 mt-2 text-center uppercase tracking-widest">Awaiting Identity Verification...</p>
               </div>
            )}
          </div>

          {!isAuthenticating && hasFinishedLogs && (
            <button
              onClick={onInitiate}
              onMouseEnter={() => soundService.playClick()}
              className="group relative px-12 py-3 bg-transparent overflow-hidden border border-cyan-500/50 hover:border-cyan-400 transition-all"
            >
              <div className="absolute inset-0 bg-cyan-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <span className="relative text-cyan-400 font-bold tracking-widest text-sm group-hover:text-cyan-200 uppercase">Initiate Spiritron Link</span>
            </button>
          )}
        </div>
      </div>
      
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};