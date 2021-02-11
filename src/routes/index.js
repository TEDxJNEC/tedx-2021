import React, { useReducer, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from 'pages/index';
import About from 'pages/about';
import Dashboard from 'pages/admin/dashboard';
import Team from 'pages/team';
import Committee from 'pages/committee';
import Highlights from 'pages/highlights';
import Registration from 'pages/registration';
import ROUTES from 'constants/routes';
import Error from 'pages/error';
// eslint-disable-next-line import/no-cycle
import UserCallback from 'pages/google/callback';
import Login from 'pages/login';
import { initialState, reducer } from 'store/reducers/auth';
// eslint-disable-next-line import/no-cycle
import TestPage from 'pages/test';

export const AuthContext = createContext();

const Routes = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {
    HOME,
    ABOUT,
    TEAM,
    DASHBOARD,
    HIGHLIGHT,
    REGISTRATION,
    GOOGLE_AUTH_CALLBACK_USER,
    LOGIN,
  } = ROUTES;
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <Router>
        <Switch>
          <Route exact path={HOME} component={Home} />
          <Route exact path={ABOUT} component={About} />
          <Route exact path={DASHBOARD} component={Dashboard} />
          <Route exact path={TEAM} component={Team} />
          <Route exact path={HIGHLIGHT} component={Highlights} />
          <Route exact path={LOGIN} component={Login} />
          <Route
            exact
            path={GOOGLE_AUTH_CALLBACK_USER}
            component={UserCallback}
          />
          <Route
            exact
            path={`${TEAM}/:committee`}
            render={(props) => <Committee {...props} />}
          />
          {/* <Route exact path={TEAM} component={}></Route> */}
          <Route exact path={REGISTRATION} component={Registration} />
          <Route exact path="/test" component={TestPage} />
          {/* <Route exact path={BOOKINGS} component={}></Route> */}
          <Route component={Error} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default Routes;
