export interface NavItemConfig {
  label: string;
  route: string;
  icon: string;
}

export interface DepartmentNavConfig {
  operations: NavItemConfig[];
  communications: NavItemConfig[];
  departmental: NavItemConfig[];
}

export type DepartmentNavMap = {
  [departmentId: string]: {
    [staffMemberId: string]: DepartmentNavConfig;
  };
};

// Department-specific navigation configuration
export const DEPARTMENT_NAV: DepartmentNavMap = {
  operations: {
    link: {
      operations: [
        { label: 'Command Core', route: '/', icon: '⌂' },
        { label: 'Sheba Lens', route: '/sheba', icon: '🔭' },
        { label: 'Rayshift Hub', route: '/rayshift', icon: '◬' },
        { label: 'Saint Graph', route: '/saint-graph', icon: '☍' },
        { label: 'Anomalies', route: '/anomalies', icon: '▵' }
      ],
      communications: [
        { label: 'ChaldExNet', route: '/chaldexnet', icon: '▣' }
      ],
      departmental: [
        { label: 'Logistics', route: '/logistics', icon: '▤' },
        { label: 'Singularities', route: '/singularities', icon: '🌍' }
      ]
    }
  },
  medical: {
    link: {
      operations: [
        { label: 'Command Core', route: '/', icon: '⌂' },
        { label: 'Saint Graph', route: '/saint-graph', icon: '☍' }
      ],
      communications: [
        { label: 'ChaldExNet', route: '/chaldexnet', icon: '▣' },
        { label: 'Hearthspace', route: '/hearthspace', icon: '🏠' }
      ],
      departmental: [
        { label: 'Medical Records', route: '/medical', icon: '✚' },
        { label: 'HR Department', route: '/hr', icon: '👥' }
      ]
    }
  },
  logistics: {
    link: {
      operations: [
        { label: 'Command Core', route: '/', icon: '⌂' },
        { label: 'Sheba Lens', route: '/sheba', icon: '🔭' },
        { label: 'Anomalies', route: '/anomalies', icon: '▵' }
      ],
      communications: [
        { label: 'ChaldExNet', route: '/chaldexnet', icon: '▣' }
      ],
      departmental: [
        { label: 'Logistics', route: '/logistics', icon: '▤' },
        { label: 'Medical Records', route: '/medical', icon: '✚' },
        { label: 'Singularities', route: '/singularities', icon: '🌍' }
      ]
    }
  },
  communications: {
    link: {
      operations: [
        { label: 'Command Core', route: '/', icon: '⌂' },
        { label: 'Sheba Lens', route: '/sheba', icon: '🔭' }
      ],
      communications: [
        { label: 'ChaldExNet', route: '/chaldexnet', icon: '▣' },
        { label: 'Hearthspace', route: '/hearthspace', icon: '🏠' }
      ],
      departmental: [
        { label: 'HR Department', route: '/hr', icon: '👥' },
        { label: 'Singularities', route: '/singularities', icon: '🌍' }
      ]
    }
  }
};

// Default navigation for non-staff users (master/servant)
export const DEFAULT_NAV: DepartmentNavConfig = {
  operations: [
    { label: 'Command Core', route: '/', icon: '⌂' },
    { label: 'Sheba Lens', route: '/sheba', icon: '🔭' },
    { label: 'Rayshift Hub', route: '/rayshift', icon: '◬' },
    { label: 'Saint Graph', route: '/saint-graph', icon: '☍' },
    { label: 'Anomalies', route: '/anomalies', icon: '▵' }
  ],
  communications: [
    { label: 'ChaldExNet', route: '/chaldexnet', icon: '▣' },
    { label: 'Hearthspace', route: '/hearthspace', icon: '🏠' }
  ],
  departmental: [
    { label: 'Logistics', route: '/logistics', icon: '▤' },
    { label: 'Medical Records', route: '/medical', icon: '✚' },
    { label: 'HR Department', route: '/hr', icon: '👥' },
    { label: 'Singularities', route: '/singularities', icon: '🌍' }
  ]
};

/**
 * Get navigation config for a department and staff member
 */
export function getDepartmentNav(departmentId: string | null, staffMemberId: string | null): DepartmentNavConfig {
  if (!departmentId || !staffMemberId) {
    return DEFAULT_NAV;
  }

  const deptConfig = DEPARTMENT_NAV[departmentId];
  if (!deptConfig) {
    return DEFAULT_NAV;
  }

  const staffConfig = deptConfig[staffMemberId];
  if (!staffConfig) {
    return DEFAULT_NAV;
  }

  return staffConfig;
}
