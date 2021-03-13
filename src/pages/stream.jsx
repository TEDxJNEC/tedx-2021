import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'common/stream.scss';

const VideoPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoWrapper = styled.div``;

const Iframe = styled.iframe`
  height: 390px;
  width: 640px;
`;

const Stream = () => {
  useEffect(() => {
    // document.addEventListener('contextmenu', (e) => {
    //   e.preventDefault();
    // });
    document.querySelectorAll('button', (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <VideoPageWrapper>
      <VideoWrapper>
        <Iframe
          src="https://www.youtube.com/embed/sDw98aSq7Ls?rel=0&autoplay=1&modestbranding=1&showinfo=0&controls=0&autohide=2&disablekb=1"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
      </VideoWrapper>
    </VideoPageWrapper>
  );
};

export default Stream;
