import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const XLogoIcon: React.FC<IconProps> = ({ className = 'x-logo-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 1.696L.622 8.807l1.06 1.696L3 9.679V19.5C3 20.881 4.119 22 5.5 22h13c1.381 0 2.5-1.119 2.5-2.5V9.679l1.318.824 1.06-1.696L12 1.696zM19 19.5c0 .276-.224.5-.5.5h-13c-.276 0-.5-.224-.5-.5V8.428l7-4.375 7 4.375V19.5z"></path>
  </svg>
);

export const HomeIconFilled: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M21.591 7.146L12.52 1.157c-.316-.21-.724-.21-1.04 0L2.409 7.146C1.866 7.505 1.5 8.125 1.5 8.789V20c0 1.105.895 2 2 2h4.5c.552 0 1-.448 1-1v-5c0-.552.448-1 1-1h4c.552 0 1 .448 1 1v5c0 .552.448 1 1 1H20.5c1.105 0 2-.895 2-2V8.789c0-.664-.366-1.284-.909-1.643z"></path>
  </svg>
);

export const ExploreIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
  </svg>
);

export const NotificationsIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
  </svg>
);

export const NotificationsIconFilled: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958zM12 20c-1.306 0-2.417-.835-2.829-2h5.658c-.412 1.165-1.523 2-2.829 2z"></path>
  </svg>
);

export const ChatIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5v13c0 1.381-1.119 2.5-2.5 2.5h-4.72l-5.28 3.52V21h-5c-1.381 0-2.5-1.119-2.5-2.5v-13zm2.5-.5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h6v2.18l3.28-2.18h5.72c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-15z"></path>
  </svg>
);

export const GrokIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4.5 12a7.5 7.5 0 0 1 12.8-5.3l1.42-1.42A9.5 9.5 0 1 0 5.28 18.72l1.42-1.42A7.48 7.48 0 0 1 4.5 12zm15 0a7.48 7.48 0 0 1-2.2 5.3l1.42 1.42a9.5 9.5 0 0 0 0-13.44l-1.42 1.42A7.48 7.48 0 0 1 19.5 12zM3.29 20.71l17.42-17.42 1.42 1.42L4.71 22.13z"></path>
  </svg>
);

export const PremiumIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
  </svg>
);

export const HistoryIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
  </svg>
);

export const ArticlesIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM7 7h10v2H7V7zm0 4h10v2H7v-2zm0 4h7v2H7v-2z"></path>
  </svg>
);

export const ProfileIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5.651 19h12.698c-.507-2.86-3.194-5-6.349-5s-5.842 2.14-6.349 5zm6.349-7c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm8.307 9H3.693C4.301 16.32 8.01 13 12 13s7.699 3.32 8.307 8zM12 2C8.691 2 6 4.691 6 8s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"></path>
  </svg>
);

export const MoreDotsIcon: React.FC<IconProps> = ({ className = 'nav-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3.75 12c0-1.24 1.01-2.25 2.25-2.25S8.25 10.76 8.25 12 7.24 14.25 6 14.25 3.75 13.24 3.75 12zm8.25 0c0-1.24 1.01-2.25 2.25-2.25S16.5 10.76 16.5 12 15.49 14.25 14.25 14.25 12 13.24 12 12zm8.25 0c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25-1.01 2.25-2.25 2.25-2.25-1.01-2.25-2.25z"></path>
  </svg>
);

export const VerifiedBadge: React.FC<IconProps> = ({ className = 'verified-badge-small' }) => (
  <svg className={className} viewBox="0 0 22 22" aria-label="Verified account">
    <g fill="#1d9bf0">
      <path d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.136 2.136 5.378-5.378 1.293 1.302-6.671 6.67z" fill="#1d9bf0"></path>
    </g>
  </svg>
);

export const SettingsIcon: React.FC<IconProps> = ({ className = 'header-icon' }) => (
  <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
    <path d="M10.54 1.75h2.92l1.57 2.36c.11.17.32.25.53.21l2.73-.59 2.06 2.06-.59 2.73c-.04.21.04.42.21.53l2.36 1.57v2.92l-2.36 1.57c-.17.11-.25.32-.21.53l.59 2.73-2.06 2.06-2.73-.59c-.21-.04-.42.04-.53.21l-1.57 2.36h-2.92l-1.57-2.36c-.11-.17-.32-.25-.53-.21l-2.73.59-2.06-2.06.59-2.73c.04-.21-.04-.42-.21-.53L1.75 13.46v-2.92l2.36-1.57c.17-.11.25-.32.21-.53L3.73 5.71l2.06-2.06 2.73.59c.21.04.42-.04.53-.21l1.52-2.28zM12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z"></path>
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className = 'search-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path>
  </svg>
);

export const FollowIcon: React.FC<IconProps> = ({ className = 'notif-type-icon icon-follow' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Follow notification">
    <path d="M17.863 13.445c2.108 1.254 3.637 3.491 3.637 6.055H2.5c0-2.564 1.529-4.801 3.637-6.055C4.269 12.016 3 9.66 3 7c0-3.866 3.134-7 7-7s7 3.134 7 7c0 2.66-1.269 5.016-3.137 6.445z"></path>
  </svg>
);

export const LikeHeartIcon: React.FC<IconProps> = ({ className = 'notif-type-icon icon-like' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Like notification">
    <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 8.67l-.505.41-.505-.41c-4.377-3.55-7.027-6.19-8.38-8.67-1.464-2.68-1.572-5.46-.29-7.58 1.258-2.09 3.64-3.11 6.55-2.58 1.583.29 2.977 1.15 3.905 2.37.928-1.22 2.322-2.08 3.905-2.37 2.91-.53 5.292.49 6.55 2.58 1.282 2.12 1.174 4.9-.29 7.58z"></path>
  </svg>
);

export const RepostIcon: React.FC<IconProps> = ({ className = 'notif-type-icon icon-repost' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Repost notification">
    <path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z"></path>
  </svg>
);

export const BellIcon: React.FC<IconProps> = ({ className = 'notif-type-icon icon-bell' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-label="Post alert notification">
    <path d="M19.993 9.042C19.48 5.017 16.054 2 11.996 2s-7.49 3.021-7.999 7.051L2.866 18H7.1c.463 2.282 2.481 4 4.9 4s4.437-1.718 4.9-4h4.236l-1.143-8.958z"></path>
  </svg>
);

/* Tweet action icons */
export const ReplyIcon: React.FC<IconProps> = ({ className = 'tweet-action-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z"></path>
  </svg>
);

export const HeartOutlineIcon: React.FC<IconProps> = ({ className = 'tweet-action-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-2.415.11-4.3 2.11-4.3 4.65 0 2.51 1.28 4.74 3.737 6.84l5.259 4.51 5.259-4.51c2.457-2.1 3.737-4.33 3.737-6.84 0-2.54-1.885-4.54-4.3-4.65zm-4.697 14.54l-6.14-5.26c-2.18-1.87-3.36-3.79-3.36-5.88 0-3.62 2.77-6.53 6.36-6.69 1.76-.08 3.59.62 4.77 2.11 1.18-1.49 3.01-2.19 4.77-2.11 3.59.16 6.36 3.07 6.36 6.69 0 2.09-1.18 4.01-3.36 5.88l-6.14 5.26z"></path>
  </svg>
);

export const HeartFilledIcon: React.FC<IconProps> = ({ className = 'tweet-action-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="rgb(249, 24, 128)">
    <path d="M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 8.67l-.505.41-.505-.41c-4.377-3.55-7.027-6.19-8.38-8.67-1.464-2.68-1.572-5.46-.29-7.58 1.258-2.09 3.64-3.11 6.55-2.58 1.583.29 2.977 1.15 3.905 2.37.928-1.22 2.322-2.08 3.905-2.37 2.91-.53 5.292.49 6.55 2.58 1.282 2.12 1.174 4.9-.29 7.58z"></path>
  </svg>
);

export const ViewsIcon: React.FC<IconProps> = ({ className = 'tweet-action-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
  </svg>
);

export const BookmarkOutlineIcon: React.FC<IconProps> = ({ className = 'tweet-action-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
  </svg>
);

export const BookmarkFilledIcon: React.FC<IconProps> = ({ className = 'tweet-action-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true" fill="rgb(29, 155, 240)">
    <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path>
  </svg>
);

export const ShareIcon: React.FC<IconProps> = ({ className = 'tweet-action-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41L7.71 9.71 6.3 8.29 12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21.01 3 19.9 3 18.51V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z"></path>
  </svg>
);

export const GlobeIcon: React.FC<IconProps> = ({ className = 'globe-icon' }) => (
  <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
  </svg>
);
