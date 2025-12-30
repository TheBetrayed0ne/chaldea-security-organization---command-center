import React, { useState, useEffect } from 'react';
import { UserRole } from '../../context/StatusContext.tsx';
import { soundService } from '../../services/soundService.ts';
import { INITIALIZATION_LOGS } from './config/logLines.ts';
import { getRoleTheme } from './theme/getRoleTheme.ts';
import { AuthScreen } from './screens/AuthScreen.tsx';
import { RoleSelectScreen } from './screens/RoleSelectScreen.tsx';
import { StaffMemberSelectScreen } from './screens/StaffMemberSelectScreen.tsx';
import { CommandCoreSelectScreen } from './screens/CommandCoreSelectScreen.tsx';
import { useGlobalStatus } from '../../context/StatusContext.tsx';

interface WelcomeScreenProps {
  onLogin: (role: UserRole, staffMember?: { id: string; name: string; permissions: string[] }) => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onLogin }) => {
  const { status } = useGlobalStatus();
  const [statusLogs, setStatusLogs] = useState<string[]>([]);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [showRoleSelect, setShowRoleSelect] = useState(false);
  const [showStaffMemberSelect, setShowStaffMemberSelect] = useState(false);
  const [showCommandCoreSelect, setShowCommandCoreSelect] = useState(false);
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [selectedStaffMember, setSelectedStaffMember] = useState<string | null>(null);
  const [selectedCommandCoreMember, setSelectedCommandCoreMember] = useState<string | null>(null);

  // Theme derived from current role (or null for default)
  const theme = getRoleTheme(selectedRole);

  useEffect(() => {
    let i = 0;
    const interval = window.setInterval(() => {
      if (i < INITIALIZATION_LOGS.length) {
        setStatusLogs(prev => [...prev, INITIALIZATION_LOGS[i]]);
        i++;
        if (i < INITIALIZATION_LOGS.length) soundService.playClick();
      } else {
        window.clearInterval(interval);
      }
    }, 600);
    return () => window.clearInterval(interval);
  }, []);

  const handleInitiateLink = () => {
    setIsAuthenticating(true);
    soundService.playStartup();
    
    setTimeout(() => {
      setShowRoleSelect(true);
      setIsAuthenticating(false);
      soundService.playTransition();
    }, 1500);
  };

  const handleRoleSelection = (role: UserRole) => {
    setSelectedRole(role);
    soundService.playSelect();

    // If staff role, show staff member selection
    if (role === 'staff') {
      setTimeout(() => {
        setShowStaffMemberSelect(true);
        soundService.playTransition();
      }, 1000);
    } else if (role === 'master') {
      // If master role, show command core selection
      setTimeout(() => {
        setShowCommandCoreSelect(true);
        soundService.playTransition();
      }, 1000);
    } else {
      // For servant, proceed directly to login
      setTimeout(() => {
        onLogin(role);
      }, 1000);
    }
  };

  const handleStaffMemberSelection = (memberId: string, memberName: string, permissions: string[]) => {
    setSelectedStaffMember(memberId);
    soundService.playSelect();

    // Finalizing Auth Sequence
    setTimeout(() => {
      onLogin('staff', { id: memberId, name: memberName, permissions });
    }, 1000);
  };

  const handleCommandCoreMemberSelection = (memberId: string, memberName: string, permissions: string[]) => {
    setSelectedCommandCoreMember(memberId);
    soundService.playSelect();

    // Finalizing Auth Sequence
    setTimeout(() => {
      onLogin('master', { id: memberId, name: memberName, permissions });
    }, 1000);
  };

  const handleBackToRoleSelect = () => {
    soundService.playClick();
    setShowCommandCoreSelect(false);
    setShowStaffMemberSelect(false);
    setSelectedRole(null);
    setSelectedCommandCoreMember(null);
    setSelectedStaffMember(null);
  };

  if (showCommandCoreSelect) {
    return (
      <CommandCoreSelectScreen
        onSelect={handleCommandCoreMemberSelection}
        onBack={handleBackToRoleSelect}
        selectedMember={selectedCommandCoreMember}
        theme={theme}
        masterGender={status.settings.masterGender}
      />
    );
  }

  if (showStaffMemberSelect) {
    return (
      <StaffMemberSelectScreen
        onSelect={handleStaffMemberSelection}
        onBack={handleBackToRoleSelect}
        selectedMember={selectedStaffMember}
        theme={theme}
      />
    );
  }

  if (showRoleSelect) {
    return (
      <RoleSelectScreen
        onSelect={handleRoleSelection}
        selectedRole={selectedRole}
        theme={theme}
      />
    );
  }

  return (
    <AuthScreen 
      statusLogs={statusLogs} 
      isAuthenticating={isAuthenticating} 
      onInitiate={handleInitiateLink}
      selectedRole={selectedRole}
      theme={theme}
    />
  );
};

export default WelcomeScreen;