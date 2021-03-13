import React, { useEffect } from 'react';
import styled from 'styled-components';
import 'common/stream.scss';

const VideoPageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const VideoWrapper = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const Iframe = styled.iframe`
  height: 100%;
  width: 100%;
`;
const TransMask = styled.div`
  position: fixed;
  height: calc(100% - 60px);
  width: 100%;
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const YTMask = styled.div`
  position: absolute;
  height: 40px;
  width: 120px;
  background: transparent;
  right: 9px;
  bottom: 13px;
`;
const WLShMask = styled.div`
  position: absolute;
  height: 60px;
  width: 150px;
  background: transparent;
  right: 9px;
  top: 13px;
`;
const AccWrapper = styled.div`
  position: absolute;
  height: 50px;
  width: 200px;
  background: transparent;
  left: 9px;
  top: 10px;
`;

const Stream = () => {
  useEffect(() => {
    document.addEventListener('contextmenu', (e) => {
      e.preventDefault();
    });
    document.querySelectorAll('button', (e) => {
      e.preventDefault();
    });
  }, []);
  return (
    <VideoPageWrapper>
      <VideoWrapper>
        <TransMask />
        <Iframe
          src="https://www.youtube-nocookie.com/embed/GgI4SL1mdpE?rel=0&autoplay=1&modestbranding=1&showinfo=0&controls=1&autohide=2&disablekb=1&version=3"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="video"
        />
        <YTMask />
        <WLShMask />
        <AccWrapper />
      </VideoWrapper>
    </VideoPageWrapper>
  );
};

export default Stream;
