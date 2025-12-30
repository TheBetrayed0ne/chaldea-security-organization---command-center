
// File: components/SaintGraph/detail/tabs/IncidentsTab.tsx
import React from 'react';
import { Servant } from '../../../../types';
import { IncidentLog } from '../components/IncidentLog.tsx';

interface IncidentsTabProps {
  servant: Servant;
}

export const IncidentsTab: React.FC<IncidentsTabProps> = ({ servant }) => (
  <div className="space-y-4 animate-in fade-in duration-300">
    {servant.incidents && servant.incidents.length > 0 ? (
      servant.incidents.map((inc, i) => (
        <IncidentLog key={i} date={inc.date} cat={inc.cat} msg={inc.msg} />
      ))
    ) : (
      <div className="text-center py-20 opacity-20 italic">
        <p className="text-xs font-mono">NO INCIDENTS LOGGED IN CURRENT BUFFER</p>
      </div>
    )}
    <p className="text-[10px] font-mono text-slate-700 uppercase text-center pt-8 italic">
      End of recent logs // Archives available via TRISMEGISTUS_CORE_B
    </p>
  </div>
);
