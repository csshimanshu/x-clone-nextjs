'use client';

import React, { useState } from 'react';
import { Tweet } from '@/types';
import {
  VerifiedBadge,
  ReplyIcon,
  RepostIcon,
  HeartOutlineIcon,
  HeartFilledIcon,
  ViewsIcon,
  BookmarkOutlineIcon,
  BookmarkFilledIcon,
  ShareIcon,
} from '@/components/Icons';

interface TweetCardProps {
  tweet: Tweet;
}

export const TweetCard: React.FC<TweetCardProps> = ({ tweet }) => {
  const [liked, setLiked] = useState(tweet.userActions?.liked ?? false);
  const [likeCount, setLikeCount] = useState(tweet.metrics.likes);

  const [reposted, setReposted] = useState(tweet.userActions?.reposted ?? false);
  const [repostCount, setRepostCount] = useState(tweet.metrics.reposts);

  const [bookmarked, setBookmarked] = useState(tweet.userActions?.bookmarked ?? false);
  const [bookmarkCount, setBookmarkCount] = useState(tweet.metrics.bookmarks);

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (liked) {
      setLiked(false);
      setLikeCount((prev) => prev - 1);
    } else {
      setLiked(true);
      setLikeCount((prev) => prev + 1);
    }
  };

  const handleRepost = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (reposted) {
      setReposted(false);
      setRepostCount((prev) => prev - 1);
    } else {
      setReposted(true);
      setRepostCount((prev) => prev + 1);
    }
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (bookmarked) {
      setBookmarked(false);
      setBookmarkCount((prev) => prev - 1);
    } else {
      setBookmarked(true);
      setBookmarkCount((prev) => prev + 1);
    }
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  // Format content to highlight #hashtags and @mentions
  const renderFormattedContent = (text: string) => {
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      const words = line.split(' ');
      return (
        <span key={lIdx} className="tweet-line">
          {words.map((word, wIdx) => {
            if (word.startsWith('#') || word.startsWith('@') || word.startsWith('http')) {
              return (
                <span key={wIdx} className="tweet-highlight-link">
                  {word}{' '}
                </span>
              );
            }
            return word + ' ';
          })}
          {lIdx < lines.length - 1 && <br />}
        </span>
      );
    });
  };

  return (
    <article className="tweet-card" tabIndex={0}>
      {/* Left Column: Author Avatar */}
      <div className="tweet-avatar-col">
        {tweet.author.avatarClass === 'avatar-himanshu' ? (
          <div className="avatar-himanshu">
            <div className="sky-bg" />
            <div className="person-silhouette" />
          </div>
        ) : (
          <div className={`avatar-circle ${tweet.author.avatarClass || 'user-av-darkman'}`}>
            {tweet.author.avatarClass === 'user-av-rauch' && (
              <div className="inner-person" style={{ background: '#000000' }} />
            )}
            {tweet.author.avatarClass === 'user-av-grok-official' && (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="white">
                <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3l1.42-1.42A9.5 9.5 0 1 0 5.28 18.72l1.42-1.42A7.48 7.48 0 0 1 4.5 12zm15 0a7.48 7.48 0 0 1-2.2 5.3l1.42 1.42a9.5 9.5 0 0 0 0-13.44l-1.42 1.42A7.48 7.48 0 0 1 19.5 12zM3.29 20.71l17.42-17.42 1.42 1.42L4.71 22.13z"></path>
              </svg>
            )}
          </div>
        )}
      </div>

      {/* Right Column: Tweet Content & Actions */}
      <div className="tweet-body-col">
        {/* Author Header */}
        <div className="tweet-header-row">
          <div className="tweet-author-info">
            <span className="tweet-author-name">{tweet.author.name}</span>
            {tweet.author.isVerified && <VerifiedBadge className="verified-badge-small inline-v" />}
            <span className="tweet-author-handle">{tweet.author.handle}</span>
            <span className="time-sep">·</span>
            <span className="tweet-timestamp">{tweet.timestamp}</span>
          </div>

          <button className="tweet-more-btn" aria-label="More post options" onClick={(e) => e.stopPropagation()}>
            <svg viewBox="0 0 24 24" className="dots-small">
              <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
            </svg>
          </button>
        </div>

        {/* Text Content */}
        <div className="tweet-text-content">{renderFormattedContent(tweet.content)}</div>

        {/* Media Preview (if present) */}
        {tweet.media && (
          <div className="tweet-media-card">
            <div className={`tweet-media-container ${tweet.media.gradientClass || ''}`}>
              {tweet.media.gradientClass === 'tweet-media-audio-rack' && (
                <div className="dark-rack-card home-rack-size">
                  <div className="rack-line" />
                  <div className="rack-line" />
                  <div className="rack-line" />
                  <div className="rack-line" />
                  <div className="rack-line" />
                </div>
              )}
              {tweet.media.title && (
                <div className="tweet-media-details">
                  <span className="tweet-media-title">{tweet.media.title}</span>
                  {tweet.media.subtitle && (
                    <span className="tweet-media-sub">{tweet.media.subtitle}</span>
                  )}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tweet Actions Bar */}
        <div className="tweet-actions-bar" role="group" aria-label="Post actions">
          {/* Reply */}
          <button className="tweet-action-btn action-reply" aria-label="Reply">
            <div className="action-icon-wrapper">
              <ReplyIcon />
            </div>
            <span className="action-count">{tweet.metrics.replies}</span>
          </button>

          {/* Repost */}
          <button
            className={`tweet-action-btn action-repost ${reposted ? 'reposted' : ''}`}
            aria-label="Repost"
            onClick={handleRepost}
          >
            <div className="action-icon-wrapper">
              <RepostIcon />
            </div>
            <span className="action-count">{repostCount}</span>
          </button>

          {/* Like */}
          <button
            className={`tweet-action-btn action-like ${liked ? 'liked' : ''}`}
            aria-label="Like"
            onClick={handleLike}
          >
            <div className="action-icon-wrapper">
              {liked ? <HeartFilledIcon /> : <HeartOutlineIcon />}
            </div>
            <span className="action-count">{likeCount}</span>
          </button>

          {/* Views */}
          <button className="tweet-action-btn action-views" aria-label="Views">
            <div className="action-icon-wrapper">
              <ViewsIcon />
            </div>
            <span className="action-count">{tweet.metrics.views}</span>
          </button>

          {/* Utility Group: Bookmark & Share */}
          <div className="tweet-utility-group">
            <button
              className={`tweet-action-btn action-bookmark ${bookmarked ? 'bookmarked' : ''}`}
              aria-label="Bookmark"
              onClick={handleBookmark}
            >
              <div className="action-icon-wrapper">
                {bookmarked ? <BookmarkFilledIcon /> : <BookmarkOutlineIcon />}
              </div>
            </button>

            <button className="tweet-action-btn action-share" aria-label="Share" onClick={handleShare}>
              <div className="action-icon-wrapper">
                <ShareIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};
