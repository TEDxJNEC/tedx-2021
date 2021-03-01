import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import '../common/partners.scss';
import SpeakersCard from './SpeakersCard';

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
  'https://source.unsplash.com/400x300/?patterns,white',
  'https://source.unsplash.com/400x300/?patterns,laptop',
  'https://source.unsplash.com/400x300/?patterns,tech',
  'https://source.unsplash.com/400x300/?model,river',
  'https://source.unsplash.com/400x300/?coffee,laptop',
  'https://source.unsplash.com/400x300/?meeting,student',
  'https://source.unsplash.com/400x300/?meeting,student',
  'https://source.unsplash.com/400x300/?meeting,student',
  'https://source.unsplash.com/400x300/?meeting,student',
  'https://source.unsplash.com/400x300/?meeting,student',
];
const Partners = () => {
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
      <div className="container__speakers" {...bind()}>
        {partners.map((src) => (
          <SpeakerCardWrapper>
            <SpeakersCard src={src} style={style} />
          </SpeakerCardWrapper>
        ))}
        <Padder />
        <div className="left arrow" />
        <div className="right arrow" />
      </div>
    </div>
  );
};

export default Partners;
