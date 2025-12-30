import React, { useState } from 'react';
import { ECONOMY_MASTER_DATA } from './dashboard/index.ts';
import ResourceSummary from './ResourceSummary.tsx';

const Logistics: React.FC = () => {
  const [selectedCurrencyId, setSelectedCurrencyId] = useState<string | null>(null);

  const handleSelectResource = (id: string) => {
    setSelectedCurrencyId(prev => (prev === id ? null : id));
  };

  const selectedCurrency = ECONOMY_MASTER_DATA.find(c => c.id === selectedCurrencyId);

  return (
    <div className="p-8 space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header>
        <h2 className="text-2xl font-bold text-slate-100 uppercase tracking-tighter">Logistics & Resource Hub</h2>
        <p className="text-cyan-500/70 font-mono text-[10px] uppercase mt-1 tracking-widest">Dept Overlord: KING HASSAN // Ledger Status: BALANCED</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-900/40 border border-cyan-900/30 p-6 rounded-lg backdrop-blur-md">
            <h3 className="text-sm font-mono text-cyan-400 mb-6 font-bold tracking-widest uppercase">Departmental Resource Matrix</h3>
            
            <ResourceSummary 
              resources={ECONOMY_MASTER_DATA} 
              onSelect={handleSelectResource} 
              selectedId={selectedCurrencyId} 
            />

            {/* Currency Detail Overlay */}
            <div className={`transition-all duration-300 overflow-hidden ${selectedCurrencyId ? 'max-h-32 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
              {selectedCurrency && (
                <div className="p-4 bg-cyan-950/20 border border-cyan-500/30 rounded-lg animate-in slide-in-from-left-2">
                   <div className="flex justify-between items-start mb-1">
                     <h4 className={`text-[10px] font-mono font-bold uppercase ${selectedCurrency.color}`}>{selectedCurrency.label} SPECIFICATION</h4>
                     <span className="text-[8px] text-slate-500 font-mono">SOC_RELIANT_DATA</span>
                   </div>
                   <p className="text-xs text-slate-300 font-mono leading-relaxed">
                     "{selectedCurrency.desc}"
                   </p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-slate-900/40 border border-cyan-900/30 p-6 rounded-lg">
             <h3 className="text-sm font-mono text-cyan-400 mb-4 font-bold tracking-widest uppercase">📦 ACTIVE REQUISITIONS</h3>
             <div className="space-y-3">
                <RequisitionItem item="Diamond Saddles (x5)" requester="Medb" status="DENIED (Excessive)" color="border-rose-500/30" />
                <RequisitionItem item="Abyssal Spaghetti Tools" requester="Unknown" status="PENDING (BB Alert)" color="border-yellow-500/30" />
                <RequisitionItem item="Bunker Thread (10km)" requester="Da Vinci" status="APPROVED" color="border-emerald-500/30" />
                <RequisitionItem item="Golden Croissants (Emergency)" requester="Gordolf" status="URGENT" color="border-amber-500/30" />
             </div>
          </div>
        </div>

        <div className="space-y-6">
           <div className="bg-slate-900/40 border border-cyan-900/30 p-6 rounded-lg backdrop-blur-md">
             <h3 className="text-sm font-mono text-cyan-400 mb-4 font-bold tracking-widest uppercase">❄️ Kyle Incursion Log</h3>
             <div className="text-[11px] font-mono space-y-4">
                <div className="border-l-2 border-sky-500 pl-3 py-1">
                   <p className="text-slate-500">09:46 JST</p>
                   <p className="text-slate-300">Unauthorized containment pod logged in Storage Wing B-7.</p>
                   <p className="text-sky-400 italic">"Might’ve dropped that during reorganization. Don’t touch. — K"</p>
                </div>
                <div className="border-l-2 border-sky-500 pl-3 py-1">
                   <p className="text-slate-500">Yesterday</p>
                   <p className="text-slate-300">Spherical anomaly "Greg" found in cafeteria freezer.</p>
                   <p className="text-sky-400 italic">"Please do not re-freeze Greg. — K"</p>
                </div>
                <div className="border-l-2 border-sky-500 pl-3 py-1">
                   <p className="text-slate-500">02:12 JST</p>
                   <p className="text-slate-300">Found Room (404) expansion detected. Room now includes a small pier.</p>
                   <p className="text-sky-400 italic">"Interior design is my passion. Want to go fishing? — K"</p>
                </div>
             </div>
           </div>

           <div className="bg-rose-950/20 border border-rose-500/20 p-6 rounded-lg">
             <h3 className="text-[10px] font-mono text-rose-400 mb-2 uppercase font-bold">⚠️ Warning: Category-4 Curses</h3>
             <p className="text-xs text-rose-500/80 leading-relaxed font-mono">
               DO NOT stack cursed objects over Category-4 unless you like hearing voices from the floorboards again. Last incident required a multi-department exorcism.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
};

const RequisitionItem = ({ item, requester, status, color }: any) => (
  <div className={`p-3 border rounded bg-slate-950/40 flex justify-between items-center transition-all hover:bg-slate-900/60 ${color}`}>
    <div>
      <p className="text-xs font-bold text-slate-200">{item}</p>
      <p className="text-[10px] text-slate-500 uppercase font-mono tracking-tighter">Requester: {requester}</p>
    </div>
    <span className="text-[10px] font-mono font-bold px-2 py-1 bg-slate-800 rounded text-slate-300">{status}</span>
  </div>
);

export default Logistics;