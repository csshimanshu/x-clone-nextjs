'use client';

import React from 'react';
import { TabType } from '@/types';

interface TabsNavProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabsNav: React.FC<TabsNavProps> = ({ activeTab, onTabChange }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'priority', label: 'Priority' },
    { id: 'mentions', label: 'Mentions' },
  ];

  return (
    <div className="tabs-nav" role="tablist" aria-label="Notifications views">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <button
            key={tab.id}
            className={`tab-item ${isActive ? 'active' : ''}`}
            role="tab"
            aria-selected={isActive}
            id={`tab-${tab.id}`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="tab-text">{tab.label}</span>
            {isActive && <div className="tab-indicator" />}
          </button>
        );
      })}
    </div>
  );
};
