import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/index';
import About from 'pages/about';
import Dashboard from 'pages/admin/dashboard';
import Team from 'pages/team';
import Committee from 'pages/committee';
import Highlights from 'pages/highlights';
import ROUTES from 'constants/routes';
import Error from 'pages/error';

const Routes = () => {
  const { HOME, ABOUT, TEAM, DASHBOARD, HIGHLIGHT } = ROUTES;
  return (
    <Router>
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={ABOUT} component={About} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={TEAM} component={Team} />
        <Route exact path={HIGHLIGHT} component={Highlights} />
        <Route
          exact
          path={`${TEAM}/:committee`}
          render={(props) => <Committee {...props} />}
        />
        {/* <Route exact path={TEAM} component={}></Route> */}
        {/* <Route exact path={BOOKINGS} component={}></Route> */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default Routes;
