import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

const SponsorCard = ({ src, style }) => {
  const [flipped, setFlipped] = useState(false);

  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateY(${flipped ? -180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  return (
    <animated.div
      key={`${src}abc`}
      className="flip-card"
      onClick={() => setFlipped((state) => !state)}
    >
      <animated.div
        key={src}
        className="card card-front"
        style={{
          ...style,
          backgroundImage: `url(${src})`,
          opacity,
          transform: transform.interpolate((t) => `${t} rotateX(0deg)`),
        }}
      />
      <animated.div
        key={`${src}xyz`}
        className="card card-back"
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

export default SponsorCard;
