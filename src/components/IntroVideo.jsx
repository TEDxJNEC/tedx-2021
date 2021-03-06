import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import useIntersect from 'hooks/useIntersect';
import 'common/scrollsnap.scss';
import 'common/introvideo.scss';
import ROUTES from 'constants/routes';
// import Part1 from 'assets/videos/kintsugiVideo1.webm';
// import Part2 from 'assets/videos/kintsugiVideo2.webm';
// import Part3 from 'assets/videos/kintsugiVideo3.webm';
import VideoFull from 'assets/videos/videoFull.webm';
import VideoFullMobile from 'assets/videos/videoFullmobile.webm';
import logo from 'assets/JNEC-black.svg';
import ThemeLogo from 'assets/theme-logo.svg';
import Spinner from './Spinner';

const { REGISTRATION, STREAM } = ROUTES;
const BookingButton = styled(NavLink)`
  position: absolute;
  bottom: 32px;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  width: 12rem;
  padding: 0.8rem;
  background: red;
  border-radius: 12px;
  color: white;
  :hover {
    background: #f6c90e;
    color: black;
  }
  transition: 3s;
`;
const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);
const VideoSection = ({
  videoSrc,
  ratio,
  vidRefs,
  overflowClass,
  setOverflowClass,
}) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [showMask, setMask] = useState(false);
  const videoRef = useRef(null);
  const handleLoad = () => {
    setIsVideoLoaded(true);
    videoRef.current.play();
  };
  const handleVideoEnd = () => {
    setMask(true);
    //  document.body.classList.remove(overflowClass);
    setOverflowClass('');
  };
  //   const handleVideoEndLoad = () => {
  //     console.log('Video Loaded');
  //   };

  useEffect(() => {
    if (ratio > 0.99) {
      if (overflowClass) {
        // document.body.classList.add(overflowClass);
      }
    }
  }, [ratio]);

  let interval = useRef();
  const [difference, setDifference] = useState();

  const timer = () => {
    const countDownTime = new Date('March 14, 2021 15:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownTime - now;

      if (distance < 0) {
        setDifference(distance);
        clearInterval(interval.current);
      }
    }, 1000);
  };
  useEffect(() => {
    timer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    setIsVideoLoaded(true);
  }, []);
  useEffect(() => {
    return function cleanup() {
      document.body.classList.remove(overflowClass);
    };
  }, []);
  return (
    <section ref={vidRefs} className="video-section">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}

      <video
        onLoadedData={handleLoad}
        onEnded={handleVideoEnd}
        muted
        ref={videoRef}
        className="video-playback"
      >
        <source src={videoSrc} type="video/webm" />
      </video>
      {isVideoLoaded ? null : <Spinner />}
      {showMask ? (
        <div className="video-mask">
          {window.screen.width >= 720 ? (
            <img src={logo} alt="TEDx JNEC Logo" className="tedx-logo-video" />
          ) : (
            <img src={logo} alt="TEDx JNEC Logo" className="tedx-logo-video" />
          )}

          <img
            src={ThemeLogo}
            alt="TEDx JNEC Logo"
            className="theme-two-logo-video"
          />
        </div>
      ) : null}
      <div className="video-mask">
        <BookingButton to={difference < 0 ? STREAM : REGISTRATION}>
          {difference < 0 ? 'EVENT' : 'BOOK TICKETS'}
        </BookingButton>
      </div>
    </section>
  );
};
const SingleVideo = ({ videoSrc, overflowClass, setOverflowClass }) => {
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });
  return (
    <VideoSection
      vidRefs={ref}
      ratio={entry.intersectionRatio}
      videoSrc={videoSrc}
      overflowClass={overflowClass}
      setOverflowClass={setOverflowClass}
    />
  );
};

const IntroVideo = () => {
  const video = window.screen.width >= 720 ? VideoFull : VideoFullMobile;
  const [overflowClass, setoverflowClass] = useState('roll');
  return (
    <>
      <SingleVideo
        overflowClass={overflowClass}
        setOverflowClass={setoverflowClass}
        videoSrc={video}
      />
    </>
  );
};

export default IntroVideo;
