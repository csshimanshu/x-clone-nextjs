'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  XLogoIcon,
  HomeIcon,
  HomeIconFilled,
  ExploreIcon,
  NotificationsIcon,
  NotificationsIconFilled,
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
  const pathname = usePathname();

  const isHomeActive = pathname === '/';
  const isNotificationsActive = pathname.startsWith('/notifications');

  return (
    <header className="left-sidebar" role="banner">
      <div className="sidebar-inner">
        <div>
          {/* Logo */}
          <Link href="/" className="logo-link" aria-label="X Logo">
            <XLogoIcon />
          </Link>

          {/* Nav Items */}
          <nav className="nav-menu" role="navigation" aria-label="Primary Navigation">
            <NavItem
              href="/"
              label="Home"
              icon={isHomeActive ? <HomeIconFilled className="nav-icon active-icon" /> : <HomeIcon />}
              active={isHomeActive}
            />
            <NavItem href="/explore" label="Explore" icon={<ExploreIcon />} />
            <NavItem
              href="/notifications"
              label="Notifications"
              icon={
                isNotificationsActive ? (
                  <NotificationsIconFilled className="nav-icon active-icon" />
                ) : (
                  <NotificationsIcon />
                )
              }
              active={isNotificationsActive}
            />
            <NavItem href="/chat" label="Chat" icon={<ChatIcon />} />
            <NavItem href="/grok" label="Grok" icon={<GrokIcon />} />
            <NavItem href="/premium" label="Premium" icon={<PremiumIcon />} />
            <NavItem href="/history" label="History" icon={<HistoryIcon />} />
            <NavItem href="/articles" label="Articles" icon={<ArticlesIcon />} />
            <NavItem href="/profile" label="Profile" icon={<ProfileIcon />} />
            <NavItem href="/more" label="More" icon={<MoreDotsIcon />} />
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
