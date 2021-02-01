import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROUTES } from '../constants/routes';
import Home from '../pages/index';
import About from '../pages/about';
import Dashboard from '../pages/admin/dashboard';
import Highlights from 'components/Highlights';

const Routes = () => {
    const { HOME, ABOUT, HIGHLIGHTS } = ROUTES;
    return (
        <Router basename='/tedx-2021'>
            <Switch>
                <Route exact path={HOME} component={Home}></Route>
                <Route exact path={ABOUT} component={About}></Route>
                <Route exact path={HIGHLIGHTS} component={Highlights}></Route>

                <Route
                    exact
                    path={ROUTES.DASHBOARD}
                    component={Dashboard}
                ></Route>
                {/* <Route exact path={TEAM} component={}></Route> */}
                {/* <Route exact path={BOOKINGS} component={}></Route> */}
            </Switch>
        </Router>
    );
};
export default Routes;
