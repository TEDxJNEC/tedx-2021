import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SpeakersCard = ({ src, style, speakersData }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <animated.div
      key={src}
      className="flip-card"
      onClick={() => setFlipped((state) => !state)}
    >
      <animated.div
        key={`${speakersData.id}back`}
        className="card card-back"
        style={{
          ...style,

          opacity,
          transform: transform.interpolate(
            (t) => `${t} rotateX(0deg) rotateY(180deg)`
          ),
        }}
      >
        <div className="speaker-name">
          <strong>{speakersData.name}</strong>
        </div>
        <div className="speaker-details">{speakersData.details}</div>
      </animated.div>
      <animated.div
        key={`${speakersData.id}front`}
        className="card card-front"
        style={{
          ...style,
          backgroundImage: `url(${src})`,
          opacity: opacity.interpolate((o) => 1 - o),
          transform,
        }}
      />
    </animated.div>
  );
};

export default SpeakersCard;
