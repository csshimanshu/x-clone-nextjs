import React from 'react';
import { SearchBar } from './SearchBar';
import { WhatsHappening } from './WhatsHappening';
import { WhoToFollow } from './WhoToFollow';
import { FloatingActions } from './FloatingActions';

export const RightSidebar: React.FC = () => {
  return (
    <aside className="right-sidebar" role="complementary">
      <div className="right-sidebar-inner">
        <SearchBar />
        <WhatsHappening />
        <WhoToFollow />
        <FloatingActions />
      </div>
    </aside>
  );
};
