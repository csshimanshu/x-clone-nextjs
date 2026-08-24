'use client';

import React, { useState } from 'react';
import { LeftSidebar } from '@/components/Sidebar/LeftSidebar';
import { NotificationsFeed } from '@/components/Notifications/NotificationsFeed';
import { RightSidebar } from '@/components/Widgets/RightSidebar';
import { ComposeModal } from '@/components/Modal/ComposeModal';

export default function NotificationsPage() {
  const [isComposeOpen, setIsComposeOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Left Navigation Column */}
      <LeftSidebar onOpenComposeModal={() => setIsComposeOpen(true)} />

      {/* Center Main Notifications Stream */}
      <NotificationsFeed />

      {/* Right Widgets Column */}
      <RightSidebar />

      {/* Compose Post Dialog */}
      <ComposeModal isOpen={isComposeOpen} onClose={() => setIsComposeOpen(false)} />
    </div>
  );
}
