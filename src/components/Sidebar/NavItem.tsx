'use client';

import React from 'react';
import Link from 'next/link';

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  active?: boolean;
  href?: string;
  onClick?: () => void;
}

export const NavItem: React.FC<NavItemProps> = ({
  label,
  icon,
  active = false,
  href = '#',
  onClick,
}) => {
  if (onClick) {
    return (
      <button
        className={`nav-item ${active ? 'active' : ''}`}
        aria-label={label}
        aria-current={active ? 'page' : undefined}
        onClick={onClick}
      >
        {icon}
        <span className={`nav-label ${active ? 'bold-label' : ''}`}>{label}</span>
      </button>
    );
  }

  return (
    <Link
      href={href}
      className={`nav-item ${active ? 'active' : ''}`}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
    >
      {icon}
      <span className={`nav-label ${active ? 'bold-label' : ''}`}>{label}</span>
    </Link>
  );
};
