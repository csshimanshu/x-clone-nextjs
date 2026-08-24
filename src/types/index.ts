export type TabType = 'all' | 'priority' | 'mentions';

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
