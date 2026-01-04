import React, { useState, useEffect } from 'react';
import type { Creator, Video } from '../types';
import { getVideosByCreator } from '../config/videos';
import { VideoThumbnail } from './VideoThumbnail';
import { isSubscribed, toggleSubscription } from '../utils/subscriptions';

interface ChannelPageProps {
  creator: Creator;
  onClose: () => void;
  onVideoClick: (video: Video) => void;
}

export const ChannelPage: React.FC<ChannelPageProps> = ({ creator, onClose, onVideoClick }) => {
  const [subscribed, setSubscribed] = useState(false);
  const videos = getVideosByCreator(creator.id);

  useEffect(() => {
    setSubscribed(isSubscribed(creator.id));
  }, [creator.id]);

  const handleSubscribeToggle = () => {
    const newState = toggleSubscription(creator.id);
    setSubscribed(newState);
  };

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/20 px-4 py-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - sticky positioned so it stays visible */}
        <button
          onClick={onClose}
          className="sticky top-4 left-full ml-4 z-[60] text-3xl text-gray-400 hover:text-white transition-colors bg-gray-900/90 rounded-full w-12 h-12 flex items-center justify-center backdrop-blur-sm float-right mb-4"
        >
          ✕
        </button>

        {/* Channel Banner */}
        <div className="relative h-48 bg-gradient-to-r from-purple-900/50 to-cyan-900/50 overflow-hidden">
          <div className="absolute inset-0 bg-black/30"></div>
          {creator.banner && (
            <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-sm italic">
              {creator.banner}
            </div>
          )}
          {/* Special effects for certain creators */}
          {creator.specialEffects?.auraBehavior === 'void' && (
            <div className="absolute inset-0 bg-cyan-500/5 animate-pulse"></div>
          )}
          {creator.specialEffects?.auraBehavior === 'chaotic' && (
            <div className="absolute inset-0 bg-purple-500/10 animate-pulse"></div>
          )}
          {creator.specialEffects?.auraBehavior === 'eldritch' && (
            <div className="absolute inset-0 bg-purple-900/20 animate-pulse"></div>
          )}
        </div>

        {/* Channel Info */}
        <div className="max-w-7xl mx-auto px-6 -mt-12">
          <div className="flex items-end gap-6 mb-6">
            {/* Avatar */}
            <div className="w-32 h-32 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center text-6xl shadow-xl">
              {creator.avatar}
            </div>

            {/* Channel details */}
            <div className="flex-1 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">{creator.channelName}</h1>
                {creator.verified && (
                  <span className="text-blue-400 text-2xl" title="Verified">
                    ✓
                  </span>
                )}
              </div>
              <div className="text-gray-400 mb-3">
                <span>{creator.displayName}</span>
                <span className="mx-2">•</span>
                <span>{creator.subscribers.toLocaleString()} subscribers</span>
                <span className="mx-2">•</span>
                <span>{videos.length} videos</span>
              </div>
              <p className="text-gray-300 max-w-2xl">{creator.bio}</p>
            </div>

            {/* Subscribe button */}
            <div className="pb-4">
              <button
                onClick={handleSubscribeToggle}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  subscribed
                    ? 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {subscribed ? 'Subscribed' : 'Subscribe'}
              </button>
            </div>
          </div>

          {/* Special warnings for certain channels */}
          {creator.id === 'glacial-anomaly-ex' && (
            <div className="mb-6 bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 text-cyan-400">
                <span className="text-2xl">❄️</span>
                <div>
                  <div className="font-semibold">Cold Resistance A Access</div>
                  <div className="text-sm text-cyan-300/70">
                    Some content on this channel requires special clearance. Override access granted.
                  </div>
                </div>
              </div>
            </div>
          )}

          {creator.id === 'bb-broadcasts' && (
            <div className="mb-6 bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 text-purple-400">
                <span className="text-2xl">💜</span>
                <div>
                  <div className="font-semibold">Warning: Algorithm Instability</div>
                  <div className="text-sm text-purple-300/70">
                    This channel is known to cause recommendation system distortions. Viewer discretion is mandatory.
                  </div>
                </div>
              </div>
            </div>
          )}

          {creator.id === 'abby-dreams' && (
            <div className="mb-6 bg-purple-900/20 border border-purple-500/30 rounded-lg p-4">
              <div className="flex items-center gap-3 text-purple-400">
                <span className="text-2xl">🌙</span>
                <div>
                  <div className="font-semibold">Side Effects Notice</div>
                  <div className="text-sm text-purple-300/70">
                    Content may cause: lucid dreaming, introspection, dream bleed, and occasional cosmic clarity.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Videos section */}
          <div className="py-8">
            <h2 className="text-2xl font-bold mb-6">Videos</h2>
            {videos.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">📹</div>
                <p>No videos uploaded yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {videos.map((video) => (
                  <VideoThumbnail
                    key={video.id}
                    video={video}
                    onClick={() => onVideoClick(video)}
                    hasMotion={video.hasMotion}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
