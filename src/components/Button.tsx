import React from 'react';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: 'primary' | 'secondary' | 'ghost' | 'gold' | 'white';
}

export const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', style, ...rest }) => {
  return (
    <button className={`btn btn-${variant}`} style={style} {...rest}>
      {label}
    </button>
  );
};

export default Button;
