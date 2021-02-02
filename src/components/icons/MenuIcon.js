import React from 'react';
import '../../common/colors.scss';

const MenuIcon = () => {
  const styleIcon = { width: '3rem', height: '3rem' };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={styleIcon}
      fill="#d3a34c"
      viewBox="0 0 64 64"
    >
      <g id="Layer_47" data-name="Layer 47">
        <path d="M12,20.84H32a1.5,1.5,0,0,0,0-3H12A1.5,1.5,0,0,0,12,20.84Z" />
        <path d="M53.5,32A1.5,1.5,0,0,0,52,30.5H12a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,53.5,32Z" />
        <path d="M52,43.16H32a1.5,1.5,0,0,0,0,3H52A1.5,1.5,0,0,0,52,43.16Z" />
      </g>
    </svg>
  );
};
export default MenuIcon;
