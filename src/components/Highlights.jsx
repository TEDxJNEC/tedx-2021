import React from 'react'
import "../common/highlights.scss"
import {data, titles} from "../assets/highlights.js"




const Highlights = () => {
    return (
        <div>
            <div className="container">
                <div>
                    <h1>{titles.label1}</h1>
                    
                    <div className="photo-grid">
                        {data.images2019.map(src => (
                            <div className="card"
                                key={src}
                                style={{
                                    backgroundImage: `url(${src})`
                                }}
                            />
                            
                        ))}
                                            <div className="video">
                        {data.youtubeLinks19.map(ytLink => (
                            <div className="single-video">
                            <iframe
                            className='tedx-iframe'
                            key={ytLink}
                            title={titles.iFrameTitle1}
                            src={ytLink}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                        </div>
                        ))}
                        
                    </div>
                    </div>

                </div>
                <div>
                    <h1>{titles.label2}</h1>
                    <div className="photo-grid">
                        {data.images2018.map(src => (
                            <div className="card"
                                key={src}
                                style={{
                                
                                    backgroundImage: `url(${src})`
                                }}
                            />
                            
                        ))}
                    </div>
                    <div className="video">
                        {data.youtubeLinks18.map(ytLink => (
                            <div className="single-video">
                            <iframe
                            className='tedx-iframe'
                            key={ytLink}
                            title={titles.iFrameTitle2}
                            src={ytLink}
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                        </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Highlights
