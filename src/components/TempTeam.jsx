import React from 'react';
import { animated } from 'react-spring';
import '../common/tempteam.scss';
import { Link } from 'react-router-dom';
import teamHeading from 'assets/team/teamHeadings';

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
      <div className="container-team-list">
        {teamName.map((txt) => (
          <animated.div key={txt} className="card-team-list">
            <Link
              to={`/team/${txt}`}
              className="tempteamlinks card-team-list-team-heading"
            >
              <span className=""> {teamHeading[txt]}</span>
            </Link>
          </animated.div>
        ))}
      </div>
    </>
  );
};

export default TempTeam;
