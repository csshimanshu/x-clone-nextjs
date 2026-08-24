import React from 'react';
import { VerifiedBadge } from '@/components/Icons';

interface UserCardProps {
  displayName: string;
  handle: string;
  isVerified?: boolean;
  onCardClick?: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({
  displayName = 'Himanshu - You...',
  handle = '@HimanshuYTA',
  isVerified = true,
  onCardClick,
}) => {
  return (
    <div
      className="user-profile-card"
      tabIndex={0}
      role="button"
      aria-label={`Account menu for ${displayName}`}
      onClick={onCardClick}
    >
      <div className="user-avatar-wrapper">
        <div className="avatar-himanshu">
          <div className="sky-bg"></div>
          <div className="person-silhouette"></div>
        </div>
      </div>
      <div className="user-meta">
        <div className="user-name-line">
          <span className="user-display-name">{displayName}</span>
          {isVerified && <VerifiedBadge />}
        </div>
        <span className="user-handle">{handle}</span>
      </div>
      <div className="user-card-more" aria-label="More options">
        <svg viewBox="0 0 24 24" className="dots-icon">
          <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
        </svg>
      </div>
    </div>
  );
};
