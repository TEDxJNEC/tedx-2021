import React from 'react';
import '../common/main.scss';
import { Link } from 'react-router-dom';
import ROUTES from 'constants/routes';
import TEDx2018 from '../assets/tedx_2018.webp';
import TEDx2019 from '../assets/tedx_2019.webp';

const { HIGHLIGHT } = ROUTES;
const HighlightsLink = () => {
  return (
    <div className="highlights-box">
      <div className="highlights-heading">HIGHLIGHTS</div>
      <hr className="highlights-heading-underline" />
      <div className="flex-container-highlights">
        <Link to={HIGHLIGHT}>
          <div className="flex-column-highlights">
            <img className="highlights-image" src={TEDx2018} alt="" />
            <div className="highlights-image-text">Trailblazers</div>
          </div>
        </Link>
        <Link to={HIGHLIGHT}>
          <div className="flex-column-highlights">
            <img className="highlights-image" src={TEDx2019} alt="" />
            <div className="highlights-image-text">Unboxing the Brain Box</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HighlightsLink;
