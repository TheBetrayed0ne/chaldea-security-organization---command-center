import { UserRole } from '../../context/StatusContext.tsx';

export interface LayoutProps {
  children: React.ReactNode;
  onReturnToPortal?: () => void;
  onChangeDepartment?: () => void;
}

export interface ProfileStatProps {
  label: string;
  value: string;
  color?: string;
}

export interface HistoryEventProps {
  year: string;
  event: string;
  status: string;
}

export interface NavItemProps {
  to: string;
  icon: string | React.ReactNode;
  label: string;
}

export interface SettingToggleProps {
  label: string;
  active: boolean;
  onClick: () => void;
}