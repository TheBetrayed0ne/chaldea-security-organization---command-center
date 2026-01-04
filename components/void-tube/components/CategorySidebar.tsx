import React, { useState, useEffect } from 'react';
import type { VideoCategory, Creator } from '../types';
import { getSubscriptions } from '../utils/subscriptions';
import { VOID_TUBE_CREATORS } from '../config/creators';

interface CategorySidebarProps {
  selectedCategory: VideoCategory | 'ALL';
  onSelectCategory: (category: VideoCategory | 'ALL') => void;
  onChannelClick: (creator: Creator) => void;
  accessibleCategories: VideoCategory[];
  canAccessContainment: boolean;
}

const CATEGORY_ICONS: Record<VideoCategory | 'ALL', string> = {
  ALL: '🌌',
  OPERATIONS: '⚙️',
  COOKING: '🍳',
  TUTORIALS: '📚',
  LIVESTREAMS: '📡',
  CHAOS: '🎭',
  WHOLESOME: '💚',
  ELDRITCH: '🌀',
  CONTAINMENT: '⚠️',
};

const CATEGORY_LABELS: Record<VideoCategory | 'ALL', string> = {
  ALL: 'For You (Probably Damaging)',
  OPERATIONS: 'Operations',
  COOKING: 'Servant Kitchen Nightmares',
  TUTORIALS: 'Training Archives',
  LIVESTREAMS: 'Live Now',
  CHAOS: 'Chaotic Broadcasts',
  WHOLESOME: 'Wholesome (?)',
  ELDRITCH: 'Eldritch Content',
  CONTAINMENT: 'Containment View',
};

export const CategorySidebar: React.FC<CategorySidebarProps> = ({
  selectedCategory,
  onSelectCategory,
  onChannelClick,
  accessibleCategories,
  canAccessContainment,
}) => {
  const [subscribedCreators, setSubscribedCreators] = useState<Creator[]>([]);

  // Load subscribed creators
  useEffect(() => {
    const subscriptionIds = getSubscriptions();
    const creators = VOID_TUBE_CREATORS.filter((c) => subscriptionIds.includes(c.id));
    setSubscribedCreators(creators);
  }, []);

  // Refresh subscriptions periodically
  useEffect(() => {
    const interval = setInterval(() => {
      const subscriptionIds = getSubscriptions();
      const creators = VOID_TUBE_CREATORS.filter((c) => subscriptionIds.includes(c.id));
      setSubscribedCreators(creators);
    }, 1000); // Check every second

    return () => clearInterval(interval);
  }, []);

  const categories: (VideoCategory | 'ALL')[] = [
    'ALL',
    ...accessibleCategories,
  ];

  // Add containment if accessible
  if (canAccessContainment && !categories.includes('CONTAINMENT')) {
    categories.push('CONTAINMENT');
  }

  return (
    <div className="w-64 bg-gray-900/50 p-4 space-y-2 overflow-y-auto">
      <div className="text-xs text-gray-500 font-mono mb-4">
        Reality is optional.<br />
        Viewer discretion is not.
      </div>

      {categories.map((category) => {
        const isSelected = selectedCategory === category;
        const isContainment = category === 'CONTAINMENT';

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`w-full text-left px-3 py-2 rounded transition-all flex items-center gap-3 ${
              isSelected
                ? isContainment
                  ? 'bg-red-900/30 text-red-400 border border-red-500/50'
                  : 'bg-purple-900/30 text-purple-300 border border-purple-500/50'
                : isContainment
                ? 'hover:bg-red-900/20 text-gray-400 hover:text-red-400'
                : 'hover:bg-gray-800/50 text-gray-400 hover:text-gray-200'
            }`}
          >
            <span className="text-xl">{CATEGORY_ICONS[category]}</span>
            <span className="text-sm font-medium">{CATEGORY_LABELS[category]}</span>
          </button>
        );
      })}

      {/* Subscriptions section */}
      <div className="pt-4 border-t border-gray-700">
        <div className="text-xs text-gray-500 font-semibold mb-2">SUBSCRIPTIONS</div>
        {subscribedCreators.length === 0 ? (
          <div className="text-xs text-gray-600 italic px-3 py-2">
            No subscriptions yet
          </div>
        ) : (
          <div className="space-y-1 text-sm text-gray-400">
            {subscribedCreators.map((creator) => (
              <div
                key={creator.id}
                className="px-3 py-1 hover:bg-gray-800/50 rounded cursor-pointer transition-colors flex items-center gap-2"
                onClick={() => onChannelClick(creator)}
              >
                <span>{creator.avatar}</span>
                <span className="truncate">{creator.channelName}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
