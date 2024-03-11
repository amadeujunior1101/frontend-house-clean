import React from 'react';

interface IconPauseProps {
  width?: number;
  height?: number;
}

const IconPause: React.FC<IconPauseProps> = ({ width = 50, height = 50 }) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
    <circle cx="256" cy="256" r="246" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20px" />
    <line x1="202.52" y1="159.74" x2="202.52" y2="352.26" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20px" />
    <line x1="309.48" y1="159.74" x2="309.48" y2="352.26" fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="20px" />
  </svg>
);

export { IconPause };
