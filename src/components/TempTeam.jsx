/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef } from 'react';
import { animated } from 'react-spring';
import '../common/tempteam.scss';
import { Link } from 'react-router-dom';
import teamHeading from 'assets/team/teamHeadings';
import useHorizontalNavRef from 'hooks/useHorizontalNavRef';

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
  const ScrollNavRef = useRef(null);
  const {
    hasLeftItems,
    handleLeftNav,
    hasRightItems,
    handleRightNav,
  } = useHorizontalNavRef(ScrollNavRef);
  return (
    <div className="team-list">
      <button
        type="button"
        disabled={hasLeftItems}
        onClick={handleLeftNav}
        className="left arrow"
      />
      <div ref={ScrollNavRef} className="container-team-list">
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
      <button
        type="button"
        disabled={hasRightItems}
        onClick={handleRightNav}
        className="right arrow"
      />
    </div>
  );
};

export default TempTeam;
