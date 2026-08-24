'use client';

import React, { useState } from 'react';
import { SearchIcon } from '@/components/Icons';

export const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="search-box-container">
      <div className="search-box">
        <SearchIcon />
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          aria-label="Search X"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
};
