
import React, { useState, useMemo } from 'react';
import { useGlobalStatus } from '../../../context/StatusContext.tsx';
import { soundService } from '../../../services/soundService.ts';
import { PROFILE_DATA } from '../constants/profileData.ts';
import { MASTER_SPRITES } from '../constants/masterSprites.ts';
import { ProfileStat } from '../components/ProfileStat.tsx';
import { HistoryEvent } from '../components/HistoryEvent.tsx';
import { getStaffDesignation } from '../../department-hub/config/departmentLabels.ts';

interface ProfileOverlayProps {
  onClose: () => void;
}

export const ProfileOverlay: React.FC<ProfileOverlayProps> = ({ onClose }) => {
  const { status, updateSettings, setCustomNameForDepartment } = useGlobalStatus();
  const [isHoveringSwap, setIsHoveringSwap] = useState(false);
  const [isEditingName, setIsEditingName] = useState(false);
  const [editedName, setEditedName] = useState('');

  const toggleGender = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    
    if (status.userRole !== 'master') {
      soundService.playError();
      return;
    }

    if (!isHoveringSwap) {
      soundService.playError();
      return;
    }

    soundService.playSelect();
    updateSettings({ 
      masterGender: status.settings.masterGender === 'male' ? 'female' : 'male' 
    });
  };

  const activeProfile = PROFILE_DATA[status.userRole || 'staff'];
  const currentAvatar = (status.userRole === 'master')
    ? (MASTER_SPRITES as any)[status.settings.masterGender]
    : activeProfile.avatar;

  // Compute designation and name dynamically for staff
  const designation = useMemo(() => {
    if (status.userRole === 'staff') {
      return getStaffDesignation(status.activeDepartment, status.staff.memberName);
    }
    return activeProfile.designation;
  }, [status.userRole, status.activeDepartment, status.staff.memberName, activeProfile.designation]);

  const displayName = useMemo(() => {
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
    return activeProfile.name;
  }, [status.userRole, status.activeDepartment, status.staff.customNames, status.staff.memberName, activeProfile.name]);

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

  const handleStartEditName = () => {
    if (status.userRole !== 'staff' || !status.activeDepartment) {
      soundService.playError();
      return;
    }
    soundService.playClick();
    setEditedName(displayName);
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    if (!status.activeDepartment || !editedName.trim()) {
      soundService.playError();
      return;
    }
    soundService.playSelect();
    setCustomNameForDepartment(status.activeDepartment, editedName.trim());
    setIsEditingName(false);
  };

  const handleCancelEditName = () => {
    soundService.playClick();
    setIsEditingName(false);
    setEditedName('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-300 p-8">
      <div className="w-full max-w-4xl bg-slate-900 border border-cyan-500/30 rounded-xl shadow-[0_0_100px_rgba(6,182,212,0.1)] overflow-hidden flex flex-col relative">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
        
        <header className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-950/40">
          <div className="flex items-center gap-6">
            <div className="relative group/portrait">
              <button 
                onClick={toggleGender}
                title={status.userRole === 'master' ? (isHoveringSwap ? "Click to swap Spiritron Signature" : "Hover 'SWAP SIGNATURE' to enable toggle") : "Identity Locked"}
                className={`w-24 h-24 rounded bg-slate-800 border-2 transition-all overflow-hidden shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center ${status.userRole === 'master' && isHoveringSwap ? 'border-cyan-400 cursor-pointer scale-105' : 'border-slate-700 cursor-not-allowed'}`}
              >
                <img 
                  src={currentAvatar} 
                  alt="Profile" 
                  className={`w-full h-full object-cover transition-transform duration-500 ${status.userRole === 'master' ? 'object-top scale-150 translate-y-3' : 'object-center p-3'} ${isHoveringSwap ? 'scale-175' : ''}`} 
                />
                {status.userRole === 'master' && isHoveringSwap && (
                  <div className="absolute inset-0 bg-cyan-500/20 flex items-center justify-center animate-pulse">
                     <span className="text-[10px] font-mono text-white font-bold bg-slate-900/90 px-2 py-1 rounded border border-cyan-400">READY</span>
                  </div>
                )}
              </button>
              {status.userRole === 'master' && !isHoveringSwap && (
                <div className="absolute -bottom-2 -right-2 bg-rose-500 text-white text-[7px] px-1 font-bold rounded border border-rose-900 animate-pulse">LOCKED</div>
              )}
              {status.userRole !== 'master' && (
                <div className="absolute -bottom-2 -right-2 bg-slate-600 text-white text-[7px] px-1 font-bold rounded border border-slate-800">FIXED</div>
              )}
            </div>
            <div>
              {isEditingName ? (
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSaveName();
                      if (e.key === 'Escape') handleCancelEditName();
                    }}
                    className="text-2xl font-black text-white uppercase tracking-tighter bg-slate-800 border border-cyan-500 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    placeholder="Enter name"
                    autoFocus
                  />
                  <button
                    onClick={handleSaveName}
                    className="px-3 py-1 bg-cyan-600 hover:bg-cyan-700 text-white text-[10px] font-bold uppercase rounded transition-all"
                  >
                    ✓
                  </button>
                  <button
                    onClick={handleCancelEditName}
                    className="px-3 py-1 bg-slate-700 hover:bg-slate-600 text-white text-[10px] font-bold uppercase rounded transition-all"
                  >
                    ✕
                  </button>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl font-black text-white uppercase tracking-tighter">{displayName}</h2>
                  {status.userRole === 'staff' && status.activeDepartment && (
                    <button
                      onClick={handleStartEditName}
                      onMouseEnter={() => soundService.playClick()}
                      className="w-7 h-7 flex items-center justify-center rounded bg-slate-800 hover:bg-cyan-900/40 text-slate-500 hover:text-cyan-400 border border-slate-700 hover:border-cyan-500/50 transition-all text-xs"
                      title="Edit name for this department"
                    >
                      ✎
                    </button>
                  )}
                </div>
              )}
              <p className="text-cyan-500 font-mono text-[10px] uppercase tracking-[0.4em] font-bold mt-1">Designation: {designation}</p>
              <div className="flex gap-4 mt-3">
                <span className="text-[10px] px-2 py-0.5 bg-blue-900/30 text-blue-400 border border-blue-800 rounded font-mono uppercase">{activeProfile.clearance} Clearance</span>
                <span className="text-[10px] px-2 py-0.5 bg-emerald-900/30 text-emerald-400 border border-emerald-800 rounded font-mono uppercase">Sync: {activeProfile.syncStatus}</span>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-slate-800 hover:bg-rose-900/40 text-slate-500 hover:text-rose-500 border border-slate-700 hover:border-rose-500/50 transition-all flex items-center justify-center text-xl"
          >
            ✕
          </button>
        </header>

        <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 overflow-y-auto custom-scrollbar">
          <div className="space-y-6">
            <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">Biometric Logs</h3>
            <div className="grid grid-cols-1 gap-2">
              {activeProfile.stats.map((s: any, idx: number) => (
                <ProfileStat key={idx} label={s.label} value={s.value} color={s.color} />
              ))}
            </div>

            <div className="bg-slate-950/60 p-4 rounded border border-slate-800">
              <p className="text-[9px] font-mono text-cyan-600 uppercase mb-2">Psychological Profile</p>
              <p className="text-[11px] text-slate-400 leading-relaxed italic">
                {activeProfile.bio}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">Operational History</h3>
            <div className="space-y-3">
              {status.userRole === 'master' ? (
                <>
                  <HistoryEvent year="2015" event="First Rayshift: Fuyuki" status="RESOLVED" />
                  <HistoryEvent year="2016" event="Grand Temple of Time" status="RESOLVED" />
                  <HistoryEvent year="2017" event="Epic of Remnant Protocols" status="COMPLETED" />
                  <HistoryEvent year="2018-2024" event="Cosmos in the Lostbelt" status="ACTIVE" />
                </>
              ) : (
                <>
                  <HistoryEvent year="2022" event="Initial Recruitment" status="RESOLVED" />
                  <HistoryEvent year="2023" event="Sector Training (SOC-B)" status="COMPLETED" />
                  <HistoryEvent year="2024" event="Active Deployment" status="ACTIVE" />
                </>
              )}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <p className="text-[8px] font-mono text-slate-600 uppercase">Records Archived: {status.userRole === 'master' ? '14' : '02'}</p>
              <p className="text-[8px] font-mono text-slate-600 uppercase">Incidents Logged: {status.userRole === 'master' ? '07' : '01'}</p>
              <p className="text-[8px] font-mono text-slate-600 uppercase">Memory Retention: █ █ █ █ █</p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest font-black">{status.userRole === 'master' ? 'Master Privileges' : 'Personnel Benefits'}</h3>
            <div className="space-y-4">
              {activeProfile.privileges.map((p: any, idx: number) => (
                <div key={idx} className="p-3 bg-slate-950 border border-slate-800 rounded">
                  <p className="text-[10px] font-bold text-cyan-400 uppercase mb-1">{p.title}</p>
                  <p className="text-[10px] text-slate-500">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <footer className="p-6 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
          <p className="text-[9px] font-mono text-slate-700 uppercase italic">Verification: TRIS_CHALDEAS_AUTH_SUCCESS // SESSION_LOGGED</p>
          <div className="flex gap-4">
             {status.userRole === 'master' && (
               <button 
                onMouseEnter={() => { soundService.playClick(); setIsHoveringSwap(true); }}
                onMouseLeave={() => setIsHoveringSwap(false)}
                onClick={toggleGender}
                className={`px-6 py-2 border transition-all text-[10px] font-bold uppercase rounded tracking-[0.1em] ${isHoveringSwap ? 'bg-cyan-600 text-slate-950 border-cyan-400' : 'bg-transparent border-slate-800 text-slate-500'}`}
               >
                SWAP SIGNATURE
               </button>
             )}
             <button 
              onClick={onClose}
              className="px-8 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-[10px] font-bold uppercase rounded border border-slate-700 tracking-[0.2em] transition-all"
            >
              TERMINATE PROFILE LINK
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
