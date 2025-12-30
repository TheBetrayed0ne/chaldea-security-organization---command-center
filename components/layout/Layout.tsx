import React, { useState, useEffect, useMemo } from 'react';
import { soundService } from '../../services/soundService.ts';
import { useGlobalStatus } from '../../context/StatusContext.tsx';
import { LayoutProps } from './types.ts';
import { PROFILE_DATA } from './constants/profileData.ts';
import { MASTER_SPRITES } from './constants/masterSprites.ts';
import { NavItem } from './components/NavItem.tsx';
import { ProfileOverlay } from './profile/ProfileOverlay.tsx';
import { SettingsDrawer } from './settings/SettingsDrawer.tsx';
import { getDepartmentNav } from '../department-hub/config/departmentNav.ts';
import { getStaffDesignation } from '../department-hub/config/departmentLabels.ts';

const Layout: React.FC<LayoutProps> = ({ children, onReturnToPortal }) => {
  const { status, updateSettings, setActiveDepartment } = useGlobalStatus();
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const activeProfile = PROFILE_DATA[status.userRole || 'staff'];
  const currentAvatar = (status.userRole === 'master')
    ? (MASTER_SPRITES as any)[status.settings.masterGender]
    : activeProfile.avatar;

  // Get navigation config based on department and staff member
  const navConfig = useMemo(() => {
    if (status.userRole === 'staff') {
      return getDepartmentNav(status.activeDepartment, status.staff.memberId);
    }
    return getDepartmentNav(null, null); // Returns DEFAULT_NAV for non-staff
  }, [status.userRole, status.activeDepartment, status.staff.memberId]);

  // Compute dynamic staff name for sidebar (uses custom name if set for active department)
  const displayShortName = useMemo(() => {
    if (status.userRole === 'staff') {
      // Check if there's a custom name for the active department
      if (status.activeDepartment && status.staff.customNames[status.activeDepartment]) {
        return status.staff.customNames[status.activeDepartment];
      }
      // Fall back to member name
      if (status.staff.memberName) {
        return status.staff.memberName;
      }
    }
    return activeProfile.shortName;
  }, [status.userRole, status.activeDepartment, status.staff.customNames, status.staff.memberName, activeProfile.shortName]);

  useEffect(() => {
    soundService.updateSettings(status.settings.audio.enabled, status.settings.audio.volume);
  }, [status.settings.audio.enabled, status.settings.audio.volume]);

  useEffect(() => {
    if (status.settings.theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [status.settings.theme]);

  const toggleSettings = () => {
    soundService.playClick();
    setIsSettingsOpen(!isSettingsOpen);
  };

  const toggleTheme = () => {
    soundService.playSelect();
    updateSettings({ 
      theme: status.settings.theme === 'dark' ? 'light' : 'dark' 
    });
  };

  const toggleProfile = () => {
    if (!isProfileOpen) {
      soundService.playStartup();
    } else {
      soundService.playTransition();
    }
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <div className={`flex h-screen bg-slate-50 text-slate-900 dark:bg-[#0b0f19] dark:text-slate-300 overflow-hidden font-sans transition-colors duration-300 ${status.settings.accessibility.highContrast ? 'contrast-125' : ''} ${status.settings.accessibility.largeText ? 'text-lg' : ''}`}>
      <aside className="w-64 border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 flex flex-col z-20 transition-colors duration-300">
        <div className="p-6 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded bg-slate-50 dark:bg-slate-950 flex items-center justify-center border border-slate-200 dark:border-cyan-500/20 overflow-hidden shadow-sm dark:shadow-[0_0_20px_rgba(34,211,238,0.15)] group transition-all hover:border-cyan-500/40">
              <img 
                src="/images/ui/chaldea-logo.webp" 
                alt="Chaldea Symbol" 
                className="w-full h-full object-contain scale-110 drop-shadow-sm dark:drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]"
              />
            </div>
            <div>
              <h1 className="text-sm font-black tracking-[0.2em] text-slate-800 dark:text-slate-100 uppercase">Chaldea</h1>
              <p className="text-[8px] text-slate-400 dark:text-slate-500 uppercase tracking-widest font-mono">Sec. Org // Arct. Lab</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4 overflow-y-auto custom-scrollbar space-y-6">
          {onReturnToPortal && (
            <div className="px-3 mb-4">
              <button
                onClick={() => {
                  soundService.playTransition();
                  // Clear department when going back to portal
                  if (status.userRole === 'staff') {
                    setActiveDepartment(null);
                  }
                  onReturnToPortal();
                }}
                className="w-full flex items-center justify-between px-3 py-2 rounded text-[10px] font-bold tracking-widest uppercase border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
              >
                <span>Staff Hub Portal</span>
                <span className="opacity-50">🌍</span>
              </button>
            </div>
          )}

          {status.userRole === 'staff' && status.activeDepartment && (
            <div className="px-3 mb-4">
              <div className="p-3 rounded bg-cyan-500/10 border border-cyan-500/30">
                <div className="text-[8px] text-slate-500 dark:text-slate-600 uppercase tracking-wider mb-1">Active Department</div>
                <div className="text-[11px] text-cyan-400 uppercase tracking-wide font-bold">{status.activeDepartment}</div>
                <button
                  onClick={() => {
                    soundService.playClick();
                    // Only clear the department, don't go back to portal
                    // This will show the Department Hub
                    setActiveDepartment(null);
                  }}
                  className="text-[8px] text-slate-400 hover:text-cyan-400 uppercase tracking-wider mt-2 transition-colors"
                >
                  ← Change Department
                </button>
              </div>
            </div>
          )}

          {navConfig.operations.length > 0 && (
            <div>
              <div className="text-[9px] text-slate-400 dark:text-slate-600 font-mono px-6 mb-2 uppercase tracking-[0.2em] font-bold">Operations</div>
              {navConfig.operations.map((item) => (
                <NavItem key={item.route} to={item.route} icon={item.icon} label={item.label} />
              ))}
            </div>
          )}

          {navConfig.communications.length > 0 && (
            <div>
              <div className="text-[9px] text-slate-400 dark:text-slate-600 font-mono px-6 mb-2 uppercase tracking-[0.2em] font-bold">Communications</div>
              {navConfig.communications.map((item) => (
                <NavItem key={item.route} to={item.route} icon={item.icon} label={item.label} />
              ))}
            </div>
          )}

          {navConfig.departmental.length > 0 && (
            <div>
              <div className="text-[9px] text-slate-400 dark:text-slate-600 font-mono px-6 mb-2 uppercase tracking-[0.2em] font-bold">Departmental</div>
              {navConfig.departmental.map((item) => (
                <NavItem key={item.route} to={item.route} icon={item.icon} label={item.label} />
              ))}
            </div>
          )}
        </nav>

        <button 
          onClick={toggleProfile}
          onMouseEnter={() => soundService.playClick()}
          className="p-5 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all text-left group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-0.5 overflow-hidden group-hover:border-cyan-500 transition-colors relative shadow-sm">
              <img 
                src={currentAvatar} 
                alt="Profile" 
                className={`w-full h-full object-cover transition-all ${status.userRole === 'master' ? 'object-top scale-150 translate-y-1' : 'object-center p-1'}`} 
              />
            </div>
            <div className="min-w-0">
              <p className="text-[10px] font-bold text-slate-800 dark:text-slate-200 truncate uppercase tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">{displayShortName}</p>
              <p className="text-[8px] text-blue-600 dark:text-blue-500 font-mono">{activeProfile.id}</p>
            </div>
          </div>
          <div className="space-y-1.5">
            <div className="flex justify-between text-[8px] font-mono text-slate-500 dark:text-slate-600 uppercase">
              <span>Sync Index</span>
              <span className="text-blue-600 dark:text-blue-500">99.82%</span>
            </div>
            <div className="h-0.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 w-[99.82%]"></div>
            </div>
          </div>
        </button>
      </aside>

      <main className="flex-1 flex flex-col relative bg-slate-50 dark:bg-slate-950 overflow-hidden transition-colors duration-300">
        <header className="h-14 border-b border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 flex items-center justify-between px-8 z-10 transition-colors duration-300 shadow-sm dark:shadow-none">
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-[8px] text-slate-500 dark:text-slate-600 font-mono uppercase tracking-widest">Condition</span>
              <div className="flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full ${status.facility === 'NOMINAL' ? 'bg-emerald-500 shadow-sm dark:shadow-[0_0_8px_#10b981]' : 'bg-rose-500'}`}></div>
                <span className="text-[10px] font-bold text-slate-700 dark:text-slate-400 uppercase">{status.facility}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right mr-4">
                <p className="text-[8px] text-slate-500 dark:text-slate-600 font-mono uppercase tracking-widest">Human Order Status</p>
                <p className={`text-[10px] font-bold uppercase ${status.humanOrder.includes('NOMINAL') ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {status.humanOrder}
                </p>
             </div>
             <div className="flex gap-2">
                <button 
                  onClick={toggleTheme} 
                  title={`Switch to ${status.settings.theme === 'dark' ? 'Light' : 'Dark'} Mode`}
                  className="w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-900 rounded transition-colors text-slate-600 dark:text-slate-400"
                >
                  {status.settings.theme === 'dark' ? '☀️' : '🌙'}
                </button>
                <button 
                  onClick={toggleSettings} 
                  className={`w-8 h-8 flex items-center justify-center hover:bg-slate-100 dark:hover:bg-slate-900 rounded transition-colors ${isSettingsOpen ? 'text-blue-600 dark:text-blue-500 bg-slate-100 dark:bg-slate-900' : 'text-slate-600 dark:text-slate-400'}`}
                >
                  ⚙
                </button>
             </div>
          </div>
        </header>

        <div className="flex-1 flex flex-col min-h-0 overflow-y-auto relative z-0 custom-scrollbar">
          {children}
        </div>

        {isProfileOpen && <ProfileOverlay onClose={toggleProfile} />}
        <SettingsDrawer isOpen={isSettingsOpen} onToggle={toggleSettings} />
      </main>
    </div>
  );
};

export default Layout;