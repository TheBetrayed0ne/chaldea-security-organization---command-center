import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/index.ts';
import Dashboard from './components/dashboard/Dashboard.tsx';
import SaintGraph from './components/SaintGraph/SaintGraph.tsx';
import Rayshift from './components/Rayshift.tsx';
import Singularities from './components/Singularities.tsx';
import ChaldExNet from './components/ChaldExNet.tsx';
import Logistics from './components/Logistics.tsx';
import PersonnelRecords from './components/PersonnelRecords.tsx';
import WelcomeScreen from './components/welcome/index.ts';
import StaffPortal from './components/staff-portal/StaffPortal.tsx';
import DepartmentHub from './components/department-hub/DepartmentHub.tsx';
import HRDepartment from './components/HRDepartment.tsx';
import Anomalies from './components/Anomalies.tsx';
import Hearthspace from './components/Hearthspace.tsx';
import ShebaLens from './components/ShebaLens.tsx';
import ReactorControl from './components/ReactorControl/index.ts';
import { StatusProvider, useGlobalStatus, UserRole } from './context/StatusContext.tsx';
import { soundService } from './services/soundService.ts';

const TransitionLoadingScreen = () => (
  <div className="fixed inset-0 z-[200] bg-[#020b1f] flex flex-col items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#0ea5e922_0%,transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:30px_30px]"></div>
    </div>
    
    <div className="relative flex flex-col items-center">
      <div className="absolute inset-[-40px] bg-cyan-500/10 blur-[50px] rounded-full animate-pulse"></div>
      
      <img 
        src="https://ih1.redbubble.net/image.1540769570.5309/flat,750x,075,f-pad,750x1000,f8f8f8.u2.webp" 
        alt="Chaldea Logo" 
        className="w-72 h-72 object-contain animate-in zoom-in-95 duration-[2000ms] relative z-10 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]"
      />
      
      <div className="mt-16 flex flex-col items-center space-y-6 relative z-10">
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-duration:0.6s]"></div>
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.15s]"></div>
          <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce [animation-duration:0.6s] [animation-delay:0.3s]"></div>
        </div>
        
        <div className="text-center space-y-2">
          <p className="text-[11px] font-mono text-cyan-400 uppercase tracking-[0.8em] font-black animate-pulse">
            Establishing Spiritron Link
          </p>
          <p className="text-[8px] font-mono text-cyan-700 uppercase tracking-[0.4em] font-bold">
            Synchronizing with Satellite CHALDEAS
          </p>
        </div>

        <div className="w-64 h-[1px] bg-slate-800/50 relative overflow-hidden rounded-full">
          <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-cyan-400 to-transparent w-full animate-[shimmer_2s_infinite]"></div>
        </div>
      </div>
    </div>
    
    <style>{`
      @keyframes shimmer {
        0% { transform: translateX(-100%); }
        100% { transform: translateX(100%); }
      }
    `}</style>
  </div>
);

const AppContent: React.FC = () => {
  const { status, setUserRole, setStaffMember, setActiveDepartment, setCommandCoreMember } = useGlobalStatus();
  const [hasEnteredCommand, setHasEnteredCommand] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showDepartmentHub, setShowDepartmentHub] = useState(false);
  const [chefIndex] = useState(() => Math.floor(Math.random() * 5));

  const handleLogin = (role: UserRole, staffMember?: { id: string; name: string; permissions: string[] }) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setUserRole(role);

      // Clear any previous role data
      if (role === 'master') {
        // Clear staff/department data when logging in as master
        setActiveDepartment(null);
        setStaffMember(null as any, null as any, []); // Clear staff member data
        if (staffMember) {
          setCommandCoreMember(staffMember.id, staffMember.name, staffMember.permissions);
        }
      } else if (role === 'staff') {
        // Clear any department when switching to staff
        setActiveDepartment(null);
        // Set staff member when logging in as staff
        if (staffMember) {
          setStaffMember(staffMember.id, staffMember.name, staffMember.permissions);
        }
      } else {
        // For servant role, clear both staff and command core data
        setActiveDepartment(null);
        setStaffMember(null as any, null as any, []); // Clear staff member data
      }

      setIsTransitioning(false);
      soundService.playTransition();
    }, 2800);
  };

  const handleDepartmentSelect = (departmentId: string) => {
    setActiveDepartment(departmentId);
    setShowDepartmentHub(false);
    setHasEnteredCommand(true);
  };

  if (isTransitioning) return <TransitionLoadingScreen />;
  if (!status.userRole) return <WelcomeScreen onLogin={handleLogin} />;

  // Show Staff Portal first (with the globe) - for ALL users
  if (!hasEnteredCommand && !showDepartmentHub) {
    return <StaffPortal chefIndex={chefIndex} onEnterCommand={() => {
      // When entering command from Staff Portal
      if (status.userRole === 'staff' && !status.activeDepartment) {
        // Staff user with no department - show Department Hub
        setShowDepartmentHub(true);
      } else {
        // Non-staff or staff with department - go straight to app
        setHasEnteredCommand(true);
      }
    }} />;
  }

  // ONLY show Department Hub when explicitly requested via the flag
  if (showDepartmentHub && status.userRole === 'staff') {
    return <DepartmentHub onSelectDepartment={handleDepartmentSelect} />;
  }

  // Main application with Layout and Routes
  return (
    <HashRouter>
      <Layout
        onReturnToPortal={() => {
          setHasEnteredCommand(false);
          setShowDepartmentHub(false);
        }}
        onChangeDepartment={() => {
          setActiveDepartment(null);
          setShowDepartmentHub(true);
          setHasEnteredCommand(false);
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/saint-graph" element={<SaintGraph />} />
          <Route path="/rayshift" element={<Rayshift />} />
          <Route path="/chaldexnet" element={<ChaldExNet />} />
          <Route path="/logistics" element={<Logistics />} />
          <Route path="/medical" element={<PersonnelRecords />} />
          <Route path="/hr" element={<HRDepartment />} />
          <Route path="/singularities" element={<Singularities />} />
          <Route path="/anomalies" element={<Anomalies />} />
          <Route path="/hearthspace" element={<Hearthspace />} />
          <Route path="/sheba" element={<ShebaLens />} />
          <Route path="/reactor" element={<ReactorControl />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

const App: React.FC = () => {
  return (
    <StatusProvider>
      <style>{`
        /* Global custom scrollbar */
        *::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        *::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-left: 1px solid rgba(6, 182, 212, 0.2);
        }
        *::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.3);
          border-radius: 4px;
        }
        *::-webkit-scrollbar-thumb:hover {
          background: rgba(6, 182, 212, 0.5);
        }
        * {
          scrollbar-width: thin;
          scrollbar-color: rgba(6, 182, 212, 0.3) rgba(15, 23, 42, 0.5);
        }
      `}</style>
      <AppContent />
    </StatusProvider>
  );
};

export default App;