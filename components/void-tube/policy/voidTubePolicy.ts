import type { UserRole } from '../../../context/StatusContext';
import type { VoidTubePolicy, VideoCategory } from '../types';

export const getVoidTubePolicy = (
  role: UserRole | null,
  staffMemberId: string | null
): VoidTubePolicy => {
  // Kyle gets special override access
  const isKyle = staffMemberId === 'kyle' || staffMemberId === 'kyle-winters';

  if (role === 'master') {
    return {
      canUploadVideos: false,
      canAccessContainment: true,
      canBypassWarnings: true,
      canViewLiveStreams: true,
      accessibleCategories: [
        'OPERATIONS',
        'COOKING',
        'TUTORIALS',
        'LIVESTREAMS',
        'CHAOS',
        'WHOLESOME',
        'ELDRITCH',
        'CONTAINMENT',
      ],
      maxCorruptionLevel: 100,
    };
  }

  if (role === 'staff') {
    // Kyle has special Cold Resistance A access
    if (isKyle) {
      return {
        canUploadVideos: true,
        canAccessContainment: true,
        canBypassWarnings: true,
        canViewLiveStreams: true,
        accessibleCategories: [
          'OPERATIONS',
          'COOKING',
          'TUTORIALS',
          'LIVESTREAMS',
          'CHAOS',
          'WHOLESOME',
          'ELDRITCH',
          'CONTAINMENT',
        ],
        maxCorruptionLevel: 100,
      };
    }

    // Regular staff
    return {
      canUploadVideos: true,
      canAccessContainment: false,
      canBypassWarnings: false,
      canViewLiveStreams: true,
      accessibleCategories: [
        'OPERATIONS',
        'COOKING',
        'TUTORIALS',
        'LIVESTREAMS',
        'CHAOS',
        'WHOLESOME',
        'ELDRITCH',
      ],
      maxCorruptionLevel: 50,
    };
  }

  if (role === 'servant') {
    return {
      canUploadVideos: true,
      canAccessContainment: false,
      canBypassWarnings: false,
      canViewLiveStreams: true,
      accessibleCategories: [
        'COOKING',
        'TUTORIALS',
        'LIVESTREAMS',
        'CHAOS',
        'WHOLESOME',
        'ELDRITCH',
      ],
      maxCorruptionLevel: 60,
    };
  }

  // Default policy (not logged in)
  return {
    canUploadVideos: false,
    canAccessContainment: false,
    canBypassWarnings: false,
    canViewLiveStreams: true,
    accessibleCategories: ['WHOLESOME', 'TUTORIALS'],
    maxCorruptionLevel: 10,
  };
};

// Check if a user can access a specific video
export const canAccessVideo = (
  policy: VoidTubePolicy,
  video: { category: VideoCategory; corruptionLevel?: number; requiresColdResistance?: boolean },
  isKyle: boolean
): { allowed: boolean; reason?: string } => {
  // Kyle can bypass Cold Resistance requirement
  if (video.requiresColdResistance && !isKyle) {
    return {
      allowed: false,
      reason: 'Requires Cold Resistance A or higher',
    };
  }

  // Check category access
  if (!policy.accessibleCategories.includes(video.category)) {
    return {
      allowed: false,
      reason: 'Category access restricted',
    };
  }

  // Check corruption level
  if (video.corruptionLevel && video.corruptionLevel > policy.maxCorruptionLevel) {
    return {
      allowed: false,
      reason: `Corruption level too high (${video.corruptionLevel}% > ${policy.maxCorruptionLevel}%)`,
    };
  }

  return { allowed: true };
};
