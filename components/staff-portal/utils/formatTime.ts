// File: pages/staff-portal/utils/formatTime.ts
export const formatTime = (date: Date, isMilitaryTime: boolean): string => {
  return date.toLocaleTimeString([], { 
    hour12: !isMilitaryTime, 
    hour: '2-digit', 
    minute: '2-digit', 
    second: '2-digit' 
  });
};
