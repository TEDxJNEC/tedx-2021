import React from 'react';
import { animated } from 'react-spring';
import '../common/tempteam.scss';
import { Link } from 'react-router-dom';

const teamName = [
  // 'web',
  // 'graphic',
  // 'marketing',
  // 'curation',
  // 'sponsorship',
  // 'management',
  // 'creative',
  // 'technical',
  // 'event',
  // 'budget',
  // 'documentation',
  // 'dop',
  // 'official',
];
const TempTeam = () => {
  return (
    <>
      <div className="container">
        {teamName.map((txt) => (
          <animated.div key={txt} className="card">
            <Link to={`/team/${txt}`} className="tempteamlinks">
              {txt}
            </Link>
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default TempTeam;
