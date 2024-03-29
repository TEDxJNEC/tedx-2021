import React from 'react';
import '../common/highlights.scss';

const Highlights = ({ label, images }) => {
  return (
    <div className="container">
      <div className="glimpse-wrapper">
        <h2>{label}</h2>
        <br />

        <div className="photo-grid">
          {images.map((src) => {
            return (
              <div className="card" key={src}>
                <img src={src.default} alt="" className="card-image" />
              </div>
            );
          })}
          {/* <div className="video">
            {youtubeVideos.map((ytVideo) => (
              <div className="single-video">
                <iframe
                  className="tedx-iframe"
                  key={ytVideo.link}
                  title={ytVideo.title}
                  src={ytVideo.link}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Highlights;
