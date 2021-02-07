import React from 'react';
import vid from 'assets/loader.webm';
import '../common/loader.scss';

const Loader = () => {
  return (
    <>
      <div className="show-loader">
        <video
          className="loading-video"
          muted
          loop
          width="200"
          height="500"
          kind="captions"
          autoPlay
        >
          <source src={vid} type="video/webm" />
        </video>
      </div>
    </>
  );
};

export default Loader;
