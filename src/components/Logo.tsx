import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <img src="logo.png" alt="Wex Info Logo" className="h-full w-auto" />
    </div>
  );
};

export default Logo;
