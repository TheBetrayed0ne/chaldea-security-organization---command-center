
import React from 'react';
import { Singularity } from '../types';

const MOCK_SINGULARITIES: Singularity[] = [
  { id: 'F', name: 'Flame City F', location: 'Fuyuki, Japan', era: '2004 AD', status: 'RESOLVED', threatLevel: 2 },
  { id: '1', name: 'The Wicked Dragon Hundred Years\' War', location: 'Orléans, France', era: '1431 AD', status: 'RESOLVED', threatLevel: 3 },
  { id: '2', name: 'The Eternal Madness Empire', location: 'Septem, Roman Empire', era: '0060 AD', status: 'RESOLVED', threatLevel: 3 },
  { id: '3', name: 'The Sealed Desolation Era', location: 'Okeanos, Pacific Ocean', era: '1573 AD', status: 'RESOLVED', threatLevel: 4 },
  { id: '7', name: 'The Absolute Frontline in the War Against the Demonic Beasts', location: 'Babylonia, Mesopotamia', era: '2655 BC', status: 'CRITICAL', threatLevel: 5 },
  { id: '8', name: 'Grand Temple of Time', location: 'Solomon\'s Realm', era: 'None', status: 'UNSTABLE', threatLevel: 5 },
];

const Singularities: React.FC = () => {
  return (
    <div className="space-y-6 animate-in slide-in-from-right-4 duration-500 p-8">
      <header>
        <h2 className="text-2xl font-bold tracking-tight text-black dark:text-slate-100 uppercase">TEMPORAL ANOMALIES</h2>
        <p className="text-rose-600 dark:text-rose-500/70 font-mono text-xs uppercase mt-1 tracking-widest">Warning: Human Order Foundation Collapsing</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {MOCK_SINGULARITIES.map((s) => (
          <div key={s.id} className="bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-cyan-500/50 rounded-lg p-5 transition-all group overflow-hidden relative shadow-sm dark:shadow-none">
            <div className={`absolute top-0 right-0 px-2 py-1 text-[8px] font-mono ${
              s.status === 'RESOLVED' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-400' : 
              s.status === 'CRITICAL' ? 'bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-400 animate-pulse' : 
              'bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-400'
            }`}>
              {s.status}
            </div>

            <div className="mb-4">
              <span className="text-[10px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest">ID: SINGULARITY_{s.id}</span>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors mt-1">{s.name}</h3>
            </div>
            {/* ... stats display logic same as before */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Singularities;
