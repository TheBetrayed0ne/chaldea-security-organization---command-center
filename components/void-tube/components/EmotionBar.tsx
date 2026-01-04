import React from 'react';
import type { EmotionReaction } from '../types';
import { getEmotionColor, getEmotionIcon, EMOTION_LABELS } from '../utils/emotionColors';

interface EmotionBarProps {
  reactions: Record<EmotionReaction, number>;
}

export const EmotionBar: React.FC<EmotionBarProps> = ({ reactions }) => {
  // Get top emotions
  const sortedEmotions = (Object.entries(reactions) as [EmotionReaction, number][])
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const total = sortedEmotions.reduce((sum, [, count]) => sum + count, 0);

  if (total === 0) {
    return null;
  }

  return (
    <div className="space-y-2">
      <div className="text-xs text-gray-400 font-semibold">Emotion-Sync Reactions</div>
      <div className="flex gap-2">
        {sortedEmotions.map(([emotion, count]) => {
          const percentage = Math.round((count / total) * 100);
          const color = getEmotionColor(emotion);
          const icon = getEmotionIcon(emotion);
          const label = EMOTION_LABELS[emotion];

          return (
            <div
              key={emotion}
              className="flex flex-col items-center gap-1 group relative"
              title={`${label}: ${count.toLocaleString()}`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all group-hover:scale-110"
                style={{
                  backgroundColor: `${color}20`,
                  boxShadow: `0 0 8px ${color}40`,
                }}
              >
                <span style={{ filter: `drop-shadow(0 0 2px ${color})` }}>{icon}</span>
              </div>
              <div className="text-xs text-gray-400">{percentage}%</div>

              {/* Tooltip */}
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-900 px-2 py-1 rounded text-xs whitespace-nowrap pointer-events-none">
                {label}: {count.toLocaleString()}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
