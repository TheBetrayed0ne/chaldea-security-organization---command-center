/**
 * Department ID to display label mapping
 * Used for showing department names in the UI
 */
export const DEPARTMENT_LABELS: Record<string, string> = {
  operations: 'Operations Division',
  medical: 'Medical Division',
  logistics: 'Logistics Division',
  communications: 'Communications Division'
};

/**
 * Get the formatted designation for a staff member based on their active department
 */
export function getStaffDesignation(departmentId: string | null, staffMemberName: string | null): string {
  if (!departmentId) {
    return 'Facility Support // Unassigned';
  }

  const divisionLabel = DEPARTMENT_LABELS[departmentId] || 'Unknown Division';
  return `Facility Support // ${divisionLabel}`;
}
