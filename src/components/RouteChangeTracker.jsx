import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

const RouteChangeTracker = ({ history }) => {
  // eslint-disable-next-line no-unused-vars
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });

  return <div />;
};

export default withRouter(RouteChangeTracker);
