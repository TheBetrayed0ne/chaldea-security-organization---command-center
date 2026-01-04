import React from 'react';
import type { Video } from '../types';
import { getCreator } from '../config/creators';
import { formatViews, formatUploadDate } from '../utils/formatDuration';
import { EmotionBar } from './EmotionBar';

interface VideoPlayerProps {
  video: Video;
  onClose: () => void;
  onChannelClick?: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ video, onClose, onChannelClick }) => {
  const creator = getCreator(video.creator);

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-5xl w-full bg-gray-900 rounded-lg overflow-hidden shadow-2xl relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - higher z-index to be above everything */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 z-50 text-3xl text-gray-400 hover:text-white transition-colors bg-gray-900/90 rounded-full w-10 h-10 flex items-center justify-center"
        >
          ✕
        </button>

        {/* Video player area - smaller aspect ratio */}
        <div className="relative bg-gray-800 flex items-center justify-center" style={{ aspectRatio: '21/9' }}>
          {/* Da Vinci stabilization warning for Reality Compression Zones */}
          {video.compressionZone && (
            <div className="absolute top-4 left-4 bg-yellow-900/80 px-3 py-2 rounded flex items-center gap-2 text-sm">
              <span className="text-2xl">🎨</span>
              <div>
                <div className="font-semibold text-yellow-300">Camera stabilized... mostly.</div>
                <div className="text-xs text-yellow-400">Reality Compression Zone: {video.compressionZone}</div>
              </div>
            </div>
          )}

          {/* Placeholder video content */}
          <div className="text-9xl animate-pulse">{video.thumbnail}</div>

          {/* Live indicator */}
          {video.isLive && (
            <div className="absolute top-4 right-4 bg-red-600 px-4 py-2 rounded flex items-center gap-2">
              <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
              <span className="font-bold">LIVE</span>
            </div>
          )}
        </div>

        {/* Video info */}
        <div className="p-6 space-y-4">
          <div>
            <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>{formatViews(video.views)} views</span>
              <span>•</span>
              <span>{formatUploadDate(video.uploadDate)}</span>
              {video.corruptionLevel !== undefined && (
                <>
                  <span>•</span>
                  <span className={video.corruptionLevel > 50 ? 'text-red-400' : 'text-yellow-400'}>
                    {video.corruptionLevel}% corruption
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Creator info - clickable to view channel */}
          <div
            className="flex items-center gap-3 pb-4 border-b border-gray-700 cursor-pointer hover:bg-gray-800/50 -mx-6 px-6 py-3 transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              onChannelClick?.();
            }}
          >
            <div className="text-3xl">{creator?.avatar}</div>
            <div className="flex-1">
              <div className="font-semibold flex items-center gap-2 hover:text-purple-300 transition-colors">
                {creator?.channelName}
                {creator?.verified && <span className="text-blue-400">✓</span>}
              </div>
              <div className="text-sm text-gray-400">
                {creator?.subscribers.toLocaleString()} subscribers
              </div>
            </div>
            <div className="text-gray-500 text-sm">View channel →</div>
          </div>

          {/* Description */}
          <div className="pb-4 border-b border-gray-700">
            <p className="text-gray-300">{video.description}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {video.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gray-700 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Emotion reactions */}
          <EmotionBar reactions={video.emotionReactions} />

          {/* Warnings */}
          {video.requiresColdResistance && (
            <div className="bg-cyan-900/30 border border-cyan-500/50 rounded p-3 text-sm">
              <div className="flex items-center gap-2 text-cyan-400">
                <span className="text-xl">❄️</span>
                <span className="font-semibold">Cold Resistance A Required</span>
              </div>
              <div className="text-cyan-300/70 text-xs mt-1">
                This content has been stabilized by Kyle's override access.
              </div>
            </div>
          )}

          {video.compressionZone === 'sealed-domain' && (
            <div className="bg-purple-900/30 border border-purple-500/50 rounded p-3 text-sm">
              <div className="flex items-center gap-2 text-purple-400">
                <span className="text-xl">🔒</span>
                <span className="font-semibold">Sealed Domain Content</span>
              </div>
              <div className="text-purple-300/70 text-xs mt-1">
                This video was captured from a sealed conceptual space. Side effects may include: introspection, dream bleed, and occasional existential clarity.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
