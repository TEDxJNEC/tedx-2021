import React from 'react';
import 'common/about-theme.scss';

import KintsugiHeadline from 'assets/theme-logo.svg';

const AboutTheme = () => {
  return (
    <div className="about-theme-container">
      <div className="about-theme-section">
        <div className="theme-headline-wrapper">
          <img
            src={KintsugiHeadline}
            alt="Kintsugi Logo"
            className="theme-headline"
          />
        </div>
        <hr className="highlights-heading-underline" />
        <div className="about-theme-flex">
          <div className="highlights-heading">TEDx JNEC 2021</div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheme;
