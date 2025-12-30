// File: pages/chaldexnet/utils/makeTimestamp.ts

export const makeTimestamp = (): string => {
  return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
};