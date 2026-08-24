'use client';

import React, { useState } from 'react';
import { NotificationItemData } from '@/types';
import {
  FollowIcon,
  LikeHeartIcon,
  RepostIcon,
  BellIcon,
  VerifiedBadge,
} from '@/components/Icons';

interface NotificationItemProps {
  data: NotificationItemData;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({ data }) => {
  const [isHighlighted, setIsHighlighted] = useState(data.highlighted ?? false);

  // Render proper icon based on notification type
  const renderIcon = () => {
    switch (data.type) {
      case 'follow':
        return <FollowIcon />;
      case 'like':
        return <LikeHeartIcon />;
      case 'repost':
        return <RepostIcon />;
      case 'verified':
        return (
          <svg className="notif-type-icon icon-verified-badge" viewBox="0 0 22 22" aria-label="Verification">
            <g fill="#1d9bf0">
              <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.136 2.136 5.378-5.378 1.293 1.302-6.671 6.67z" fill="#1d9bf0"></path>
            </g>
          </svg>
        );
      case 'post-alert':
        return <BellIcon />;
      default:
        return <BellIcon />;
    }
  };

  // Render text for notifications
  const renderTextContent = () => {
    if (data.type === 'verified') {
      return (
        <div className="notif-body">
          <p className="notif-text">
            <strong className="user-strong">{data.primaryActor}</strong> <span className="time-sep">·</span> <span className="notif-time">{data.time}</span>
          </p>
          {data.subText && <p className="sub-info-text">{data.subText}</p>}
        </div>
      );
    }

    if (data.type === 'post-alert') {
      return (
        <div className="notif-body">
          <p className="notif-text">
            New post notifications for <strong className="user-strong">{data.primaryActor}</strong>{' '}
            {data.isVerifiedActor && <VerifiedBadge className="inline-verified" />}
            {data.secondaryCount && ` and ${data.secondaryCount} others`}{' '}
            <span className="time-sep">·</span> <span className="notif-time">{data.time}</span>
          </p>
        </div>
      );
    }

    return (
      <div className="notif-body">
        <p className="notif-text">
          <strong className="user-strong">{data.primaryActor}</strong>
          {data.secondaryCount ? ` and ${data.secondaryCount} others ` : ' '}
          {data.actionText} <span className="time-sep">·</span> <span className="notif-time">{data.time}</span>
        </p>
        {data.postSnippet && <p className="post-snippet">{data.postSnippet}</p>}
      </div>
    );
  };

  return (
    <article
      className={`notification-item ${isHighlighted ? 'highlighted' : ''}`}
      tabIndex={0}
      onClick={() => setIsHighlighted(false)}
    >
      <div className="notif-icon-col">{renderIcon()}</div>

      <div className={`notif-content-col ${data.hasMediaPreview ? 'has-preview' : ''}`}>
        <div className="notif-main-area">
          {/* Avatar Cluster */}
          <div className={`avatars-row ${data.avatars.length > 5 ? 'wrap-avatars' : ''}`}>
            {data.avatars.map((av, idx) => {
              if (av.type === 'initial') {
                return (
                  <div key={idx} className={`avatar-circle initial-avatar ${av.className || ''}`}>
                    {av.initialText}
                  </div>
                );
              }
              return (
                <div key={idx} className={`avatar-circle ${av.className || ''}`}>
                  {av.className === 'user-av-raja' && (
                    <>
                      <div className="head" />
                      <div className="body" />
                    </>
                  )}
                  {av.className === 'user-av-2' && (
                    <>
                      <div className="head" />
                      <div className="body" />
                    </>
                  )}
                  {av.className === 'user-av-spiderman' && <div className="spider-mask" />}
                  {av.className === 'user-av-blue-circle' && <div className="inner-person" />}
                </div>
              );
            })}
          </div>

          {/* Main Text Content */}
          {renderTextContent()}
        </div>

        {/* Media Preview Card */}
        {data.hasMediaPreview && (
          <div className="media-thumb-preview" aria-label="Media preview">
            <div className="dark-rack-card">
              <div className="rack-line" />
              <div className="rack-line" />
              <div className="rack-line" />
              <div className="rack-line" />
              <div className="rack-line" />
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
