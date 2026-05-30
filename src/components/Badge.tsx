import React from 'react';
import './Badge.css';

interface BadgeProps {
  children: React.ReactNode;
  variant: 'navy' | 'gold' | 'wine' | 'cream' | 'moss' | 'outline';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant }) => {
  return <span className={`badge badge-${variant}`}>{children}</span>;
};

export default Badge;