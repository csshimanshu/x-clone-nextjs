'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ComposeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ComposeModal: React.FC<ComposeModalProps> = ({ isOpen, onClose }) => {
  const [postText, setPostText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => textareaRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay open"
      aria-hidden={!isOpen}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="modal-card">
        <div className="modal-header">
          <button className="modal-close-btn" aria-label="Close modal" onClick={onClose}>
            ✕
          </button>
          <span className="modal-drafts-link">Drafts</span>
        </div>
        <div className="modal-body">
          <div className="modal-avatar">
            <div className="avatar-himanshu modal-av-size">
              <div className="sky-bg" />
              <div className="person-silhouette" />
            </div>
          </div>
          <div className="modal-input-area">
            <textarea
              ref={textareaRef}
              placeholder="What is happening?!"
              className="post-textarea"
              rows={3}
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
            />
            <div className="modal-actions-bar">
              <div className="media-tools">
                <button className="tool-icon-btn" aria-label="Media" title="Media">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#1d9bf0">
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v9.086l3-3 3 3 5-5 3 3V5.5c0-.276-.224-.5-.5-.5h-13z" />
                  </svg>
                </button>
                <button className="tool-icon-btn" aria-label="GIF" title="GIF">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#1d9bf0">
                    <path d="M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zM7 10h3v1.5H8.5v1H10v1.5H7V10zm4 0h1.5v4H11V10zm3 0h3v1.5h-1.5V12H17v1.5h-3V10z" />
                  </svg>
                </button>
                <button className="tool-icon-btn" aria-label="Poll" title="Poll">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#1d9bf0">
                    <path d="M6 5v14h2V5H6zm5 4v10h2V9h-2zm5-6v16h2V3h-2z" />
                  </svg>
                </button>
                <button className="tool-icon-btn" aria-label="Emoji" title="Emoji">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="#1d9bf0">
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-9a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm7 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-7.5 4.5a5.5 5.5 0 008 0l1.414 1.414a7.5 7.5 0 01-10.828 0L8 15.5z" />
                  </svg>
                </button>
              </div>
              <button
                className="modal-post-submit"
                onClick={() => {
                  if (postText.trim()) {
                    alert(`Posted: "${postText}"`);
                    setPostText('');
                    onClose();
                  }
                }}
              >
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
