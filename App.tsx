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
  const { status, setUserRole, setStaffMember, setActiveDepartment } = useGlobalStatus();
  const [hasEnteredCommand, setHasEnteredCommand] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [chefIndex] = useState(() => Math.floor(Math.random() * 5));

  const handleLogin = (role: UserRole, staffMember?: { id: string; name: string; permissions: string[] }) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setUserRole(role);
      if (staffMember) {
        setStaffMember(staffMember.id, staffMember.name, staffMember.permissions);
      }
      setIsTransitioning(false);
      soundService.playTransition();
    }, 2800);
  };

  const handleDepartmentSelect = (departmentId: string) => {
    setActiveDepartment(departmentId);
    setHasEnteredCommand(true);
  };

  if (isTransitioning) return <TransitionLoadingScreen />;
  if (!status.userRole) return <WelcomeScreen onLogin={handleLogin} />;

  // Show Staff Portal first (with the globe)
  if (!hasEnteredCommand) {
    return <StaffPortal chefIndex={chefIndex} onEnterCommand={() => setHasEnteredCommand(true)} />;
  }

  // Staff flow: if staff member is selected but no department, show DepartmentHub
  if (status.userRole === 'staff' && status.staff.memberId && !status.activeDepartment) {
    return <DepartmentHub onSelectDepartment={handleDepartmentSelect} />;
  }

  // Main application with Layout and Routes
  return (
    <HashRouter>
      <Layout onReturnToPortal={() => setHasEnteredCommand(false)}>
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
        </Routes>
      </Layout>
    </HashRouter>
  );
};

const App: React.FC = () => {
  return (
    <StatusProvider>
      <AppContent />
    </StatusProvider>
  );
};

export default App;