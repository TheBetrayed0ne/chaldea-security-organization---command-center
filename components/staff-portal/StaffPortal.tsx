// File: pages/staff-portal/StaffPortal.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { useGlobalStatus } from '../../context/StatusContext.tsx';
import { StaffPortalProps, MousePos } from './types.ts';
import { STAFF_CHEFS } from './config/staffChefs.ts';
import { DAILY_BULLETINS } from './config/dailyBulletins.ts';
import { buildAtmosphere } from './utils/buildAtmosphere.ts';
import { normalizeMousePosition } from './utils/normalizeMousePosition.ts';
import { getStaffPortalPolicy } from './policy/staffPortalPolicy.ts';

import { EnvironmentalStatusHeader } from './components/EnvironmentalStatusHeader.tsx';
import { FacilityStatusHeader } from './components/FacilityStatusHeader.tsx';
import { SatelliteStatusPill } from './components/SatelliteStatusPill.tsx';
import { EmotionalClimateCard } from './components/EmotionalClimateCard.tsx';
import { StaffBulletinsPanel } from './components/StaffBulletinsPanel.tsx';
import { ChaldeasGlobe } from './components/ChaldeasGlobe.tsx';
import { AccessCommandButton } from './components/AccessCommandButton.tsx';
import { ChaldeanTableCard } from './components/ChaldeanTableCard.tsx';

const StaffPortal: React.FC<StaffPortalProps> = ({ chefIndex, onEnterCommand }) => {
  const { status, updateSettings } = useGlobalStatus();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isMilitaryTime, setIsMilitaryTime] = useState(true);
  const [isCelsius, setIsCelsius] = useState(true);
  const [mousePos, setMousePos] = useState<MousePos>({ x: 0, y: 0 });

  const policy = useMemo(() => getStaffPortalPolicy(status.userRole), [status.userRole]);
  const chef = STAFF_CHEFS[chefIndex];
  const currentTempF = Math.round((status.externalTemp * 9/5) + 32);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos(normalizeMousePosition(e.clientX, e.clientY));
  };

  const atmosphere = useMemo(() => {
    return buildAtmosphere(currentTime, status.settings.dayNightSync);
  }, [currentTime.getHours(), status.settings.dayNightSync]);

  return (
    <div 
      className="min-h-screen bg-slate-950 text-slate-200 p-8 flex flex-col items-center animate-in fade-in duration-1000 selection:bg-cyan-500/30 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="w-full max-w-7xl flex justify-between items-start mb-12">
        <div className="flex gap-10 items-start">
          <EnvironmentalStatusHeader 
            currentTime={currentTime}
            isMilitaryTime={isMilitaryTime}
            onToggleMilitaryTime={() => setIsMilitaryTime(!isMilitaryTime)}
            isCelsius={isCelsius}
            onToggleCelsius={() => setIsCelsius(!isCelsius)}
            externalTemp={status.externalTemp}
            currentTempF={currentTempF}
          />

          <div className="w-px h-12 bg-slate-900"></div>

          <FacilityStatusHeader 
            status={status}
            onUpdateSettings={updateSettings}
          />
        </div>

        <SatelliteStatusPill />
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1">
        <div className="lg:col-span-3 space-y-6 flex flex-col">
          <EmotionalClimateCard 
            calm={status.emotionalClimate.calm}
            existential={status.emotionalClimate.existential}
            hungry={status.emotionalClimate.hungry}
          />

          {policy.canSeeBulletins && (
            <StaffBulletinsPanel bulletins={DAILY_BULLETINS} />
          )}
        </div>

        <div className="lg:col-span-6 flex flex-col items-center justify-center">
          <ChaldeasGlobe 
            mousePos={mousePos}
            atmosphere={atmosphere}
            humanOrder={status.humanOrder}
          />

          {policy.canEnterCommand && (
            <AccessCommandButton onEnter={onEnterCommand} />
          )}
        </div>

        <div className="lg:col-span-3 space-y-6 flex flex-col">
          {policy.canSeeChefDetails && (
            <ChaldeanTableCard chef={chef} />
          )}
        </div>
      </div>

      <style>{`
        @keyframes globe {
          from { background-position: 0 0; }
          to { background-position: -200% 0; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(1deg); }
        }
        .perspective-1000 { perspective: 1000px; }
      `}</style>
    </div>
  );
};

export default StaffPortal;
