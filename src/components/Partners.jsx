import React from 'react';
import '../common/partners.scss';
import { animated, useSpring } from 'react-spring';
import { useScroll } from 'react-use-gesture';

const clamp = (value: number, clampAt: number = 30) => {
  if (value > 0) {
    return value > clampAt ? clampAt : value;
  } else {
    return value < -clampAt ? -clampAt : value;
  }
};

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
      <div className="container" {...bind()}>
        {partners.map((src) => (
          <animated.div
            key={src}
            className="card"
            style={{
              ...style,
              backgroundImage: `url(${src})`,
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Partners;
