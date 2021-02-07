import React from 'react';
import useIntersect from 'hooks/useIntersect';
import 'common/scrollsnap.scss';
import 'common/introvideo.scss';
import Part1 from 'assets/videos/kintsugiVideo1.webm';
import Part2 from 'assets/videos/kintsugiVideo2.webm';
import Part3 from 'assets/videos/kintsugiVideo3.webm';

const buildThresholdArray = () => Array.from(Array(100).keys(), (i) => i / 100);
const VideoSection = ({ videoSrc, ratio }) => {
  if (ratio > 0.89) {
    console.log('Play Video!');
  }
  return (
    <section className="video-section">
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video className="video-playback">
        <source src={videoSrc} type="video/webm" />
      </video>
    </section>
  );
};
const SingleVideo = ({ videoSrc }) => {
  const [ref, entry] = useIntersect({
    threshold: buildThresholdArray(),
  });
  return (
    <VideoSection
      ref={ref}
      ratio={entry.intersectionRatio}
      videoSrc={videoSrc}
    />
  );
};

const IntroVideo = () => {
  return (
    <>
      <SingleVideo videoSrc={Part1} />
      <SingleVideo videoSrc={Part2} />
      <SingleVideo videoSrc={Part3} />
    </>
  );
};

export default IntroVideo;
