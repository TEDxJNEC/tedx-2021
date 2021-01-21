import React from 'react';
import aboutPageContent from '../assets/about-content.json';
import Content from '../components/Content';

const About = () => {
<<<<<<< Updated upstream
    return (
        <div>
            
        </div>
    );
}
=======
    const loadedContent = aboutPageContent.map((aboutContent) => {
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

    return <div>{loadedContent}</div>;
};
>>>>>>> Stashed changes

export default About;
