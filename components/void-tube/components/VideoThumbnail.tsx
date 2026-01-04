import React, { useState } from 'react';
import type { Video } from '../types';
import { formatDuration, formatViews, formatUploadDate } from '../utils/formatDuration';
import { getCreator } from '../config/creators';

interface VideoThumbnailProps {
  video: Video;
  onClick: () => void;
  onChannelClick?: () => void;
  hasMotion?: boolean;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ video, onClick, onChannelClick, hasMotion }) => {
  const [isHovered, setIsHovered] = useState(false);
  const creator = getCreator(video.creator);

  const compressionZoneBorder = video.compressionZone
    ? 'border-2 border-purple-500/50 shadow-lg shadow-purple-500/20'
    : '';

  const motionClass = hasMotion || video.hasMotion ? 'animate-pulse' : '';

  return (
    <div
      className={`transition-transform hover:scale-105 ${compressionZoneBorder}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative bg-gray-800 rounded-lg overflow-hidden aspect-video flex items-center justify-center cursor-pointer"
        onClick={onClick}
      >
        <div className={`text-6xl ${motionClass}`}>{video.thumbnail}</div>

        {/* Duration badge */}
        {video.duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-mono">
            {formatDuration(video.duration)}
          </div>
        )}

        {/* Live indicator */}
        {video.isLive && (
          <div className="absolute top-2 left-2 bg-red-600 px-2 py-1 rounded text-xs font-bold flex items-center gap-1">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            LIVE
          </div>
        )}

        {/* Corruption warning */}
        {video.corruptionLevel && video.corruptionLevel > 50 && (
          <div className="absolute top-2 right-2 text-yellow-400 text-xl" title={`Corruption: ${video.corruptionLevel}%`}>
            ⚠️
          </div>
        )}

        {/* Cold Resistance required */}
        {video.requiresColdResistance && (
          <div className="absolute top-2 right-2 text-cyan-400 text-xl" title="Requires Cold Resistance A">
            ❄️
          </div>
        )}

        {/* Compression zone indicator */}
        {video.compressionZone && (
          <div className="absolute bottom-2 left-2 bg-purple-600/80 px-2 py-1 rounded text-xs">
            {video.compressionZone === 'reality-marble' && '📐'}
            {video.compressionZone === 'conceptual' && '🌀'}
            {video.compressionZone === 'sealed-domain' && '🔒'}
          </div>
        )}
      </div>

      {/* Video info */}
      <div className="mt-2">
        <h3 className="font-semibold text-sm line-clamp-2 mb-1 cursor-pointer" onClick={onClick}>
          {video.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <span>{creator?.avatar}</span>
          <span
            className="hover:text-gray-200 cursor-pointer transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onChannelClick?.();
            }}
          >
            {creator?.channelName}
          </span>
        </div>
        <div className="text-xs text-gray-500 mt-1">
          {formatViews(video.views)} views • {formatUploadDate(video.uploadDate)}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mt-2">
          {video.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 bg-gray-700/50 rounded-full text-gray-300"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
