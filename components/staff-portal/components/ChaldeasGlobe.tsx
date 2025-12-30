
// File: pages/staff-portal/components/ChaldeasGlobe.tsx
import React from 'react';
import { Atmosphere, MousePos } from '../types.ts';
import { mapUrl, cloudsUrl } from '../config/planetTextures.ts';

interface ChaldeasGlobeProps {
  mousePos: MousePos;
  atmosphere: Atmosphere;
  humanOrder: string;
}

export const ChaldeasGlobe: React.FC<ChaldeasGlobeProps> = ({ mousePos, atmosphere, humanOrder }) => (
  <div className="lg:col-span-6 flex flex-col items-center justify-center relative py-4">
    <div className="relative group perspective-1000 animate-[float_12s_ease-in-out_infinite] scale-110">
      <div 
        className="absolute inset-[-80px] rounded-full blur-[60px] opacity-30 transition-all duration-1000 pointer-events-none"
        style={{ backgroundColor: atmosphere.glowColor }}
      ></div>
      
      <div 
        className="w-96 h-96 rounded-full relative overflow-hidden shadow-[inset_0_0_100px_rgba(0,0,0,0.5)] border-2 border-cyan-400/50 ring-8 ring-cyan-400/5 rotate-[15deg] transition-all duration-1000 z-10"
        style={{ 
          backgroundColor: '#020b1f',
          WebkitMaskImage: '-webkit-radial-gradient(white, black)'
        }}
      >
        {/* Parallax Layer 1: Deep Stars */}
        <div 
          className="absolute inset-[-20%] opacity-40 bg-[url('/images/textures/stardust.png')] transition-transform duration-700 ease-out pointer-events-none"
          style={{ 
            transform: `translate(${mousePos.x * 6}px, ${mousePos.y * 6}px) scale(1.3)`,
          }}
        ></div>

        {/* Parallax Layer 2: Continental Land Mass */}
        <div 
          className="absolute inset-[-15%] bg-repeat-x bg-[length:200%_100%] transition-all duration-1000 animate-[globe_180s_linear_infinite]"
          style={{ 
            backgroundImage: `url(${mapUrl})`,
            filter: atmosphere.landFilter,
            transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 12}px) scale(1.4)`,
            transition: 'transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}
        ></div>

        {/* Parallax Layer 3: Cloud Coverage */}
        <div 
          className="absolute inset-[-25%] bg-repeat-x bg-[length:200%_100%] transition-opacity duration-1000 animate-[globe_120s_linear_infinite] pointer-events-none mix-blend-screen"
          style={{ 
            backgroundImage: `url(${cloudsUrl})`,
            opacity: atmosphere.cloudOpacity,
            transform: `translate(${mousePos.x * 25}px, ${mousePos.y * 25}px) scale(1.6)`,
            transition: 'transform 1.2s cubic-bezier(0.165, 0.84, 0.44, 1)'
          }}
        ></div>
        
        {/* Dynamic Day/Night Overlay */}
        <div 
          className="absolute inset-0 transition-all duration-1000 pointer-events-none z-20"
          style={{ background: atmosphere.sunGradient }}
        ></div>
      </div>
      
      <div className="mt-12 text-center relative z-40">
        <h2 className="text-4xl font-black tracking-[0.4em] text-black dark:text-white drop-shadow-[0_0_20px_rgba(34,211,238,0.3)] dark:drop-shadow-[0_0_20px_rgba(34,211,238,0.7)] animate-pulse uppercase">CHALDEAS</h2>
        <div className="flex flex-col items-center justify-center gap-2 mt-4">
           <div className="flex items-center gap-4">
             <div className="h-px w-16 bg-gradient-to-r from-transparent to-cyan-600 dark:to-cyan-400"></div>
             <p className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.4em] whitespace-nowrap font-bold">
               {atmosphere.label}
             </p>
             <div className="h-px w-16 bg-gradient-to-l from-transparent to-cyan-600 dark:to-cyan-400"></div>
           </div>
           <p className="text-[8px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-[0.3em] font-bold">
             Resonance: 99.99% // Order: {humanOrder}
           </p>
        </div>
      </div>
    </div>
  </div>
);
