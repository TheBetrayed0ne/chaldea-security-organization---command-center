
import React, { useState } from 'react';
import { useGlobalStatus } from '../../../context/StatusContext.tsx';
import { soundService } from '../../../services/soundService.ts';
import { SettingToggle } from '../components/SettingToggle.tsx';

interface SettingsDrawerProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface CollapsibleSectionProps {
  title: string;
  id: string;
  isOpen: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}

const CollapsibleSection: React.FC<CollapsibleSectionProps> = ({ title, id, isOpen, onToggle, children }) => {
  return (
    <div className="border-b border-slate-800/50 last:border-0">
      <button 
        onClick={() => {
          soundService.playClick();
          onToggle(id);
        }}
        className="w-full flex items-center justify-between py-4 group hover:bg-slate-800/20 transition-colors px-2 rounded-sm"
      >
        <h3 className="text-[9px] text-cyan-500 font-bold uppercase tracking-widest">{title}</h3>
        <span className={`text-[10px] text-slate-600 group-hover:text-cyan-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-2 pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({ isOpen, onToggle }) => {
  const { status, updateSettings, resetToDefaults } = useGlobalStatus();
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    view: true,
    audio: true
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const handleSettingChange = (key: string, value: any) => {
    soundService.playClick();
    updateSettings({ [key]: value });
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-80 bg-slate-900 border-l border-slate-800 z-50 transform transition-transform duration-300 ease-in-out shadow-2xl ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="h-full flex flex-col p-6 font-mono overflow-y-auto custom-scrollbar">
        <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
          <div className="flex flex-col">
            <h2 className="text-xs font-black text-white uppercase tracking-[0.2em]">View Configuration</h2>
            <span className="text-[7px] text-slate-600 mt-0.5 tracking-widest uppercase">Buffer: TRISMEGISTUS_II</span>
          </div>
          <button 
            onClick={() => {
              soundService.playClick();
              onToggle();
            }} 
            className="w-8 h-8 rounded-full flex items-center justify-center text-slate-500 hover:text-white hover:bg-slate-800 transition-all"
          >
            ✕
          </button>
        </div>

        <div className="space-y-1 flex-1">
          <CollapsibleSection 
            title="Display Modes" 
            id="view" 
            isOpen={!!openSections.view} 
            onToggle={toggleSection}
          >
            <div className="grid grid-cols-1 gap-1">
              {['basic', 'standard', 'analyst'].map(mode => (
                <button 
                  key={mode}
                  onClick={() => handleSettingChange('viewMode', mode as any)}
                  className={`text-left px-3 py-2 rounded text-[10px] uppercase transition-all flex justify-between items-center ${status.settings.viewMode === mode ? 'bg-blue-600 text-white shadow-[0_0_10px_rgba(37,99,235,0.2)]' : 'hover:bg-slate-800 text-slate-500'}`}
                >
                  <span>{mode}</span>
                  {status.settings.viewMode === mode && <span className="text-[8px]">ACTIVE</span>}
                </button>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Audio Terminal" 
            id="audio" 
            isOpen={!!openSections.audio} 
            onToggle={toggleSection}
          >
            <div className="space-y-4">
              <SettingToggle 
                label="Master Audio" 
                active={status.settings.audio.enabled} 
                onClick={() => handleSettingChange('audio', { ...status.settings.audio, enabled: !status.settings.audio.enabled })} 
              />
              <div className="space-y-3">
                <div className="flex justify-between text-[9px] font-bold uppercase text-slate-500">
                  <span>Output Amplitude</span>
                  <span className="text-cyan-400">{Math.round(status.settings.audio.volume * 100)}%</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="1" 
                  step="0.01"
                  value={status.settings.audio.volume}
                  onChange={(e) => handleSettingChange('audio', { ...status.settings.audio, volume: parseFloat(e.target.value) })}
                  className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Simulation Sync" 
            id="sim" 
            isOpen={!!openSections.sim} 
            onToggle={toggleSection}
          >
            <div className="space-y-3">
              <SettingToggle 
                label="Day/Night Cycles" 
                active={status.settings.dayNightSync} 
                onClick={() => handleSettingChange('dayNightSync', !status.settings.dayNightSync)} 
              />
              <p className="text-[8px] text-slate-600 uppercase leading-relaxed italic">
                Syncs portal atmosphere with actual facility time.
              </p>
            </div>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Leyline Metrics" 
            id="leyline" 
            isOpen={!!openSections.leyline} 
            onToggle={toggleSection}
          >
            <div className="space-y-4">
              <div>
                <p className="text-[9px] text-slate-600 uppercase mb-2 font-bold">Temporal Window</p>
                <div className="flex flex-wrap gap-1">
                  {['1h', '6h', '24h', '72h'].map(r => (
                    <button 
                      key={r} 
                      onClick={() => handleSettingChange('chartRange', r as any)} 
                      className={`flex-1 py-1.5 border text-[9px] rounded transition-all font-bold ${status.settings.chartRange === r ? 'bg-slate-700 text-cyan-400 border-cyan-500/50' : 'text-slate-600 border-slate-800 hover:border-slate-700'}`}
                    >
                      {r.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Operational Focus" 
            id="role" 
            isOpen={!!openSections.role} 
            onToggle={toggleSection}
          >
            <div className="grid grid-cols-1 gap-1">
              {['field', 'facility', 'support'].map(focus => (
                <button 
                  key={focus}
                  onClick={() => handleSettingChange('operationalFocus', focus as any)}
                  className={`text-left px-3 py-2 rounded text-[10px] uppercase transition-all flex justify-between items-center ${status.settings.operationalFocus === focus ? 'bg-slate-800 text-cyan-400 border border-cyan-900/50' : 'hover:bg-slate-800 text-slate-500 border border-transparent'}`}
                >
                  <span>{focus} objective</span>
                  {status.settings.operationalFocus === focus && <span className="w-1 h-1 bg-cyan-400 rounded-full"></span>}
                </button>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection 
            title="Accessibility" 
            id="access" 
            isOpen={!!openSections.access} 
            onToggle={toggleSection}
          >
            <div className="space-y-4">
              <SettingToggle 
                label="High Contrast" 
                active={status.settings.accessibility.highContrast} 
                onClick={() => handleSettingChange('accessibility', { ...status.settings.accessibility, highContrast: !status.settings.accessibility.highContrast })} 
              />
              <SettingToggle 
                label="Reduce Motion" 
                active={status.settings.accessibility.reduceMotion} 
                onClick={() => handleSettingChange('accessibility', { ...status.settings.accessibility, reduceMotion: !status.settings.accessibility.reduceMotion })} 
              />
            </div>
          </CollapsibleSection>
        </div>

        <div className="pt-8 space-y-4">
          <p className="text-[8px] text-slate-700 uppercase font-mono italic text-center">
            Config profiles handled by TRIS_II buffer.
          </p>
          
          <button 
            onClick={() => {
              soundService.playTransition();
              resetToDefaults();
            }}
            className="w-full py-3 bg-slate-950 border border-slate-800 text-slate-500 hover:text-rose-400 hover:border-rose-900/50 font-bold text-[10px] uppercase tracking-[0.2em] rounded transition-all"
          >
            Reset to Ops Defaults
          </button>
        </div>
      </div>
    </div>
  );
};
