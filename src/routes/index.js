import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/index';
import About from 'pages/about';
import Dashboard from 'pages/admin/dashboard';
import Team from 'pages/team';
import Committee from 'pages/committee';
import ROUTES from '../constants/routes';

// import Error from '../pages/error';

const Routes = () => {
  const { HOME, ABOUT, TEAM, DASHBOARD } = ROUTES;
  return (
    <Router basename="/tedx-2021">
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={ABOUT} component={About} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={TEAM} component={Team} />
        <Route
          exact
          path={`${TEAM}/:committee`}
          render={(props) => <Committee {...props} />}
        />
        {/* <Route exact path={TEAM} component={}></Route> */}
        {/* <Route exact path={BOOKINGS} component={}></Route> */}
      </Switch>
    </Router>
  );
};
export default Routes;
