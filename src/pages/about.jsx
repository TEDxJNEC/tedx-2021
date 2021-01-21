import React from 'react';
import aboutPageContent from '../assets/about-content.json';
import Content from '../components/Content';

const About = () => {
<<<<<<< Updated upstream
<<<<<<< Updated upstream
    return (
        <div>
            
        </div>
    );
}
=======
    const loadedContent = aboutPageContent.map((aboutContent) => {
=======
    const content = aboutPageContent.map((aboutContent) => {
>>>>>>> Stashed changes
        return (
            <div>
                <Content
                    headline={aboutContent.headline}
                    content={aboutContent.content}
                    iframeTitle={aboutContent.tedxIframeTitle}
                    iframeLink={aboutContent.tedxIframeLink}
                />
            </div>
        );
    });

<<<<<<< Updated upstream
    return <div>{loadedContent}</div>;
=======
    return <div>{content}</div>;
>>>>>>> Stashed changes
};
>>>>>>> Stashed changes

export default About;
