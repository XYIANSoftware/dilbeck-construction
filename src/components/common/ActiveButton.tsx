'use client';

import React from 'react';

interface ActiveButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const ActiveButton: React.FC<ActiveButtonProps> = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`active-menu-button w-full h-14 justify-center text-center px-6 py-4 text-lg font-medium transition-all duration-300 rounded-xl border shadow-sm hover:shadow-md ${className}`}
    >
      {label}
    </button>
  );
};

export default ActiveButton;
