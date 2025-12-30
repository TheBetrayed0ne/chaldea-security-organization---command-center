import React, { useState, useRef, useEffect } from 'react';
import { chatWithStaffAI } from '../services/geminiService.ts';
import { ChatMessage, Mission } from '../types.ts';
import { soundService } from '../services/soundService.ts';

const INITIAL_MISSIONS: Mission[] = [
  { id: 'OP-01', codename: 'GHOST_LIGHT', singularityId: '7', status: 'IN_PROGRESS', riskLevel: 'High', team: ['Mash', 'Ishtar', 'Ereshkigal'], objective: 'Secure Leyline Node 04 in Babylonia.', eta: '14:20 JST' },
  { id: 'OP-02', codename: 'STORM_GLASS', singularityId: '8', status: 'PREPARATION', riskLevel: 'Critical', team: ['King Hassan', 'Jeanne Alter'], objective: 'Initialize vanguard link to Grand Temple of Time.' },
  { id: 'OP-03', codename: 'ROSE_GARDEN', singularityId: 'F', status: 'COMPLETED', riskLevel: 'Moderate', team: ['Artoria', 'Cu Chulainn'], objective: 'Neutralize corruption in Fuyuki North Sector.' },
];

const Rayshift: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Board' | 'Console'>('Board');
  const [missions, setMissions] = useState<Mission[]>(INITIAL_MISSIONS);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newMission, setNewMission] = useState<Partial<Mission>>({
    status: 'PREPARATION',
    riskLevel: 'Moderate',
    team: []
  });

  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "TRISMEGISTUS II online. Rayshift tactical data synchronized. How may I assist?", timestamp: Date.now() }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg, timestamp: Date.now() }]);
    setLoading(true);
    try {
      const response = await chatWithStaffAI(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response, timestamp: Date.now() }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "ERROR: Spiritron connection interrupted.", timestamp: Date.now() }]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateMission = (e: React.FormEvent) => {
    e.preventDefault();
    soundService.playSelect();
    const missionToAdd: Mission = {
      ...newMission,
      id: `OP-${Math.floor(Math.random() * 900) + 100}`,
      codename: (newMission.codename || 'UNNAMED_OP').toUpperCase(),
    } as Mission;

    setMissions(prev => [missionToAdd, ...prev]);
    setShowCreateModal(false);
    setNewMission({ status: 'PREPARATION', riskLevel: 'Moderate', team: [] });
  };

  return (
    <div className="h-full flex flex-col p-8 space-y-6 animate-in fade-in duration-500 font-sans">
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-black tracking-tight text-slate-100 uppercase">Rayshift Operations Console</h2>
          <div className="flex gap-4 mt-2">
            {['Board', 'Console'].map(t => (
              <button 
                key={t}
                onClick={() => { soundService.playClick(); setActiveTab(t as any); }}
                className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded border transition-all ${activeTab === t ? 'bg-cyan-600 text-slate-950 border-cyan-400' : 'bg-slate-900 text-slate-500 border-slate-800'}`}
              >
                {t === 'Board' ? 'Mission Board' : 'TRISMEGISTUS_II'}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4">
          {activeTab === 'Board' && (
            <button 
              onClick={() => { soundService.playStartup(); setShowCreateModal(true); }}
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded transition-all shadow-lg shadow-blue-900/20"
            >
              Initialize New Entry
            </button>
          )}
          <span className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/50 rounded text-[10px] font-mono text-cyan-400 h-fit">SOC_LINK: ACTIVE</span>
        </div>
      </header>

      {activeTab === 'Board' ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-4">
          {missions.map(m => (
            <div key={m.id} className="bg-slate-900/40 border border-slate-800 p-6 rounded-lg hover:border-cyan-500/30 transition-all group">
              <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-mono text-slate-500">{m.id} // SING_{m.singularityId}</span>
                <span className={`text-[8px] font-bold px-2 py-0.5 rounded border ${
                  m.status === 'IN_PROGRESS' ? 'text-blue-400 border-blue-900/50 bg-blue-950/20' :
                  m.status === 'COMPLETED' ? 'text-emerald-400 border-emerald-900/50 bg-emerald-950/20' :
                  'text-amber-400 border-amber-900/50 bg-amber-950/20'
                }`}>{m.status}</span>
              </div>
              <h3 className="text-lg font-black text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors uppercase tracking-tighter">{m.codename}</h3>
              <p className="text-xs text-slate-400 mb-6 font-mono leading-relaxed line-clamp-2 italic">"{m.objective}"</p>
              <div className="space-y-2 border-t border-slate-800 pt-4">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-slate-600">RISK:</span>
                  <span className={m.riskLevel === 'Critical' ? 'text-rose-500 font-bold' : 'text-slate-300'}>{m.riskLevel.toUpperCase()}</span>
                </div>
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="text-slate-600">TEAM:</span>
                  <span className="text-slate-300 truncate ml-4">{m.team.join(', ') || 'Awaiting Assignment'}</span>
                </div>
                {m.eta && (
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-slate-600">ETA:</span>
                    <span className="text-cyan-500">{m.eta}</span>
                  </div>
                )}
              </div>
              <button onClick={() => { soundService.playSelect(); setActiveTab('Console'); }} className="w-full mt-6 py-2 bg-slate-800 hover:bg-cyan-900/40 text-[10px] font-bold text-slate-400 hover:text-cyan-400 border border-slate-700 hover:border-cyan-800 rounded uppercase transition-all tracking-widest">
                Interface with Team ➔
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex-1 min-h-0 flex flex-col bg-slate-900/40 border border-cyan-900/30 rounded-lg backdrop-blur-sm overflow-hidden relative animate-in zoom-in-95">
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 z-10 custom-scrollbar">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded shrink-0 flex items-center justify-center text-[10px] font-black ${msg.role === 'user' ? 'bg-slate-700 text-slate-200' : 'bg-cyan-600 text-slate-950 shadow-[0_0_15px_rgba(8,145,178,0.5)]'}`}>
                    {msg.role === 'user' ? 'ST' : 'TR'}
                  </div>
                  <div className={`space-y-1 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                    <p className="text-[9px] font-mono text-slate-600 uppercase font-bold">{msg.role === 'user' ? 'Staff' : 'TRISMEGISTUS II'} • {new Date(msg.timestamp).toLocaleTimeString()}</p>
                    <div className={`p-4 rounded-lg text-sm leading-relaxed ${msg.role === 'user' ? 'bg-slate-800 border border-slate-700 text-slate-200' : 'bg-cyan-950/30 border border-cyan-900/50 text-cyan-100 font-mono'}`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-cyan-950/30 border border-cyan-900/50 p-4 rounded-lg text-cyan-400 text-[10px] font-mono animate-pulse tracking-widest">
                  CALCULATING SPIRITRON TRAJECTORY...
                </div>
              </div>
            )}
          </div>
          <div className="p-4 border-t border-cyan-900/30 bg-slate-950/50 z-10">
            <form onSubmit={handleSend} className="flex gap-2">
              <input 
                type="text" 
                placeholder="Send tactical instruction..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none text-sm text-cyan-100 placeholder:text-slate-700 focus:outline-none py-2 font-mono"
              />
              <button type="submit" disabled={loading} className="text-cyan-400 hover:text-cyan-200 disabled:text-slate-800 transition-colors p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* New Mission Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300 p-4">
           <div className="w-full max-w-xl bg-slate-900 border border-blue-500/40 p-8 rounded-xl shadow-2xl space-y-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
              
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-black text-slate-100 uppercase tracking-tighter">Initialize Tactical Entry</h3>
                  <p className="text-[10px] font-mono text-blue-400 uppercase tracking-[0.2em] mt-1">Establishing Rayshift Parameters</p>
                </div>
                <button onClick={() => setShowCreateModal(false)} className="text-slate-600 hover:text-white transition-colors">✕</button>
              </div>

              <form onSubmit={handleCreateMission} className="grid grid-cols-2 gap-6">
                 <div className="col-span-2 space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Operation Codename</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. SILVER_WOLF"
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs font-mono text-white outline-none focus:border-blue-500 transition-all uppercase"
                      onChange={(e) => setNewMission({...newMission, codename: e.target.value})}
                    />
                 </div>

                 <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Singularity ID</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. 7"
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs font-mono text-white outline-none focus:border-blue-500 transition-all"
                      onChange={(e) => setNewMission({...newMission, singularityId: e.target.value})}
                    />
                 </div>

                 <div className="space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Risk Level</label>
                    <select 
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs font-mono text-white outline-none focus:border-blue-500 transition-all"
                      onChange={(e) => setNewMission({...newMission, riskLevel: e.target.value as any})}
                    >
                      <option>Low</option>
                      <option selected>Moderate</option>
                      <option>High</option>
                      <option>Critical</option>
                    </select>
                 </div>

                 <div className="col-span-2 space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Mission Objective</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Enter primary directive..."
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs font-mono text-white outline-none focus:border-blue-500 transition-all resize-none"
                      onChange={(e) => setNewMission({...newMission, objective: e.target.value})}
                    />
                 </div>

                 <div className="col-span-2 space-y-1.5">
                    <label className="text-[10px] font-mono text-slate-500 uppercase font-bold">Assigned Team (Comma separated)</label>
                    <input 
                      type="text" 
                      placeholder="Mash, Cú Chulainn..."
                      className="w-full bg-slate-950 border border-slate-800 p-3 rounded text-xs font-mono text-white outline-none focus:border-blue-500 transition-all"
                      onChange={(e) => setNewMission({...newMission, team: e.target.value.split(',').map(s => s.trim())})}
                    />
                 </div>

                 <div className="col-span-2 flex gap-4 pt-4">
                    <button 
                      type="button"
                      onClick={() => setShowCreateModal(false)}
                      className="flex-1 py-3 border border-slate-800 text-slate-500 text-[10px] font-bold uppercase rounded tracking-widest hover:text-white hover:bg-slate-800 transition-all"
                    >
                      Abort
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-3 bg-blue-600 text-white text-[10px] font-bold uppercase rounded tracking-widest shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-all"
                    >
                      Confirm Entry
                    </button>
                 </div>
              </form>
           </div>
        </div>
      )}
    </div>
  );
};

export default Rayshift;