'use client';

import React, { useState } from 'react';
import { TabType } from '@/types';
import { mockNotifications } from '@/data/mockData';
import { SettingsIcon } from '@/components/Icons';
import { TabsNav } from './TabsNav';
import { NotificationItem } from './NotificationItem';

export const NotificationsFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('all');

  return (
    <main className="main-content" role="main">
      {/* Sticky Header Bar */}
      <div className="notifications-header">
        <h1 className="header-title">Notifications</h1>
        <button className="settings-btn" aria-label="Notification settings" title="Settings">
          <SettingsIcon />
        </button>
      </div>

      {/* Tabs Navigation */}
      <TabsNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Panels */}
      {activeTab === 'all' && (
        <div className="feed-container" id="feed-all" role="tabpanel" aria-labelledby="tab-all">
          {mockNotifications.map((notif) => (
            <NotificationItem key={notif.id} data={notif} />
          ))}
        </div>
      )}

      {activeTab === 'priority' && (
        <div className="feed-container" id="feed-priority" role="tabpanel" aria-labelledby="tab-priority">
          <div className="empty-state-card">
            <h3 className="empty-state-title">Nothing to see here — yet</h3>
            <p className="empty-state-desc">
              From likes to reposts and a whole lot more, when it comes from verified accounts, you’ll find it here.
            </p>
          </div>
        </div>
      )}

      {activeTab === 'mentions' && (
        <div className="feed-container" id="feed-mentions" role="tabpanel" aria-labelledby="tab-mentions">
          <div className="empty-state-card">
            <h3 className="empty-state-title">Nothing to see here — yet</h3>
            <p className="empty-state-desc">
              When someone mentions you in a post or reply, you’ll find it here.
            </p>
          </div>
        </div>
      )}
    </main>
  );
};
