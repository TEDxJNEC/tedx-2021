import React from 'react';
import { Helmet } from 'react-helmet';
import aboutPageData from '../assets/about-content.json';
import Content from '../components/Content';
import AboutDetails from '../components/AboutDetails';
import AboutCenterDesign from '../components/AboutCenterDesign';
import { LeftDesign } from '../components/icons/index';
import '../common/main.scss';

import DefaultLayout from '../layouts';

const About = () => {
  const renderContent = aboutPageData.map((aboutData) => {
    return (
      <DefaultLayout>
        <Helmet>
          <title>About TEDx JNEC</title>
          <meta
            name="description"
            content="TEDxJNEC is all about sparking conversations and making great ideas accessible. We believe passion is contagious, and wish to spread our speaker’s commitment to innovation thus creating a unique space where we expand our Perceptions."
          />
        </Helmet>
        <div key={aboutData.id}>
          <Content
            headline={aboutData.headline}
            content={aboutData.content}
            iframeTitle={aboutData.tedxIframeTitle}
            iframeLink={aboutData.tedxIframeLink}
            reverseOrder={false}
          />
        </div>
        <div className="center-design-wrapper">
          <div className="left-container">
            <LeftDesign />
          </div>
          <AboutCenterDesign />
          <div className="right-container">
            <LeftDesign />
          </div>
        </div>
        <div className="details-section">
          <div>
            <AboutDetails
              logo={aboutData.tedHeading}
              content={aboutData.tedxContent}
            />
          </div>
          <div>
            <AboutDetails
              logo={aboutData.tedxHeading}
              content={aboutData.tedContent}
            />
          </div>
        </div>
      </DefaultLayout>
    );
  });

  return <div>{renderContent}</div>;
};

export default About;
