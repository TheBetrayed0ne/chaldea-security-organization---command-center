
import React, { useState, useRef, useEffect } from 'react';
import { querySheba } from '../services/geminiService.ts';
import { soundService } from '../services/soundService.ts';

const ShebaLens: React.FC = () => {
  const [query, setQuery] = useState('');
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<{q: string, a: string}[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [history, loading]);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const currentQuery = query;
    setQuery('');
    setLoading(true);
    soundService.playStartup();

    try {
      const result = await querySheba(currentQuery);
      setHistory(prev => [...prev, { q: currentQuery, a: result }]);
      setAnalysis(result);
    } catch (err) {
      setAnalysis("CRITICAL ERROR: SHEBA SENSORS OFFLINE.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700 h-full flex flex-col font-mono">
      <header className="flex justify-between items-center border-b border-slate-200 dark:border-cyan-900/30 pb-6 shrink-0">
        <div>
          <h2 className="text-2xl font-black text-black dark:text-slate-100 uppercase tracking-widest">SHEBA LENS: REALITY OBSERVER</h2>
          <p className="text-cyan-600 dark:text-cyan-500 font-mono text-[10px] uppercase mt-1">Satellite CHALDEAS // Multiversal Probabilities</p>
        </div>
        <div className="flex gap-4 text-[10px]">
          <div className="text-right">
            <p className="text-slate-400 dark:text-slate-600 uppercase mb-1">Reality Deviation</p>
            <p className="text-emerald-600 dark:text-emerald-500 font-bold">0.0004% (NOMINAL)</p>
          </div>
        </div>
      </header>
      
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 min-h-0">
         {/* Main Viewport */}
         <div className="lg:col-span-8 flex flex-col bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-cyan-900/30 rounded-lg relative overflow-hidden shadow-sm dark:shadow-none">
            <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
               <div className="w-full h-full bg-[radial-gradient(circle_at_center,#06b6d4_0%,transparent_70%)] animate-pulse"></div>
            </div>

            {/* Analysis History */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 custom-scrollbar relative z-10">
               {history.length === 0 && !loading && (
                 <div className="h-full flex flex-col items-center justify-center opacity-30">
                    <div className="w-32 h-32 rounded-full border border-cyan-500/20 flex items-center justify-center mb-4">
                       <div className="w-24 h-24 rounded-full border-t-2 border-cyan-500 animate-spin"></div>
                    </div>
                    <p className="text-xs uppercase tracking-widest text-slate-500">Awaiting Reality Query...</p>
                 </div>
               )}
               {history.map((item, idx) => (
                 <div key={idx} className="space-y-4 animate-in slide-in-from-bottom-2 duration-300">
                    <div className="flex gap-4">
                       <span className="text-cyan-600 shrink-0">[QUERY]</span>
                       <p className="text-slate-800 dark:text-slate-100 font-bold">{item.q}</p>
                    </div>
                    <div className="bg-cyan-50 dark:bg-cyan-950/20 border-l-2 border-cyan-500 p-4 rounded-r">
                       <p className="text-cyan-700 dark:text-cyan-400 text-xs leading-relaxed whitespace-pre-wrap">{item.a}</p>
                    </div>
                 </div>
               ))}
            </div>

            {/* Input Panel */}
            <div className="p-4 bg-slate-50 dark:bg-slate-950/60 border-t border-slate-200 dark:border-cyan-900/30 z-10">
               <form onSubmit={handleAnalyze} className="flex gap-4">
                  <input 
                    type="text" 
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="ENTER PARAMETERS FOR SATELLITE ANALYSIS..."
                    className="flex-1 bg-transparent border-b border-slate-300 dark:border-cyan-900/50 text-black dark:text-cyan-100 placeholder:text-slate-400 dark:placeholder:text-slate-800 focus:outline-none focus:border-cyan-500 dark:focus:border-cyan-400 py-2 text-xs"
                  />
                  <button 
                    disabled={loading || !query.trim()}
                    type="submit"
                    className="px-6 py-2 bg-cyan-600 text-white dark:text-slate-950 font-bold text-[10px] uppercase rounded hover:bg-cyan-500 transition-all disabled:opacity-20"
                  >
                    Analyze
                  </button>
               </form>
            </div>
         </div>

         {/* Sidebar Stats */}
         <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 rounded-lg shadow-sm dark:shadow-none">
               <h3 className="text-xs font-mono text-cyan-600 dark:text-cyan-500 uppercase mb-4 font-bold">Orbital Diagnostics</h3>
               <div className="space-y-3 text-[10px] font-mono">
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/50 pb-1">
                    <span className="text-slate-400 dark:text-slate-600">SATELLITE_UPLINK</span>
                    <span className="text-emerald-600 dark:text-emerald-500 font-bold">CONNECTED</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-100 dark:border-slate-800/50 pb-1">
                    <span className="text-slate-400 dark:text-slate-600">SHEBA_LENS_TEMP</span>
                    <span className="text-blue-600 dark:text-blue-400">-184°C</span>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

export default ShebaLens;
