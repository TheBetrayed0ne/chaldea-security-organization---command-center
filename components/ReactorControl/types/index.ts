export type ReactorStatus = 'NOMINAL' | 'DEGRADED' | 'SCRAM';
export type AccessLevel = 'VIEW ONLY' | 'ROUTINE CONTROL' | 'LOCAL MAINT' | 'CRITICAL ACTIONS LOCKED';
export type AutonomyState = 'LEASHED' | 'WALKING' | 'CAGED';

export interface LoadCategory {
  id: string;
  name: string;
  currentDraw: number;
  maxDraw: number;
  priority: 'CRITICAL' | 'HIGH' | 'NORMAL' | 'LOW';
  sheddable: boolean;
}

export interface Alert {
  id: string;
  severity: 'RED' | 'AMBER' | 'CYAN';
  timestamp: string;
  label: string;
  details: string;
  acknowledgedBy?: string;
  autoAction?: string;
}

export interface ReactorData {
  output: number;
  reserveTime: string;
  stabilityIndex: number;
  containmentIntegrity: number;
}
