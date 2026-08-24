import React from 'react';
import { mockTrends } from '@/data/mockData';

export const WhatsHappening: React.FC = () => {
  return (
    <section className="widget-card" aria-labelledby="whats-happening-heading">
      <h2 className="widget-title" id="whats-happening-heading">
        What’s happening
      </h2>

      {/* Live Event Item: Sidemen Outside */}
      <div className="event-item" tabIndex={0}>
        <div className="event-thumb orange-gradient">
          <div className="event-badge-text">OUTSIDE</div>
        </div>
        <div className="event-info">
          <h3 className="event-title">Sidemen: Outside</h3>
          <span className="event-status">LIVE</span>
        </div>
      </div>

      {/* Trending Items List */}
      {mockTrends.map((trend) => (
        <div key={trend.id} className="trend-item" tabIndex={0}>
          <div className="trend-meta">
            <span className="trend-category">{trend.category}</span>
            <button className="trend-more-btn" aria-label={`More options for ${trend.topic}`}>
              <svg viewBox="0 0 24 24" className="dots-small">
                <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path>
              </svg>
            </button>
          </div>
          <div className="trend-topic">{trend.topic}</div>
        </div>
      ))}

      {/* Show more link */}
      <a href="#" className="widget-show-more">
        Show more
      </a>
    </section>
  );
};
