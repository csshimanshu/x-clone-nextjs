import React from 'react';

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
  return (
    <a
      href={href}
      className={`nav-item ${active ? 'active' : ''}`}
      aria-label={label}
      aria-current={active ? 'page' : undefined}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {icon}
      <span className={`nav-label ${active ? 'bold-label' : ''}`}>{label}</span>
    </a>
  );
};
