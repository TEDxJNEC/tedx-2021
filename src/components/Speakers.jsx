import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import '../common/partners.scss';
import SpeakersCard from './SpeakersCard';
import SpeakersData from '../assets/speakersData.json';
import amol from '../assets/speakers/amol.webp';
import baluji from '../assets/speakers/baluji.webp';
import bhargsetu from '../assets/speakers/bhargsetu.webp';
import bhavook from '../assets/speakers/bhavook.webp';
import mokshada from '../assets/speakers/mokshada.webp';
import shruti from '../assets/speakers/shruti.webp';
import sridhar from '../assets/speakers/sridhar.webp';
import vishnu from '../assets/speakers/vishnu.webp';

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  }
  return value < -clampAt ? -clampAt : value;
};

const SpeakerCardWrapper = styled.div`
  position: relative;
`;
const Padder = styled.div`
  width: 1rem;
  height: 100%;
`;
const partners = [
  amol,
  baluji,
  bhargsetu,
  bhavook,
  mokshada,
  shruti,
  sridhar,
  vishnu,
];
const Speakers = () => {
  const [style, set] = useSpring(() => ({
    transform: 'perspective(500px) rotateY(0deg)',
  }));

  const bind = useScroll((event) => {
    set({
      transform: `perspective(500px) rotateY(${
        event.scrolling ? clamp(event.delta[0]) : 0
      }deg)`,
    });
  });

  return (
    <div className="speakers-wrapper">
      <div className="speakers-heading">SPEAKERS</div>
      <hr className="speakers-heading-underline" />
      <div className="container__speakers" {...bind()}>
        {partners.map((src, index) => (
          <SpeakerCardWrapper>
            <SpeakersCard
              src={src}
              style={style}
              speakersData={SpeakersData[index]}
            />
          </SpeakerCardWrapper>
        ))}
        <Padder />
        <div className="left arrow" />
        <div className="right arrow" />
      </div>
    </div>
  );
};

export default Speakers;
