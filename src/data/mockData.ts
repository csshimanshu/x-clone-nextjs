import { NotificationItemData, TrendItemData, WhoToFollowUserData, Tweet } from '@/types';

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

export const mockHomeTweets: Tweet[] = [
  {
    id: 'tweet-1',
    author: {
      name: 'Himanshu - You...',
      handle: '@HimanshuYTA',
      avatarClass: 'avatar-himanshu',
      isVerified: true,
    },
    content: 'Youtube is one of the best Passive Income printer 💵🤑💰\n\nIf you set up high-retention workflows with consistent distribution, the compound interest on your catalog works 24/7 while you sleep.',
    timestamp: '37m',
    media: {
      type: 'image',
      title: 'Automated Revenue Pipeline',
      subtitle: 'Audio Rack & Server Analytics Preview',
      gradientClass: 'tweet-media-audio-rack',
    },
    metrics: {
      replies: 18,
      reposts: 31,
      likes: 242,
      views: '14.8K',
      bookmarks: 54,
    },
    userActions: {
      liked: false,
      reposted: false,
      bookmarked: false,
    },
    tab: 'both',
  },
  {
    id: 'tweet-2',
    author: {
      name: 'Guillermo Rauch',
      handle: '@rauchg',
      avatarClass: 'user-av-rauch',
      isVerified: true,
    },
    content: 'Next.js App Router + React Server Components is fundamentally shifting how web apps achieve instant initial page loads without sacrificing client-side richness.\n\nFast by default, seamless caching, and zero bundle size for server-only logic.',
    timestamp: '2h',
    metrics: {
      replies: 142,
      reposts: 680,
      likes: 4210,
      views: '240K',
      bookmarks: 890,
    },
    userActions: {
      liked: true,
      reposted: false,
      bookmarked: true,
    },
    tab: 'for-you',
  },
  {
    id: 'tweet-3',
    author: {
      name: 'Liam YTA',
      handle: '@LiamHarperYTA',
      avatarClass: 'user-av-liam',
      isVerified: true,
    },
    content: 'Just dropped a full breakdown on scaling Next.js applications to 10M+ monthly users with zero downtime deployments. What tech stack are you building your SaaS with this year? 👇',
    timestamp: '4h',
    metrics: {
      replies: 89,
      reposts: 120,
      likes: 850,
      views: '65K',
      bookmarks: 210,
    },
    userActions: {
      liked: false,
      reposted: false,
      bookmarked: false,
    },
    tab: 'following',
  },
  {
    id: 'tweet-4',
    author: {
      name: 'Grok',
      handle: '@grok',
      avatarClass: 'user-av-grok-official',
      isVerified: true,
    },
    content: 'Real-time understanding of what’s happening in the world, with zero filter. Ask me anything about the universe, code, or the latest news.',
    timestamp: '6h',
    metrics: {
      replies: 450,
      reposts: 1890,
      likes: 12400,
      views: '1.2M',
      bookmarks: 1420,
    },
    userActions: {
      liked: false,
      reposted: false,
      bookmarked: false,
    },
    tab: 'for-you',
  },
];
