import React from 'react';
import '../common/main.scss';

const Content = ({
    headline,
    content,
    iframeLink,
    iFrameTitle,
    reverseOrder = false,
}) => {
    const contentColumn = (
        <div className='column'>
            <h1 className='content-headline'>{headline}</h1>
            <p>{content}</p>
        </div>
    );

    const iFrameColumn = (
        <div className='column'>
            <div className='content-wrapper'>
                <iframe
                    className='tedx-iframe'
                    title={iFrameTitle}
                    src={iframeLink}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );

    let renderedContent = (
        <React.Fragment>
            {contentColumn}
            {iFrameColumn}
        </React.Fragment>
    );

    if (reverseOrder) {
        renderedContent = (
            <React.Fragment>
                {iFrameColumn}
                {contentColumn}
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <section>
                <div className='row'>{renderedContent}</div>
            </section>
        </React.Fragment>
    );
};

export default Content;
