export type TabType = 'all' | 'priority' | 'mentions';

export type HomeTabType = 'for-you' | 'following';

export type NotificationType = 'follow' | 'like' | 'repost' | 'verified' | 'post-alert';

export interface AvatarSpec {
  type: 'css-class' | 'initial' | 'svg-custom';
  className?: string;
  initialText?: string;
  bg?: string;
  textColor?: string;
}

export interface NotificationItemData {
  id: string;
  type: NotificationType;
  highlighted?: boolean;
  avatars: AvatarSpec[];
  primaryActor: string;
  secondaryCount?: number;
  actionText: string;
  time: string;
  postSnippet?: string;
  subText?: string;
  hasMediaPreview?: boolean;
  isVerifiedActor?: boolean;
}

export interface TrendItemData {
  id: string;
  category: string;
  topic: string;
}

export interface WhoToFollowUserData {
  id: string;
  name: string;
  handle: string;
  isVerified?: boolean;
  followsYou?: boolean;
  avatarClass: string;
  initialFollowingState?: boolean;
}

export interface TweetMedia {
  type: 'image' | 'poll' | 'quote';
  url?: string;
  title?: string;
  subtitle?: string;
  gradientClass?: string;
}

export interface TweetAuthor {
  name: string;
  handle: string;
  avatarClass?: string;
  avatarUrl?: string;
  isVerified?: boolean;
  isGoldVerified?: boolean;
}

export interface TweetMetrics {
  replies: number;
  reposts: number;
  likes: number;
  views: string;
  bookmarks: number;
}

export interface TweetUserActions {
  liked?: boolean;
  reposted?: boolean;
  bookmarked?: boolean;
}

export interface Tweet {
  id: string;
  author: TweetAuthor;
  content: string;
  timestamp: string;
  media?: TweetMedia;
  metrics: TweetMetrics;
  userActions?: TweetUserActions;
  tab?: HomeTabType | 'both';
}
