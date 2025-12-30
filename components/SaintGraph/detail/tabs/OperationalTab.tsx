// File: components/SaintGraph/detail/tabs/OperationalTab.tsx
import React from 'react';
import { Servant } from '../../../../types';
import { OperationalCard } from '../components/OperationalCard.tsx';

interface OperationalTabProps {
  servant: Servant;
}

export const OperationalTab: React.FC<OperationalTabProps> = ({ servant }) => (
  <div className="space-y-8 animate-in fade-in duration-300">
    <OperationalCard label="Containment Note" val={servant.metadata?.interactionNotes || 'No specific interaction logs filed.'} icon="⚠️" />
    
    <div>
      <h4 className="text-[10px] font-mono text-slate-600 uppercase mb-3">Pairing Recommendations</h4>
      <div className="flex flex-wrap gap-2">
        {servant.metadata?.pairingRecs?.map(p => (
          <span key={p} className="px-3 py-1 bg-slate-800 text-slate-300 text-[10px] font-mono rounded border border-slate-700">{p}</span>
        )) || <span className="text-[10px] font-mono text-slate-700 uppercase italic">No specific pairing logs.</span>}
      </div>
    </div>

    <OperationalCard label="Access Restrictions" val={servant.metadata?.restrictions || 'No security restrictions filed.'} color="text-rose-400" />
    
    <div>
      <h4 className="text-[10px] font-mono text-slate-600 uppercase mb-3">Institutional Assignment</h4>
      <div className="flex gap-4">
        <div className="flex-1 bg-slate-800/40 p-4 rounded border border-slate-800">
          <p className="text-[8px] text-slate-500 uppercase mb-1">Department</p>
          <p className="text-xs font-bold text-blue-400 uppercase tracking-widest">{servant.metadata?.department || 'UNASSIGNED'}</p>
        </div>
        <div className="flex-1 bg-slate-800/40 p-4 rounded border border-slate-800">
          <p className="text-[8px] text-slate-500 uppercase mb-1">Temperament</p>
          <p className="text-xs font-bold text-amber-400 uppercase tracking-widest">{servant.metadata?.temperament || 'UNKNOWN'}</p>
        </div>
      </div>
    </div>
  </div>
);
