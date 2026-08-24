'use client';

import React, { useState } from 'react';
import { HomeTabType, Tweet } from '@/types';
import { mockHomeTweets } from '@/data/mockData';
import { HomeTabsNav } from './HomeTabsNav';
import { TweetComposer } from './TweetComposer';
import { TweetCard } from './TweetCard';

export const HomeFeed: React.FC = () => {
  const [activeTab, setActiveTab] = useState<HomeTabType>('for-you');
  const [tweets, setTweets] = useState<Tweet[]>(mockHomeTweets);

  const handlePostTweet = (newContent: string) => {
    const newTweet: Tweet = {
      id: `tweet-${Date.now()}`,
      author: {
        name: 'Himanshu - You...',
        handle: '@HimanshuYTA',
        avatarClass: 'avatar-himanshu',
        isVerified: true,
      },
      content: newContent,
      timestamp: 'just now',
      metrics: {
        replies: 0,
        reposts: 0,
        likes: 0,
        views: '1',
        bookmarks: 0,
      },
      userActions: {
        liked: false,
        reposted: false,
        bookmarked: false,
      },
      tab: 'both',
    };

    setTweets((prev) => [newTweet, ...prev]);
  };

  const filteredTweets = tweets.filter(
    (t) => t.tab === 'both' || t.tab === activeTab
  );

  return (
    <main className="main-content" role="main">
      {/* Sticky Tabs Bar */}
      <HomeTabsNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Inline Post Composer */}
      <TweetComposer onPostTweet={handlePostTweet} />

      {/* Tweets Stream */}
      <div className="home-feed-stream" role="feed" aria-label="Home timeline">
        {filteredTweets.map((tweet) => (
          <TweetCard key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </main>
  );
};
