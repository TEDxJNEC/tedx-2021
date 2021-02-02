import React from 'react';
import aboutPageData from '../assets/about-content.json';
import Content from '../components/Content';
import AboutDetails from '../components/AboutDetails';
import AboutCenterDesign from '../components/AboutCenterDesign';
import '../common/main.scss';

import DefaultLayout from '../layouts';
const About = () => {
    const renderContent = aboutPageData.map((aboutData) => {
        return (
            <DefaultLayout>
                <div key={aboutData.id}>
                    <Content
                        headline={aboutData.headline}
                        content={aboutData.content}
                        iframeTitle={aboutData.tedxIframeTitle}
                        iframeLink={aboutData.tedxIframeLink}
                        reverseOrder={false}
                    />
                </div>
                <div className='center-design-wrapper'>
                    <AboutCenterDesign />
                </div>
                <div className='details-section'>
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
