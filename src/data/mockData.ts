import { NotificationItemData, TrendItemData, WhoToFollowUserData } from '@/types';

export const mockNotifications: NotificationItemData[] = [
  {
    id: 'notif-1',
    type: 'follow',
    highlighted: true,
    avatars: [
      { type: 'css-class', className: 'user-av-raja' },
      { type: 'css-class', className: 'user-av-2' },
      { type: 'initial', initialText: 'J', className: 'teal-j' },
      { type: 'css-class', className: 'user-av-spiderman' },
    ],
    primaryActor: 'Raja usman',
    secondaryCount: 3,
    actionText: 'followed you',
    time: '8m',
  },
  {
    id: 'notif-2',
    type: 'like',
    highlighted: false,
    avatars: [
      { type: 'css-class', className: 'user-av-darkman' },
      { type: 'initial', initialText: 'WNDY', className: 'green-wndy' },
      { type: 'css-class', className: 'user-av-comic' },
      { type: 'initial', initialText: '$', className: 'pink-dollar' },
      { type: 'css-class', className: 'user-av-doge' },
      { type: 'initial', initialText: 'FUTBOLIN\nMADRID', className: 'black-futbol' },
      { type: 'css-class', className: 'user-av-duck' },
      { type: 'css-class', className: 'user-av-moon' },
      { type: 'css-class', className: 'user-av-beard' },
      { type: 'css-class', className: 'user-av-mask' },
    ],
    primaryActor: 'Muhammad Siddiquie',
    secondaryCount: 30,
    actionText: 'liked your post',
    time: '37m',
    postSnippet: 'Youtube is one of the best Passive Income printer 💵🤑💰',
    hasMediaPreview: true,
  },
  {
    id: 'notif-3',
    type: 'repost',
    highlighted: false,
    avatars: [
      { type: 'css-class', className: 'user-av-riolu' },
    ],
    primaryActor: 'The hypnotized Riolu',
    actionText: 'reposted your post',
    time: '1h',
    postSnippet: 'Youtube is one of the best Passive Income printer 💵🤑💰',
    hasMediaPreview: true,
  },
  {
    id: 'notif-4',
    type: 'verified',
    highlighted: false,
    avatars: [
      { type: 'css-class', className: 'user-av-himanshu-small' },
    ],
    primaryActor: 'Your blue checkmark is here!',
    actionText: '',
    time: '1h',
    subText: 'Your account is now verified.',
  },
  {
    id: 'notif-5',
    type: 'post-alert',
    highlighted: false,
    avatars: [
      { type: 'css-class', className: 'user-av-newspaper' },
      { type: 'css-class', className: 'user-av-blue-circle' },
      { type: 'css-class', className: 'user-av-blonde' },
      { type: 'css-class', className: 'user-av-hoodie' },
      { type: 'css-class', className: 'user-av-retro' },
      { type: 'css-class', className: 'user-av-cap' },
    ],
    primaryActor: 'phed',
    isVerifiedActor: true,
    secondaryCount: 5,
    actionText: '',
    time: '2h',
  },
  {
    id: 'notif-6',
    type: 'follow',
    highlighted: false,
    avatars: [
      { type: 'css-class', className: 'user-av-abhhay' },
    ],
    primaryActor: 'Abhhay Shaarma',
    actionText: 'followed you',
    time: '9h',
  },
];

export const mockTrends: TrendItemData[] = [
  {
    id: 'trend-1',
    category: 'Trending in India',
    topic: '#SaiAbhyankkar',
  },
  {
    id: 'trend-2',
    category: 'Entertainment · Trending',
    topic: '#DhruvVikram',
  },
  {
    id: 'trend-3',
    category: 'Trending in India',
    topic: 'इंडिया गेट',
  },
  {
    id: 'trend-4',
    category: 'Entertainment · Trending',
    topic: '#KiaraAdvani',
  },
];

export const mockWhoToFollow: WhoToFollowUserData[] = [
  {
    id: 'user-1',
    name: 'Daniel',
    handle: '@DevoY...',
    followsYou: true,
    avatarClass: 'user-av-daniel',
    initialFollowingState: false,
  },
  {
    id: 'user-2',
    name: 'Liam YTA',
    handle: '@LiamHarperYTA',
    isVerified: true,
    avatarClass: 'user-av-liam',
    initialFollowingState: false,
  },
];
