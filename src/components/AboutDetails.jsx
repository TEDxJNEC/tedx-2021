import React from 'react';
import { TED, TEDx } from 'components/icons';
import '../common/main.scss';

const AboutDetails = ({ content, logo }) => {
  return (
    <div className="flex-container">
      <div className="flex-column">
        <div className="details-headline">
          {logo === 'TED' ? <TED /> : <TEDx />}
        </div>
        <div className="details-content">{content}</div>
      </div>
    </div>
  );
};

export default AboutDetails;
