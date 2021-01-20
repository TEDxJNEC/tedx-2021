import React from 'react';
import '../common/main.scss';

const Content = () => {
    return (
        <React.Fragment>
            <section>
                <div className='row'>
                    <div className='column'>
                        <h1 className='content-headline'>Test Headline</h1>
                        <p>
                            In the spirit of ideas worth spreading, TED has
                            created a program called TEDx. TEDx is a program of
                            local, self-organized events that bring people
                            together to share a TED-like experience. Our event
                            is called TEDxJNEC, where x = independently
                            organized TED event. At our TEDxJNEC event, TEDTalks
                            video and live speakers will combine to spark deep
                            discussion and connection in a small group. The TED
                            Conference provides general guidance for the TEDx
                            program, but individual TEDx events, including ours,
                            are self-organized.
                        </p>
                    </div>
                    <div className='column'>
                        <div className='content-wrapper'>
                            <iframe
                                className='tedx-iframe'
                                title='TEDx'
                                src='https://www.youtube.com/embed/d0NHOpeczUU'
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
