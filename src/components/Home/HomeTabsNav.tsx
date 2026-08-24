'use client';

import React from 'react';
import { HomeTabType } from '@/types';
import { SettingsIcon } from '@/components/Icons';

interface HomeTabsNavProps {
  activeTab: HomeTabType;
  onTabChange: (tab: HomeTabType) => void;
}

export const HomeTabsNav: React.FC<HomeTabsNavProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="home-tabs-container">
      <div className="home-tabs-nav" role="tablist" aria-label="Home timeline feeds">
        <button
          className={`home-tab-btn ${activeTab === 'for-you' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'for-you'}
          onClick={() => onTabChange('for-you')}
        >
          <span className="home-tab-text">For you</span>
          {activeTab === 'for-you' && <div className="home-tab-indicator" />}
        </button>

        <button
          className={`home-tab-btn ${activeTab === 'following' ? 'active' : ''}`}
          role="tab"
          aria-selected={activeTab === 'following'}
          onClick={() => onTabChange('following')}
        >
          <span className="home-tab-text">Following</span>
          {activeTab === 'following' && <div className="home-tab-indicator" />}
        </button>
      </div>

      <button className="settings-btn home-settings-btn" aria-label="Timeline settings" title="Timeline settings">
        <SettingsIcon />
      </button>
    </div>
  );
};
