import React from 'react';

export const ReactorSchematic: React.FC = () => {
  return (
    <div className="bg-slate-900/40 border border-slate-700 p-6" style={{ maxWidth: '500px', maxHeight: '500px' }}>
      <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">Fire of Prometheus // Main Reactor</h2>
      <div className="relative aspect-square bg-slate-950/50 border border-cyan-500/20 p-4">
        {/* Background grid effect */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#0ea5e911_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e911_1px,transparent_1px)] bg-[size:20px_20px]"></div>

        {/* Left coolant loop */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 w-24 h-32 flex flex-col items-center justify-between">
          <div className="w-20 h-10 border-2 border-cyan-400 bg-cyan-500/10 rounded flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-transparent animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-0.5">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-3 bg-cyan-400/60"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-[8px] text-cyan-400 font-mono uppercase tracking-wider">Primary</div>
          <div className="text-[7px] text-cyan-500 font-mono">Coolant Loop</div>
          {/* Connecting pipe */}
          <div className="w-1 h-full bg-cyan-400/50 absolute left-1/2 -translate-x-1/2"></div>
        </div>

        {/* Right coolant loop */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 w-24 h-32 flex flex-col items-center justify-between">
          <div className="w-20 h-10 border-2 border-cyan-400 bg-cyan-500/10 rounded flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-l from-cyan-500/20 to-transparent animate-pulse"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex gap-0.5">
                {[...Array(8)].map((_, i) => (
                  <div key={i} className="w-1 h-3 bg-cyan-400/60"></div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-[8px] text-cyan-400 font-mono uppercase tracking-wider">Primary</div>
          <div className="text-[7px] text-cyan-500 font-mono">Coolant Loop</div>
          {/* Connecting pipe */}
          <div className="w-1 h-full bg-cyan-400/50 absolute left-1/2 -translate-x-1/2"></div>
        </div>

        {/* Reactor Core - Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          {/* Outer containment rings */}
          <div className="absolute inset-0 w-32 h-32 border-2 border-cyan-500/30 rounded-full animate-[spin_20s_linear_infinite]"></div>
          <div className="absolute inset-0 w-28 h-28 border border-cyan-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

          {/* Core housing */}
          <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-orange-600/40 via-red-600/40 to-orange-500/40 border-4 border-orange-500/80 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.6)]">
            {/* Inner glow */}
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-yellow-400/60 via-orange-500/60 to-red-600/60 animate-pulse"></div>

            {/* Core center */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-red-500 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]">
              <div className="absolute inset-0 rounded-full bg-orange-400/40 animate-[ping_2s_ease-in-out_infinite]"></div>
            </div>

            {/* Label */}
            <div className="absolute text-xs font-black text-slate-900 tracking-wider z-10 drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]">
              REACTOR CORE
            </div>
          </div>
        </div>

        {/* Bottom mana conduit */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <div className="text-[8px] text-cyan-400 font-mono uppercase tracking-wider">Mana</div>
          <div className="text-[7px] text-cyan-500 font-mono">Conduit</div>
          <div className="w-2 h-12 bg-gradient-to-b from-orange-500/60 to-cyan-400/60 rounded-full relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-orange-400 to-transparent animate-pulse"></div>
          </div>
          <div className="w-16 h-6 border-2 border-orange-400 bg-slate-900 flex items-center justify-center text-[7px] text-orange-400 font-mono">
            POWER DIST
          </div>
        </div>

        {/* Connecting pipes from loops to core */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          {/* Left to center */}
          <line x1="25%" y1="50%" x2="42%" y2="50%" stroke="rgb(34 211 238 / 0.4)" strokeWidth="2" />
          {/* Right to center */}
          <line x1="75%" y1="50%" x2="58%" y2="50%" stroke="rgb(34 211 238 / 0.4)" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};
