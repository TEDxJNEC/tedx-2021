import React from 'react';
import { Helmet } from 'react-helmet';
import AmbassadorRegistration from 'components/AmbassadorRegistration';
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
          <title>ABOUT | TEDx JNEC</title>
          <meta
            name="description"
            content="TEDxJNEC is all about sparking conversations and making great ideas accessible. We believe passion is contagious, and wish to spread our speaker’s commitment to innovation thus creating a unique space where we expand our Perceptions."
          />
          <meta
            name="keywords"
            content="ted,tedx, jnec, tedxjnec, team, mgmjnec, aurangabad, tedxaurangabad, best, event, tedxtalk, talk, tedtalk, events, engineering, college, pruthvi, shetty, web, kintsugi, tedxjnec,mgm,mgmu,pruthvishetty,top,events,about"
          />
          <meta name="author" content="pruthvishetty" />

          <meta property="og:url" content="https://tedxjnec.com/" />
          <meta property="og:title" content="ABOUT | TEDx JNEC | Kintsugi" />
          <meta
            property="og:description"
            content="TEDxJNEC is all about sparking conversations and making great ideas accessible. We believe passion is contagious, and wish to spread our speaker’s commitment to innovation thus creating a unique space where we expand our Perceptions."
          />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="TEDxJNEC" />
          <meta property="og:locale" content="en_us" />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@tedxjnec" />
          <meta name="twitter:creator" content="@pruthvi2103" />
          <meta name="twitter:url" content="https://tedxjnec.com/about" />
          <meta name="twitter:title" content="ABOUT | TEDx JNEC | Kintsugi" />
          <meta
            name="twitter:description"
            content="TEDxJNEC is all about sparking conversations and making great ideas accessible. We believe passion is contagious, and wish to spread our speaker’s commitment to innovation thus creating a unique space where we expand our Perceptions."
          />
          <link rel="author" href="//github.com/pruthvi2103" />
          <link rel="canonical" href="//tedxjnec.com/about" />
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
        <AmbassadorRegistration />
      </DefaultLayout>
    );
  });

  return <div>{renderContent}</div>;
};

export default About;
