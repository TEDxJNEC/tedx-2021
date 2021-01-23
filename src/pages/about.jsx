import React from 'react';
import aboutPageData from '../assets/about-content.json';
import Content from '../components/Content';
import DefaultLayout from '../layouts'
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
            </DefaultLayout>
        );
    });

    return <div>{renderContent}</div>;
};

export default About;
