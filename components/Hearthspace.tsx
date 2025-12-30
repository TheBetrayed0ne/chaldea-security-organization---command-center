import React from 'react';
import { useGlobalStatus } from '../context/StatusContext.tsx';
import { soundService } from '../services/soundService.ts';

const MOCK_NOTES = [
  { user: 'Mash', content: 'Senpai, don’t forget to wear your heavy coat when visiting Sector Zero. It’s freezing today.', signed: true },
  { user: 'Anon', content: 'To whoever left the half-eaten burger in the training hall: Mordred is looking for you. Run.', signed: false },
  { user: 'Warden', content: 'Room 404 is now officially a "Safe Space for Napping". No paperwork allowed inside. ❄️', signed: true },
  { user: 'EMIYA', content: 'Miso soup batch #40 is ready. Proper nutrition is the foundation of survival.', signed: true },
];

const Hearthspace: React.FC = () => {
  const { status } = useGlobalStatus();

  return (
    <div className="p-8 max-w-5xl mx-auto space-y-10 animate-in fade-in duration-1000 font-sans">
      <header className="text-center space-y-2 border-b border-slate-800/40 pb-10">
        <h2 className="text-4xl font-serif font-bold text-orange-200/90 italic">The Hearthspace</h2>
        <p className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.4em]">Where humanity remains when the order fades.</p>
        <div className="flex justify-center gap-12 pt-8">
           <ClimateWidget label="Warmth" value={status.emotionalClimate.calm} />
           <ClimateWidget label="Fullness" value={100 - status.emotionalClimate.hungry} />
           <ClimateWidget label="Presence" value={status.moraleIndex} />
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <section className="space-y-6">
          <h3 className="text-xs font-mono text-orange-400 uppercase tracking-widest font-black border-l-2 border-orange-400/50 pl-4">Today’s Comforts</h3>
          <div className="space-y-4">
             <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex gap-4 items-start">
                   <span className="text-2xl">📽️</span>
                   <div>
                      <h4 className="text-sm font-bold text-slate-200">Movie Night: "The 7th Singularity"</h4>
                      <p className="text-xs text-slate-500 font-mono mt-1 italic">Starts @ 20:00 JST // Theater 01</p>
                   </div>
                </div>
             </div>
             <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm">
                <div className="flex gap-4 items-start">
                   <span className="text-2xl">🍲</span>
                   <div>
                      <h4 className="text-sm font-bold text-slate-200">Beni-Enma’s Secret Stew</h4>
                      <p className="text-xs text-slate-500 font-mono mt-1 italic">Restorative properties confirmed by medical staff.</p>
                   </div>
                </div>
             </div>
          </div>
        </section>

        <section className="space-y-6">
           <h3 className="text-xs font-mono text-orange-400 uppercase tracking-widest font-black border-l-2 border-orange-400/50 pl-4">The Community Wall</h3>
           <div className="grid grid-cols-1 gap-4">
              {MOCK_NOTES.map((note, i) => (
                <div key={i} className="bg-slate-900/60 border border-slate-800 p-5 rounded-lg shadow-sm transform hover:-translate-y-1 transition-transform cursor-default group">
                   <p className="text-sm text-slate-300 font-serif leading-relaxed italic">"{note.content}"</p>
                   <div className="mt-4 flex justify-between items-center text-[10px] font-mono text-slate-600">
                      <span>{note.signed ? note.user : 'ANONYMOUS_STAFF'}</span>
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity">♡</span>
                   </div>
                </div>
              ))}
           </div>
           <button onClick={() => soundService.playClick()} className="w-full py-3 bg-slate-800 border border-slate-700 text-slate-500 hover:text-orange-200 hover:border-orange-900/30 text-[10px] font-bold uppercase rounded-lg transition-all tracking-widest">
             Pin a new note ➔
           </button>
        </section>
      </div>

      <footer className="pt-20 text-center opacity-20 hover:opacity-100 transition-opacity">
         <p className="text-[9px] font-mono uppercase tracking-[0.5em] text-slate-600">No Mission Talk. Only Breathing.</p>
      </footer>
    </div>
  );
};

const ClimateWidget = ({ label, value }: { label: string, value: number }) => (
  <div className="text-center min-w-20">
    <div className="text-[8px] font-mono text-slate-600 uppercase mb-1 tracking-widest">{label}</div>
    <div className="text-sm font-bold text-orange-200/80">
      {value.toFixed(2)}<span className="text-[8px] ml-0.5">%</span>
    </div>
    <div className="w-10 h-0.5 bg-slate-800 rounded-full mx-auto mt-2 overflow-hidden">
       <div className="h-full bg-orange-400/40" style={{ width: `${value}%` }}></div>
    </div>
  </div>
);

export default Hearthspace;