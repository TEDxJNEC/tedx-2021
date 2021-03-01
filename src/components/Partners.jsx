import React from 'react';
import styled from 'styled-components';
import { useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';
import '../common/partners.scss';
import SponsorCard from './SpeakersCard';

const clamp = (value, clampAt = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  }
  return value < -clampAt ? -clampAt : value;
};

const SpeakerCardWrapper = styled.div`
  position: relative;
`;

const partners = [
  'https://source.unsplash.com/400x300/?patterns,white',
  'https://source.unsplash.com/400x300/?patterns,laptop',
  'https://source.unsplash.com/400x300/?patterns,tech',
  'https://source.unsplash.com/400x300/?model,river',
  'https://source.unsplash.com/400x300/?coffee,laptop',
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
    <>
      <div className="container__speakers" {...bind()}>
        {partners.map((src) => (
          <SpeakerCardWrapper>
            <SponsorCard src={src} style={style} />
          </SpeakerCardWrapper>
        ))}
      </div>
    </>
  );
};

export default Partners;
