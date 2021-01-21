import React from 'react';
import '../common/main.scss';

const Content = ({ headline, content, iframeLink, iFrameTitle }) => {
    return (
        <React.Fragment>
            <section>
                <div className='row'>
                    <div className='column'>
                        <h1 className='content-headline'>{headline}</h1>
                        <p>{content}</p>
                    </div>
                    <div className='column'>
                        <div className='content-wrapper'>
                            <iframe
                                className='tedx-iframe'
                                title={iFrameTitle}
                                src={iframeLink}
                                frameborder='0'
                                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Content;
