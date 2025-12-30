import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type UserRole = 'master' | 'staff' | 'servant';

export interface SystemAlert {
  id: string;
  type: 'info' | 'warn' | 'err' | 'critical';
  category: string;
  message: string;
  timestamp: number;
}

export interface GlobalStatus {
  userRole: UserRole | null;
  sessionStartTime: number | null;
  facility: 'NOMINAL' | 'CAUTION' | 'CRITICAL';
  humanOrder: 'ALPHA_NOMINAL' | 'STABLE_ALPHA' | 'BETA_DEGRADING' | 'CRITICAL';
  manaLoad: number;
  containment: 'GREEN' | 'YELLOW' | 'RED';
  externalTemp: number;
  moraleIndex: number;
  alerts: SystemAlert[];
  emotionalClimate: {
    calm: number;
    existential: number;
    hungry: number;
  };
  // Staff member identity
  staff: {
    memberId: string | null;
    memberName: string | null;
    permissions: string[];
    // Department-specific custom names (key: departmentId, value: custom name)
    customNames: Record<string, string>;
  };
  activeDepartment: string | null;
  // UI Configuration Settings
  settings: {
    viewMode: 'basic' | 'standard' | 'analyst';
    chartRange: '6h' | '24h' | '72h' | '1h';
    chartDetail: 'smoothed' | 'normal' | 'raw';
    alertDensity: 'critical' | 'ops' | 'all';
    visibleFeedTags: string[];
    operationalFocus: 'field' | 'facility' | 'support';
    memeticFilter: 'off' | 'standard' | 'strict';
    escortContext: 'none' | 'mash' | 'warden' | 'foreigner';
    dayNightSync: boolean;
    theme: 'light' | 'dark';
    masterGender: 'male' | 'female';
    audio: {
      enabled: boolean;
      volume: number; // 0 to 1
    };
    accessibility: {
      highContrast: boolean;
      reduceMotion: boolean;
      largeText: boolean;
    };
  };
}

interface StatusContextType {
  status: GlobalStatus;
  updateStatus: (updates: Partial<GlobalStatus>) => void;
  updateSettings: (updates: Partial<GlobalStatus['settings']>) => void;
  addAlert: (alert: Omit<SystemAlert, 'id' | 'timestamp'>) => void;
  clearAlerts: () => void;
  resetToDefaults: () => void;
  setUserRole: (role: UserRole) => void;
  setStaffMember: (memberId: string, memberName: string, permissions: string[]) => void;
  setActiveDepartment: (department: string | null) => void;
  setCustomNameForDepartment: (departmentId: string, customName: string) => void;
}

const DEFAULT_SETTINGS: GlobalStatus['settings'] = {
  viewMode: 'standard',
  chartRange: '24h',
  chartDetail: 'normal',
  alertDensity: 'ops',
  visibleFeedTags: ['WILD', 'FROST', 'SYS', 'WARN', 'INFO'],
  operationalFocus: 'facility',
  memeticFilter: 'standard',
  escortContext: 'none',
  dayNightSync: true,
  theme: 'dark',
  masterGender: 'female', // Defaulted to female per request
  audio: {
    enabled: true,
    volume: 0.5,
  },
  accessibility: {
    highContrast: false,
    reduceMotion: false,
    largeText: false,
  },
};

const StatusContext = createContext<StatusContextType | undefined>(undefined);

export const StatusProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [status, setStatus] = useState<GlobalStatus>(() => {
    // Load persisted data from localStorage
    const saved = localStorage.getItem('chaldea-session');
    const savedData = saved ? JSON.parse(saved) : {};

    return {
      userRole: null,
      sessionStartTime: null,
      facility: 'NOMINAL',
      humanOrder: 'ALPHA_NOMINAL',
      manaLoad: 74.2,
      containment: 'GREEN',
      externalTemp: -42,
      moraleIndex: 74,
      alerts: [],
      emotionalClimate: {
        calm: 71,
        existential: 9,
        hungry: 20
      },
      staff: {
        memberId: savedData.staff?.memberId || null,
        memberName: savedData.staff?.memberName || null,
        permissions: savedData.staff?.permissions || [],
        customNames: savedData.staff?.customNames || {},
      },
      activeDepartment: savedData.activeDepartment || null,
      settings: DEFAULT_SETTINGS,
    };
  });

  // Simulation of facility flux
  useEffect(() => {
    const interval = setInterval(() => {
      setStatus(prev => ({
        ...prev,
        manaLoad: Math.min(100, Math.max(65, prev.manaLoad + (Math.random() - 0.5) * 0.4)),
        externalTemp: Math.min(-38, Math.max(-45, prev.externalTemp + (Math.random() - 0.5) * 0.1)),
        moraleIndex: Math.min(100, Math.max(60, prev.moraleIndex + (Math.random() - 0.5) * 0.2)),
        emotionalClimate: {
          calm: Math.min(100, Math.max(50, prev.emotionalClimate.calm + (Math.random() - 0.5))),
          existential: Math.min(100, Math.max(0, prev.emotionalClimate.existential + (Math.random() - 0.5))),
          hungry: Math.min(100, Math.max(0, prev.emotionalClimate.hungry + (Math.random() - 0.5))),
        }
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const updateStatus = useCallback((updates: Partial<GlobalStatus>) => {
    setStatus(prev => ({ ...prev, ...updates }));
  }, []);

  const setUserRole = useCallback((role: UserRole) => {
    setStatus(prev => ({ 
      ...prev, 
      userRole: role,
      sessionStartTime: Date.now()
    }));
  }, []);

  const updateSettings = useCallback((updates: Partial<GlobalStatus['settings']>) => {
    setStatus(prev => ({
      ...prev,
      settings: { ...prev.settings, ...updates }
    }));
  }, []);

  const addAlert = useCallback((alert: Omit<SystemAlert, 'id' | 'timestamp'>) => {
    setStatus(prev => ({
      ...prev,
      alerts: [
        {
          ...alert,
          id: `ALRT-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
          timestamp: Date.now()
        },
        ...prev.alerts
      ].slice(0, 50) // Keep last 50 alerts
    }));
  }, []);

  const clearAlerts = useCallback(() => {
    setStatus(prev => ({ ...prev, alerts: [] }));
  }, []);

  const resetToDefaults = useCallback(() => {
    setStatus(prev => ({ ...prev, settings: DEFAULT_SETTINGS }));
  }, []);

  const setStaffMember = useCallback((memberId: string, memberName: string, permissions: string[]) => {
    setStatus(prev => ({
      ...prev,
      staff: {
        ...prev.staff,
        memberId,
        memberName,
        permissions
      }
    }));
  }, []);

  const setActiveDepartment = useCallback((department: string | null) => {
    setStatus(prev => ({
      ...prev,
      activeDepartment: department
    }));
  }, []);

  const setCustomNameForDepartment = useCallback((departmentId: string, customName: string) => {
    setStatus(prev => ({
      ...prev,
      staff: {
        ...prev.staff,
        customNames: {
          ...prev.staff.customNames,
          [departmentId]: customName
        }
      }
    }));
  }, []);

  // Persist staff and department to localStorage
  useEffect(() => {
    localStorage.setItem('chaldea-session', JSON.stringify({
      staff: status.staff,
      activeDepartment: status.activeDepartment
    }));
  }, [status.staff, status.activeDepartment]);

  return (
    <StatusContext.Provider value={{ status, updateStatus, updateSettings, addAlert, clearAlerts, resetToDefaults, setUserRole, setStaffMember, setActiveDepartment, setCustomNameForDepartment }}>
      {children}
    </StatusContext.Provider>
  );
};

export const useGlobalStatus = () => {
  const context = useContext(StatusContext);
  if (!context) throw new Error('useGlobalStatus must be used within StatusProvider');
  return context;
};