import React, { useState, useEffect } from 'react';
import { useGlobalStatus } from '../../context/StatusContext';
import { ReactorStatus, AccessLevel, AutonomyState } from './types';
import { REACTOR_DATA } from './config/reactorData';
import { LOAD_CATEGORIES } from './config/loadCategories';
import { MOCK_ALERTS } from './config/alerts';
import { AUTONOMY_PHRASES } from './config/autonomy';
import { ReactorHeader } from './components/ReactorHeader';
import { StatusBanner } from './components/StatusBanner';
import { ReactorSchematic } from './components/ReactorSchematic';
import { CriticalNumbers } from './components/CriticalNumbers';
import { LoadDistribution } from './components/LoadDistribution';
import { AlertsPanel } from './components/AlertsPanel';
import { ControlsPanel } from './components/ControlsPanel';

const ReactorControl: React.FC = () => {
  const { status } = useGlobalStatus();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [reactorStatus] = useState<ReactorStatus>('NOMINAL');
  const [statusReason] = useState('All systems within normal parameters');
  const [selectedAlert, setSelectedAlert] = useState<string | null>(null);
  const [showCriticalPanel, setShowCriticalPanel] = useState(false);
  const [use24Hour, setUse24Hour] = useState(true);

  // Get zoom behavior class based on settings
  const zoomClass = status.settings.display.allowSmallWindowGrowth ? '' : 'zoom-fixed';

  // Determine access level based on department
  const getAccessLevel = (): AccessLevel => {
    if (status.staff.memberId === 'engineering') return 'ROUTINE CONTROL';
    if (status.staff.memberId === 'maintenance') return 'LOCAL MAINT';
    if (status.staff.memberId === 'operations') return 'ROUTINE CONTROL';
    return 'VIEW ONLY';
  };

  const accessLevel = getAccessLevel();
  const canControl = accessLevel === 'ROUTINE CONTROL' || accessLevel === 'LOCAL MAINT';

  // Live clock
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const autonomyState: AutonomyState = 'LEASHED';
  const currentOperator = status.staff.memberName || 'AUTOMATION';

  const handleAlertClick = (alertId: string) => {
    setSelectedAlert(selectedAlert === alertId ? null : alertId);
  };

  const toggleTimeFormat = () => {
    setUse24Hour(prev => !prev);
  };

  return (
    <div className={`min-h-screen bg-slate-950 text-slate-200 p-6 font-mono ${zoomClass}`}>
      <style>{`
        @media (min-width: 1px) {
          .zoom-fixed {
            transform: scale(${1 / (window.devicePixelRatio || 1)});
            transform-origin: top left;
            width: ${(window.devicePixelRatio || 1) * 100}%;
          }
        }
        @media (min-resolution: 120dpi) and (max-resolution: 143dpi) {
          .zoom-fixed {
            transform: scale(0.833);
            width: 120%;
          }
        }
        @media (min-resolution: 144dpi) and (max-resolution: 191dpi) {
          .zoom-fixed {
            transform: scale(0.694);
            width: 144%;
          }
        }
        @media (min-resolution: 192dpi) {
          .zoom-fixed {
            transform: scale(0.521);
            width: 192%;
          }
        }
      `}</style>

      <ReactorHeader
        currentTime={currentTime}
        currentOperator={currentOperator}
        accessLevel={accessLevel}
        autonomyState={autonomyState}
        autonomyPhrase={AUTONOMY_PHRASES[autonomyState]}
        use24Hour={use24Hour}
        onToggleTimeFormat={toggleTimeFormat}
      />

      <StatusBanner reactorStatus={reactorStatus} statusReason={statusReason} />

      {/* Main Control Area */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <ReactorSchematic />
        <CriticalNumbers data={REACTOR_DATA} />
      </div>

      <LoadDistribution loadCategories={LOAD_CATEGORIES} />

      <div className="grid grid-cols-3 gap-6">
        <AlertsPanel alerts={MOCK_ALERTS} selectedAlert={selectedAlert} onAlertClick={handleAlertClick} />

        <ControlsPanel
          canControl={canControl}
          showCriticalPanel={showCriticalPanel}
          onToggleCriticalPanel={() => setShowCriticalPanel(!showCriticalPanel)}
        />
      </div>
    </div>
  );
};

export default ReactorControl;
