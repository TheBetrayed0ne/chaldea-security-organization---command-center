
// File: pages/dashboard/Dashboard.tsx
import React, { useState, useMemo } from 'react';
import { useGlobalStatus } from '../../context/StatusContext.tsx';

import { ECONOMY_MASTER_DATA } from './config/resources.ts';
import { RAW_FEED_ITEMS } from './config/feedItems.ts';
import { buildManaData } from './utils/buildManaData.ts';
import { filterFeedItems } from './utils/filterFeedItems.ts';
import { getDashboardPolicy } from './policy/dashboardPolicy.ts';

import { ResourceSection } from './components/ResourceSection.tsx';
import { LeylineChartCard } from './components/LeylineChartCard.tsx';
import { SecurityFeedCard } from './components/SecurityFeedCard.tsx';
import { StatTile } from './components/StatTile.tsx';

const Dashboard: React.FC = () => {
  const { status } = useGlobalStatus();
  const [activeCurrencyId, setActiveCurrencyId] = useState<string | null>(null);

  const policy = useMemo(() => getDashboardPolicy(status.userRole), [status.userRole]);

  const handleSelectResource = (id: string) => {
    setActiveCurrencyId(prev => (prev === id ? null : id));
  };

  const currentCurrency = ECONOMY_MASTER_DATA.find(c => c.id === activeCurrencyId);

  const manaData = useMemo(() => {
    return buildManaData(
      status.settings.chartRange,
      status.settings.chartDetail,
      status.settings.viewMode
    );
  }, [status.settings.chartRange, status.settings.chartDetail, status.settings.viewMode]);

  const feedItems = useMemo(() => {
    return filterFeedItems(RAW_FEED_ITEMS, status.settings.alertDensity);
  }, [status.settings.alertDensity]);

  return (
    <div className="p-10 space-y-10 animate-in fade-in duration-700 max-w-7xl mx-auto font-sans">
      <header className="flex justify-between items-end border-b border-slate-200 dark:border-slate-900 pb-8">
        <div>
          <h2 className="text-3xl font-black tracking-tight text-black dark:text-slate-100 flex items-center gap-4 uppercase">
            Command Center
            <span className={`text-[10px] font-mono px-2 py-0.5 rounded border font-bold tracking-widest ${
              status.facility === 'NOMINAL' ? 'text-emerald-600 bg-emerald-950/20 border-emerald-900/50' : 'text-rose-500 bg-rose-950/20 border-rose-900/50'
            }`}>
              {status.facility}_LINK
            </span>
            {status.settings.escortContext !== 'none' && (
              <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-cyan-500/20 text-cyan-500 bg-cyan-950/20 font-bold">
                ESCORT: {status.settings.escortContext.toUpperCase()}
              </span>
            )}
          </h2>
          <p className="text-slate-500 font-mono text-[10px] mt-2 uppercase tracking-[0.3em] font-bold">
            Leyline Surveillance Terminal // CHALDEAS_S7 // MODE: {status.settings.viewMode.toUpperCase()}
          </p>
        </div>
        <div className="flex gap-10 font-mono text-[10px]">
           <div className="text-right">
              <p className="text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">External Temp</p>
              <p className="text-sm font-bold text-blue-600 dark:text-blue-500">{status.externalTemp.toFixed(1)}°C (STABLE)</p>
           </div>
           <div className="text-right">
              <p className="text-slate-400 dark:text-slate-600 uppercase tracking-widest mb-1">Morale Index</p>
              <p className="text-sm font-bold text-rose-600 dark:text-rose-500">{Math.round(status.moraleIndex)}% (SATISFACTORY)</p>
           </div>
        </div>
      </header>

      {policy.canSeeEconomy && (
        <ResourceSection 
          resources={ECONOMY_MASTER_DATA}
          operationalFocus={status.settings.operationalFocus}
          activeCurrencyId={activeCurrencyId}
          onSelectResource={handleSelectResource}
          onClearSelection={() => setActiveCurrencyId(null)}
          currentCurrency={currentCurrency}
        />
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <LeylineChartCard 
          data={manaData}
          viewMode={status.settings.viewMode}
          chartRange={status.settings.chartRange}
          chartDetail={status.settings.chartDetail}
          reduceMotion={status.settings.accessibility.reduceMotion}
        />

        {policy.canSeeFeed && (
          <SecurityFeedCard 
            items={feedItems}
            alertDensity={status.settings.alertDensity}
          />
        )}
      </div>

      {status.settings.viewMode !== 'basic' && policy.canSeeDetailedTiles && (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatTile label="Archived Graphs" value="402" sub="Verified Logs" icon="☍" />
          
          {status.settings.operationalFocus === 'support' ? (
            <StatTile label="Counseling Load" value="LOW" sub="24 Active" icon="✚" color="text-pink-500" />
          ) : (
            <StatTile label="Staff Efficiency" value="92%" sub="Nominal" icon="◬" color="text-emerald-500" />
          )}

          <StatTile label="Leyline Sync" value="99.8%" sub="Stable" icon="⊙" color="text-blue-500" />
          
          {status.settings.operationalFocus === 'field' ? (
            <StatTile label="Active Teams" value="02" sub="Deployment Ready" icon="🌍" color="text-amber-500" />
          ) : (
            <StatTile label="Room 404 Status" value="OCCUPIED" sub="Warden Present" icon="❄" color="text-blue-400" />
          )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
