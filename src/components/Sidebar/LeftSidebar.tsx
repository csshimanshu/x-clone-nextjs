import React from 'react';
import {
  XLogoIcon,
  HomeIcon,
  ExploreIcon,
  NotificationsIcon,
  ChatIcon,
  GrokIcon,
  PremiumIcon,
  HistoryIcon,
  ArticlesIcon,
  ProfileIcon,
  MoreDotsIcon,
} from '@/components/Icons';
import { NavItem } from './NavItem';
import { UserCard } from './UserCard';

interface LeftSidebarProps {
  onOpenComposeModal: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({ onOpenComposeModal }) => {
  return (
    <header className="left-sidebar" role="banner">
      <div className="sidebar-inner">
        <div>
          {/* Logo */}
          <a href="#" className="logo-link" aria-label="X Logo">
            <XLogoIcon />
          </a>

          {/* Nav Items */}
          <nav className="nav-menu" role="navigation" aria-label="Primary Navigation">
            <NavItem label="Home" icon={<HomeIcon />} />
            <NavItem label="Explore" icon={<ExploreIcon />} />
            <NavItem label="Notifications" icon={<NotificationsIcon className="nav-icon active-icon" />} active />
            <NavItem label="Chat" icon={<ChatIcon />} />
            <NavItem label="Grok" icon={<GrokIcon />} />
            <NavItem label="Premium" icon={<PremiumIcon />} />
            <NavItem label="History" icon={<HistoryIcon />} />
            <NavItem label="Articles" icon={<ArticlesIcon />} />
            <NavItem label="Profile" icon={<ProfileIcon />} />
            <NavItem label="More" icon={<MoreDotsIcon />} />
          </nav>

          {/* Post Action Button */}
          <button
            className="post-btn-sidebar"
            aria-label="Post"
            onClick={onOpenComposeModal}
          >
            Post
          </button>
        </div>

        {/* Authenticated User Profile */}
        <UserCard displayName="Himanshu - You..." handle="@HimanshuYTA" isVerified={true} />
      </div>
    </header>
  );
};
