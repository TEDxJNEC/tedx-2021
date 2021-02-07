import React from 'react';
import '../../common/colors.scss';

const CloseMenu = () => {
  const styleIcon = { width: '3rem', height: '2rem' };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 45.82 45.82"
      style={styleIcon}
      fill="#d3a34c"
    >
      <title>Close</title>

      <g id="Layer_2" data-name="Layer 2">
        <g id="Close">
          <path
            className="cls-1"
            d="M45.09 45.09a2.52 2.52 0 0 1-3.54 0L28.91 32.45l-1.77-1.77a2.5 2.5 0 0 1 0-3.54 2.5 2.5 0 0 1 3.54 0l1.77 1.77 12.64 12.64a2.52 2.52 0 0 1 0 3.54z"
          />
          <path
            className="cls-2"
            d="M45.09.73a2.52 2.52 0 0 0-3.54 0L22.91 19.37 4.27.73a2.51 2.51 0 0 0-3.54 0 2.52 2.52 0 0 0 0 3.54l18.64 18.64L.73 41.55a2.5 2.5 0 0 0 3.54 3.54L45.09 4.27a2.51 2.51 0 0 0 0-3.54z"
          />
        </g>
      </g>
    </svg>
  );
};

export default CloseMenu;
