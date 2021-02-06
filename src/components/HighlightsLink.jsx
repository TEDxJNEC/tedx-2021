import React from 'react';
import '../common/main.scss';
import TEDx2018 from '../assets/tedx_2018.webp';
import TEDx2019 from '../assets/tedx_2019.webp';

const HighlightsLink = () => {
  return (
    <div className="highlights-box">
      <div className="highlights-heading">Highlights</div>
      <div className="flex-container-highlights">
        <div className="flex-column-highlights">
          <img className="highlights-image" src={TEDx2018} alt="" />
          <div className="highlights-image-text">Trailblazers</div>
        </div>
        <div className="flex-column-highlights">
          <img className="highlights-image" src={TEDx2019} alt="" />
          <div className="highlights-image-text">Unboxing the Brain Box</div>
        </div>
      </div>
    </div>
  );
};

export default HighlightsLink;
