'use client';

import React from 'react';
import { GrokIcon, ChatIcon } from '@/components/Icons';

export const FloatingActions: React.FC = () => {
  return (
    <div className="floating-actions-container">
      <button
        className="floating-btn grok-float-btn"
        aria-label="Open Grok"
        title="Grok"
        onClick={() => alert('Opening Grok Assistant')}
      >
        <GrokIcon className="float-svg" />
      </button>
      <button
        className="floating-btn chat-float-btn"
        aria-label="Open Messages"
        title="Messages"
        onClick={() => alert('Opening Direct Messages')}
      >
        <ChatIcon className="float-svg" />
      </button>
    </div>
  );
};
