import React from 'react';
import './Input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, ...props }) => {
  return (
    <div className="input-group">
      <label htmlFor={id} className="ds-label-input">{label}</label>
      <input id={id} className="ds-input" {...props} />
    </div>
  );
};