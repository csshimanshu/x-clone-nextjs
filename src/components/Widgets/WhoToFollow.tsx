'use client';

import React, { useState } from 'react';
import { mockWhoToFollow } from '@/data/mockData';
import { VerifiedBadge } from '@/components/Icons';

export const WhoToFollow: React.FC = () => {
  const [followingStates, setFollowingStates] = useState<Record<string, boolean>>({});
  const [hoveredButtons, setHoveredButtons] = useState<Record<string, boolean>>({});

  const toggleFollow = (userId: string) => {
    setFollowingStates((prev) => ({
      ...prev,
      [userId]: !prev[userId],
    }));
  };

  const setHover = (userId: string, isHovered: boolean) => {
    setHoveredButtons((prev) => ({
      ...prev,
      [userId]: isHovered,
    }));
  };

  return (
    <section className="widget-card" aria-labelledby="who-to-follow-heading">
      <h2 className="widget-title" id="who-to-follow-heading">
        Who to follow
      </h2>

      {mockWhoToFollow.map((user) => {
        const isFollowing = followingStates[user.id] ?? false;
        const isHovered = hoveredButtons[user.id] ?? false;

        let buttonText = user.followsYou ? 'Follow back' : 'Follow';
        if (isFollowing) {
          buttonText = isHovered ? 'Unfollow' : 'Following';
        }

        return (
          <div key={user.id} className="follow-recommendation-item">
            <div className={`follow-avatar ${user.avatarClass}`} />
            <div className="follow-info">
              <div className="follow-name-row">
                <span className="follow-name">{user.name}</span>
                {user.isVerified && <VerifiedBadge className="verified-badge-small inline-v" />}
              </div>
              <div className="follow-handle-row">
                <span className="follow-handle">{user.handle}</span>
                {user.followsYou && <span className="follows-you-badge">Follows you</span>}
              </div>
            </div>
            <button
              className={`follow-action-btn ${isFollowing ? 'following' : ''}`}
              onClick={() => toggleFollow(user.id)}
              onMouseEnter={() => setHover(user.id, true)}
              onMouseLeave={() => setHover(user.id, false)}
            >
              {buttonText}
            </button>
          </div>
        );
      })}
    </section>
  );
};
