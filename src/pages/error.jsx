import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from 'constants/routes';
import '../common/error.scss';

const Error = () => {
  const { HOME } = ROUTES;
  return (
    <>
      <div id="notfound">
        <div className="notfound">
          <div className="notfound-404">
            <h1>
              <span>4</span>
              <span>0</span>
              <span>4</span>
            </h1>
          </div>
          <h1>Oops!!!</h1>
          <h2> Page not found</h2>
          <h3>Click Here To Go Back</h3>
          <Link to={HOME}>
            <button type="button">HOME</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
