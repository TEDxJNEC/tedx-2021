import React from 'react'
import "../common/highlights.scss"

const Highlights = ({ label, images, youtubeVideos }) => {
    return (
        <div className="container">
            <div className="glimpse-wrapper">
                <h1>{label}</h1>

                <div className="photo-grid">
                    {images.map(src => (
                        <div className="card"
                            key={src}
                            style={{
                                backgroundImage: `url(${src})`
                            }}
                        />

                    ))}
                    <div className="video">
                        {youtubeVideos.map((ytVideo, index) => (
                            <div className="single-video">
                                <iframe
                                    className='tedx-iframe'
                                    key={index}
                                    title={ytVideo.title}
                                    src={ytVideo.link}
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
