import React from 'react';

interface IconPlayProps {
  width?: number;
  height?: number;
}

const IconPlay: React.FC<IconPlayProps> = ({ width = 50, height = 50 }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 67.733332 67.733335"
      enableBackground="new"
      version="1.1"
    >
      <g transform="translate(0,-229.26665)">
        <circle
          r="31.75"
          cy="263.13333"
          cx="33.866665"
          style={{ fill: 'none', fillRule: 'evenodd', strokeWidth: '4.23333334', stroke: '#000000' }}
        />
      </g>
      <g>
        <path
          d="M 21.166667,50.799999 55.033333,32.455557 21.166667,16.933333"
          style={{
            opacity: 1,
            vectorEffect: 'none',
            fill: '#000000',
            fillOpacity: 1,
            stroke: '#000000',
            strokeWidth: '0.18423219px',
            strokeLinecap: 'butt',
            strokeLinejoin: 'miter',
            strokeMiterlimit: 4,
            strokeDasharray: 'none',
            strokeDashoffset: 0,
            strokeOpacity: 1,
          }}
        />
      </g>
    </svg>
  );
};

export { IconPlay };
