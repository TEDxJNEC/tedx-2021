import React, { useEffect, useRef, useState } from 'react';
import useIntersect from 'hooks/useIntersect';
import 'common/scrollsnap.scss';
import 'common/introvideo.scss';
// import Part1 from 'assets/videos/kintsugiVideo1.webm';
// import Part2 from 'assets/videos/kintsugiVideo2.webm';
// import Part3 from 'assets/videos/kintsugiVideo3.webm';
import VideoFull from 'assets/videos/videoFull.webm';
import VideoFullMobile from 'assets/videos/videoFullmobile.webm';
import logo from 'assets/JNEC-black.svg';
import logowhite from 'assets/JNEC.svg';
import ThemeLogo from 'assets/theme-logo.svg';

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);
const VideoSection = ({
  videoSrc,
  ratio,
  vidRefs,
  overflowClass,
  setOverflowClass,
}) => {
  const [showMask, setMask] = useState(false);
  const handleVideoEnd = () => {
    setMask(true);
    document.body.classList.remove(overflowClass);
    setOverflowClass('');
  };
  //   const handleVideoEndLoad = () => {
  //     console.log('Video Loaded');
  //   };
  const videoRef = useRef(null);
  useEffect(() => {
    if (ratio > 0.99) {
      if (overflowClass) {
        document.body.classList.add(overflowClass);
        videoRef.current.play();
      }
    }
  }, [ratio]);
  return (
    <section ref={vidRefs} className="video-section">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video
        onEnded={handleVideoEnd}
        muted
        ref={videoRef}
        className="video-playback"
      >
        <source src={videoSrc} type="video/webm" />
      </video>
      {showMask ? (
        <div className="video-mask">
          {window.screen.width >= 720 ? (
            <img src={logo} alt="TEDx JNEC Logo" className="tedx-logo-video" />
          ) : (
            <img
              src={logowhite}
              alt="TEDx JNEC Logo"
              className="tedx-logo-video"
            />
          )}

          <img
            src={ThemeLogo}
            alt="TEDx JNEC Logo"
            className="theme-two-logo-video"
          />
        </div>
      ) : null}
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
