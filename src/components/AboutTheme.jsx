import React from 'react';
import 'common/about-theme.scss';
import KinsugiHead from 'assets/kintsugihead.webp';
import KintsugiHeadline from 'assets/theme-logo.svg';

const contentMatter = `            Perfection is an illusion! There's always scope for continuous
            improvement. No matter how hard we try to idealise things, they may
            fall apart. That's life. But one must not take it as a complete
            failure, if you're wise, you can use every scrap, patch yourself up
            and keep going.The theme for TEDxJNEC 2021 is 'KINTSUGI'- it's the
            Japanese art of putting broken pottery pieces back together with
            gold — built on the idea that in embracing flaws and imperfections,
            you can create an even stronger, more beautiful piece of art.`;
const AboutTheme = () => {
  return (
    <div className="about-theme-container">
      <div className="about-theme-section">
        <div className="highlights-heading">ABOUT THEME</div>
        <hr className="highlights-heading-underline" />
        <div className="about-theme-flex">
          <div className="theme-content">
            <div className="theme-headline-wrapper">
              <img
                src={KintsugiHeadline}
                alt="Kintsugi Logo"
                className="theme-headline"
              />
            </div>
            <div className="theme-content-matter">{contentMatter}</div>
          </div>
          <div className="theme-photo">
            <img
              src={KinsugiHead}
              alt="Kintsugi Head"
              className="theme-photo-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheme;
