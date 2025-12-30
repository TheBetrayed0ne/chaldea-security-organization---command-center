// File: components/SaintGraph/components/SyncModal.tsx
import React from 'react';

interface SyncModalProps {
  isSyncing: boolean;
  syncName: string;
  onNameChange: (name: string) => void;
  onSync: () => void;
  onClose: () => void;
}

export const SyncModal: React.FC<SyncModalProps> = ({ 
  isSyncing, 
  syncName, 
  onNameChange, 
  onSync, 
  onClose 
}) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-md bg-slate-900 border border-blue-500/30 p-8 rounded-xl shadow-2xl space-y-8">
        <div className="text-center">
          <h3 className="text-xl font-black text-slate-100 uppercase tracking-tighter">Sync New Saint Graph</h3>
          <p className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mt-1">Initiating TRISMEGISTUS_II Heuristics</p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-mono text-slate-400 uppercase">Subject Designation</label>
            <input 
              disabled={isSyncing}
              type="text" 
              value={syncName}
              onChange={(e) => onNameChange(e.target.value)}
              placeholder="ENTER NAME..."
              className="w-full bg-slate-950 border border-slate-800 p-4 rounded text-xs font-mono text-white outline-none focus:border-blue-500"
            />
          </div>

          {isSyncing ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 border-2 border-blue-500/20 border-t-blue-500 rounded-full animate-spin mx-auto"></div>
              <p className="text-[10px] font-mono text-blue-400 animate-pulse">ANALYZING SPIRITRON SIGNATURE...</p>
            </div>
          ) : (
            <div className="flex gap-4">
              <button 
                onClick={onClose}
                className="flex-1 py-3 border border-slate-800 text-slate-500 text-[10px] font-bold uppercase rounded tracking-widest hover:text-white hover:bg-slate-800 transition-all"
              >
                Cancel
              </button>
              <button 
                onClick={onSync}
                disabled={!syncName.trim()}
                className="flex-1 py-3 bg-blue-600 text-white text-[10px] font-bold uppercase rounded tracking-widest shadow-lg shadow-blue-900/40 hover:bg-blue-500 transition-all disabled:opacity-20"
              >
                Initialize Sync
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
