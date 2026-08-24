'use client';

import React, { useState, useRef } from 'react';
import { GlobeIcon } from '@/components/Icons';

interface TweetComposerProps {
  onPostTweet: (content: string) => void;
}

export const TweetComposer: React.FC<TweetComposerProps> = ({ onPostTweet }) => {
  const [content, setContent] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;
    onPostTweet(content);
    setContent('');
    setIsFocused(false);
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    // Auto grow textarea
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const charCount = content.length;
  const maxChars = 280;
  const isPostDisabled = !content.trim();

  return (
    <div className="tweet-composer-box">
      <div className="composer-avatar-col">
        <div className="avatar-himanshu">
          <div className="sky-bg" />
          <div className="person-silhouette" />
        </div>
      </div>

      <div className="composer-main-col">
        <textarea
          ref={textareaRef}
          className="composer-textarea"
          placeholder="What is happening?!"
          rows={2}
          value={content}
          onChange={handleInput}
          onFocus={() => setIsFocused(true)}
        />

        {/* Audience Selector */}
        {(isFocused || content.length > 0) && (
          <div className="composer-audience-btn" tabIndex={0} role="button">
            <GlobeIcon className="globe-icon" />
            <span>Everyone can reply</span>
          </div>
        )}

        <div className="composer-footer">
          <div className="composer-tools">
            <button type="button" className="tool-icon-btn" aria-label="Add media" title="Media">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--twitter-blue)">
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13z" />
              </svg>
            </button>
            <button type="button" className="tool-icon-btn" aria-label="Add GIF" title="GIF">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--twitter-blue)">
                <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zM7 10h3v1.5H8.5v1H10v1.5H7V10zm4 0h1.5v4H11V10zm3 0h3v1.5h-1.5V12H17v1.5h-3V10z" />
              </svg>
            </button>
            <button type="button" className="tool-icon-btn" aria-label="Add poll" title="Poll">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--twitter-blue)">
                <path d="M6 5v14h2V5H6zm5 4v10h2V9h-2zm5-6v16h2V3h-2z" />
              </svg>
            </button>
            <button type="button" className="tool-icon-btn" aria-label="Add emoji" title="Emoji">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--twitter-blue)">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-7.5 4.5a5.5 5.5 0 008 0l1.414 1.414a7.5 7.5 0 01-10.828 0L8 15.5z" />
              </svg>
            </button>
            <button type="button" className="tool-icon-btn" aria-label="Schedule" title="Schedule">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="var(--twitter-blue)">
                <path d="M6 3V1h2v2h8V1h2v2h1c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h1zm13 6H5v10h14V9zM7 11h5v5H7v-5z" />
              </svg>
            </button>
            <button type="button" className="tool-icon-btn disabled-tool" aria-label="Location" title="Location" disabled>
              <svg viewBox="0 0 24 24" width="20" height="20" fill="rgba(29, 155, 240, 0.5)">
                <path d="M12 14c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm0-10c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
              </svg>
            </button>
          </div>

          <div className="composer-actions-right">
            {charCount > 0 && (
              <span className={`char-counter ${charCount > maxChars ? 'exceeded' : ''}`}>
                {maxChars - charCount}
              </span>
            )}
            <button
              type="button"
              className="composer-post-btn"
              disabled={isPostDisabled}
              onClick={handleSubmit}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
