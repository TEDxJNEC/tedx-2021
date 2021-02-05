import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from '../constants/routes';
import Home from '../pages/index';
import About from '../pages/about';
import Dashboard from '../pages/admin/dashboard';
import Error from '../pages/error';

const Routes = () => {
  const { HOME, ABOUT, DASHBOARD } = ROUTES;
  return (
    <Router basename="/tedx-2021">
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={ABOUT} component={About} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        {/* <Route exact path={TEAM} component={}></Route> */}
        {/* <Route exact path={BOOKINGS} component={}></Route> */}
        <Route component={Error} />
      </Switch>
    </Router>
  );
};
export default Routes;
