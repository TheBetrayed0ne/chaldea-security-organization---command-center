// File: pages/staff-portal/utils/buildAtmosphere.ts
import { Atmosphere } from '../types.ts';

export const buildAtmosphere = (currentTime: Date, dayNightSync: boolean): Atmosphere => {
  if (!dayNightSync) {
    return {
      landFilter: 'brightness(1.1) saturate(1.4) contrast(1.2)',
      cloudOpacity: 0.4,
      sunGradient: 'radial-gradient(circle at 50% 50%, transparent 60%, rgba(0,0,0,0.2) 100%)',
      glowColor: 'rgba(34, 211, 238, 0.5)',
      label: 'SURVEILLANCE: FULL_ALBEDO'
    };
  }

  const hour = currentTime.getHours();
  const dayProgress = Math.cos(((hour - 12) / 12) * Math.PI);
  const sunX = ((hour + 6) % 24) / 24 * 100;

  const brightness = 0.9 + (dayProgress * 0.3);
  const saturation = 1.0 + (dayProgress * 0.5);
  
  return {
    landFilter: `brightness(${brightness}) saturate(${saturation}) contrast(1.1)`,
    cloudOpacity: 0.3 + (dayProgress * 0.2),
    sunGradient: `radial-gradient(circle at ${sunX}% 50%, rgba(255,255,255,0.15) 0%, transparent 40%, rgba(0,0,0,0.6) 80%)`,
    glowColor: dayProgress > 0 ? 'rgba(34, 211, 238, 0.4)' : 'rgba(59, 130, 246, 0.2)',
    label: dayProgress > 0 ? 'STATUS: TERRESTRIAL_DAY' : 'STATUS: SPECTRAL_NIGHT'
  };
};
