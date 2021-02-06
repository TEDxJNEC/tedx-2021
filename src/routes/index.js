import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ROUTES from '../constants/routes';
import Home from '../pages/index';
import About from '../pages/about';
import Dashboard from '../pages/admin/dashboard';
import Registration from '../pages/registration';
// import Error from '../pages/error';

const Routes = () => {
  const { HOME, ABOUT, REGISTRATION } = ROUTES;
  return (
    <Router basename="/tedx-2021">
      <Switch>
        <Route exact path={HOME} component={Home} />
        <Route exact path={ABOUT} component={About} />
        <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
        {/* <Route exact path={TEAM} component={}></Route> */}
        <Route exact path={REGISTRATION} component={Registration} />
      </Switch>
    </Router>
  );
};
export default Routes;
