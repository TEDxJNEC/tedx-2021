import React from 'react';
import { animated } from 'react-spring';
import '../common/tempteam.scss';
import { Link } from 'react-router-dom';
import teamHeading from 'assets/team/teamHeadings';

const teamName = [
  'official',
  'web',
  'graphic',
  'marketing',
  'curation',
  'sponsorship',
  'management',
  'creative',
  'technical',
  'event',
  'budget',
  'documentation',
  'dop',
];
const TempTeam = () => {
  return (
    <div className="team-list">
      <div className="left arrow" />
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
      <div className="right arrow" />
    </div>
  );
};

export default TempTeam;
