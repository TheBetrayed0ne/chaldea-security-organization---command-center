
import React from 'react';

const PERSONNEL = [
  { name: 'Fujimaru Ritsuka', role: 'Master', dept: 'Command', stats: 'EX Resilience' },
  { name: 'Mash Kyrielight', role: 'Sub-Servant', dept: 'Security', stats: '99.8% Sync' },
  { name: 'Kyle', role: 'Foreigner', dept: 'Warden', stats: '28°C Body Temp' },
  { name: 'Leonardo da Vinci', role: 'Director', dept: 'Engineering', stats: 'EX Logic' },
  { name: 'Sherlock Holmes', role: 'Investigator', dept: 'Research', stats: 'EX Deduction' },
  { name: 'James Moriarty', role: 'Academic Lead', dept: 'Education', stats: 'Evil Intellect' },
  { name: 'Murasaki Shikibu', role: 'Chief Librarian', dept: 'Library', stats: 'Archive Mastery' },
  { name: 'EMIYA', role: 'Executive Chef', dept: 'Culinary', stats: 'Kitchen Sovereignty' },
  { name: 'King Hassan', role: 'Overlord', dept: 'Logistics', stats: '100% Audit Accuracy' },
  { name: 'Medea', role: 'Head of Magecraft', dept: 'Magecraft', stats: 'Circle Specialist' },
  { name: 'Asclepius', role: 'Head of Medicine', dept: 'Medical', stats: 'Biological Mastery' },
  { name: 'Caenis', role: 'Field Commander', dept: 'Security', stats: 'Extreme Deterrence' }
];

const PersonnelRecords: React.FC = () => {
  return (
    <div className="p-8 space-y-8 animate-in zoom-in-95 duration-500">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-black dark:text-slate-100 tracking-tighter">MEDICAL & PERSONNEL ARCHIVE</h2>
          <p className="text-rose-600 dark:text-rose-500 font-mono text-[10px] uppercase tracking-widest mt-1 italic">
            CONFIDENTIAL // SPIRIT-ORIGIN CONFIDENTIALITY CLAUSE (SOC-1)
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-cyan-900/30 p-6 rounded-lg backdrop-blur-md relative overflow-hidden shadow-sm dark:shadow-none">
          <div className="absolute top-0 right-0 px-4 py-1 bg-rose-500 text-white dark:text-slate-950 text-[10px] font-bold uppercase rotate-45 translate-x-8 translate-y-3">
            LEAKED
          </div>
          <h3 className="text-sm font-mono text-cyan-600 dark:text-cyan-400 mb-6 font-bold flex items-center gap-2">
            🩺 Checkup Log: KYLE-001
          </h3>
          <div className="space-y-4 text-xs font-mono text-slate-600 dark:text-slate-400 leading-relaxed">
            <p><span className="text-cyan-600 dark:text-cyan-500 font-bold">PHYSICAL:</span> 188cm / 85kg. Lean muscular build.</p>
            <p><span className="text-cyan-600 dark:text-cyan-500 font-bold">VITALS:</span> Stable body temp @ 28°C. Heart rate 35bpm.</p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-cyan-900/30 p-6 rounded-lg shadow-sm dark:shadow-none">
          <h3 className="text-sm font-mono text-cyan-600 dark:text-cyan-400 mb-4 font-bold">CHALDEA ACTIVE ROSTER</h3>
          <div className="space-y-2 overflow-y-auto max-h-[500px] custom-scrollbar">
             {PERSONNEL.map(p => (
               <div key={p.name} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-950/40 rounded border border-slate-100 dark:border-slate-800 hover:border-cyan-500/30 transition-all">
                  <div>
                    <p className="text-xs font-bold text-slate-800 dark:text-slate-200">{p.name}</p>
                    <p className="text-[9px] text-slate-400 dark:text-slate-500 uppercase tracking-tighter">{p.role} // {p.dept}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">{p.stats}</p>
                  </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonnelRecords;
