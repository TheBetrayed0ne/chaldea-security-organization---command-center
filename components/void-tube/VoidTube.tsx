import React, { useState, useMemo } from 'react';
import { useGlobalStatus } from '../../context/StatusContext';
import { getVoidTubePolicy, canAccessVideo } from './policy/voidTubePolicy';
import { VOID_TUBE_VIDEOS, VOID_TUBE_LIVE_STREAMS, getVideosByCategory } from './config/videos';
import { getCreator } from './config/creators';
import { CategorySidebar } from './components/CategorySidebar';
import { VideoThumbnail } from './components/VideoThumbnail';
import { VideoPlayer } from './components/VideoPlayer';
import { ChannelPage } from './components/ChannelPage';
import type { Video, VideoCategory, Creator } from './types';

const VoidTube: React.FC = () => {
  const { status } = useGlobalStatus();
  const { userRole, staff } = status;
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory | 'ALL'>('ALL');
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [selectedChannel, setSelectedChannel] = useState<Creator | null>(null);

  // Get user policy
  const policy = useMemo(
    () => getVoidTubePolicy(userRole, staff.memberId),
    [userRole, staff.memberId]
  );

  const isKyle = staff.memberId === 'kyle' || staff.memberId === 'kyle-winters';

  // Filter videos based on policy and category
  const filteredVideos = useMemo(() => {
    let videos = selectedCategory === 'ALL'
      ? VOID_TUBE_VIDEOS
      : getVideosByCategory(selectedCategory);

    // Filter based on access policy
    videos = videos.filter((video) => {
      const access = canAccessVideo(policy, video, isKyle);
      return access.allowed;
    });

    // Sort by views (trending)
    return videos.sort((a, b) => b.views - a.views);
  }, [selectedCategory, policy, isKyle]);

  // Live streams
  const liveStreams = useMemo(() => {
    if (!policy.canViewLiveStreams) return [];
    return VOID_TUBE_LIVE_STREAMS.filter((stream) => {
      const access = canAccessVideo(policy, stream, isKyle);
      return access.allowed;
    });
  }, [policy, isKyle]);

  const handleVideoClick = (video: Video) => {
    const access = canAccessVideo(policy, video, isKyle);
    if (access.allowed) {
      setSelectedVideo(video);
    }
  };

  const handleChannelClick = (creatorId: string) => {
    const creator = getCreator(creatorId);
    if (creator) {
      setSelectedChannel(creator);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-purple-950/20 text-white overflow-hidden">
      {/* Sidebar */}
      <CategorySidebar
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        onChannelClick={setSelectedChannel}
        accessibleCategories={policy.accessibleCategories}
        canAccessContainment={policy.canAccessContainment}
      />

      {/* Main content */}
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-gray-900/80 backdrop-blur-sm border-b border-purple-500/30 p-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="text-5xl">▶️</div>
              <div className="absolute inset-0 animate-pulse opacity-30">
                🌀
              </div>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                VOIDTUBE
              </h1>
              <p className="text-sm text-gray-400 font-mono italic">
                Reality is optional. Viewer discretion is not.
              </p>
            </div>
          </div>
        </div>

        <div className="p-6">
          {/* Live Now Section */}
          {liveStreams.length > 0 && (
            <div className="mb-8">
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="text-red-500">🔴</span>
                Live Now
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {liveStreams.map((stream) => (
                  <VideoThumbnail
                    key={stream.id}
                    video={stream}
                    onClick={() => handleVideoClick(stream)}
                    onChannelClick={() => handleChannelClick(stream.creator)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Main Video Grid */}
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4">
              {selectedCategory === 'ALL' ? 'Recommended (Probably Damaging)' : selectedCategory}
            </h2>
            {filteredVideos.length === 0 ? (
              <div className="text-center py-12 text-gray-500">
                <div className="text-6xl mb-4">🌀</div>
                <p>No videos found in this category.</p>
                <p className="text-sm mt-2">
                  {selectedCategory === 'CONTAINMENT' && !policy.canAccessContainment
                    ? 'You do not have access to Containment View.'
                    : 'Try selecting a different category.'}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredVideos.map((video) => (
                  <VideoThumbnail
                    key={video.id}
                    video={video}
                    onClick={() => handleVideoClick(video)}
                    onChannelClick={() => handleChannelClick(video.creator)}
                    hasMotion={video.hasMotion}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Kyle's special playlists section (if Kyle is logged in) */}
          {isKyle && (
            <div className="mb-8 p-4 bg-cyan-900/10 border border-cyan-500/30 rounded-lg">
              <h2 className="text-xl font-bold mb-2 flex items-center gap-2">
                <span>❄️</span>
                Your Playlists
              </h2>
              <div className="space-y-2">
                <div className="px-4 py-2 bg-gray-800/50 rounded hover:bg-gray-800/70 cursor-pointer transition-colors">
                  <div className="font-semibold">You probably shouldn't watch these before sleeping</div>
                  <div className="text-xs text-gray-400">4 videos • Minor dream bleed reported by 73% of viewers</div>
                </div>
                <div className="px-4 py-2 bg-gray-800/50 rounded hover:bg-gray-800/70 cursor-pointer transition-colors">
                  <div className="font-semibold">Ambient Collections</div>
                  <div className="text-xs text-gray-400">8 videos • For calibration purposes</div>
                </div>
              </div>
            </div>
          )}

          {/* Footer note */}
          <div className="text-center text-xs text-gray-600 mt-12 pb-8 font-mono">
            <p>VoidTube v2.4.7 • Powered by interdimensional quantum relay</p>
            <p className="mt-1">Designed by Da Vinci • Patched by BB • Stabilized by Kyle</p>
            <p className="mt-1 text-gray-700">
              Algorithm-sama is currently {['napping', 'confused', 'questioning existence', 'plotting revenge'][Math.floor(Math.random() * 4)]}
            </p>
          </div>
        </div>
      </div>

      {/* Video Player Modal */}
      {selectedVideo && (
        <VideoPlayer
          video={selectedVideo}
          onClose={() => setSelectedVideo(null)}
          onChannelClick={() => {
            const creator = getCreator(selectedVideo.creator);
            if (creator) {
              setSelectedVideo(null);
              setSelectedChannel(creator);
            }
          }}
        />
      )}

      {/* Channel Page Modal */}
      {selectedChannel && (
        <ChannelPage
          creator={selectedChannel}
          onClose={() => setSelectedChannel(null)}
          onVideoClick={(video) => {
            setSelectedChannel(null);
            handleVideoClick(video);
          }}
        />
      )}

      {/* Aurora background effect */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
    </div>
  );
};

export default VoidTube;
