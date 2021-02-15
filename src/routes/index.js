import React, { useReducer, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import ROUTES from 'constants/routes';
import Error from 'pages/error';
// eslint-disable-next-line import/no-cycle
import UserCallback from 'pages/google/callback';
import Loader from 'components/Loader';
import { initialState, reducer } from 'store/reducers/auth';

export const AuthContext = createContext();
const Home = Loadable({
  loader: () => import('pages'),
  loading: Loader,
});

const About = Loadable({
  loader: () => import('pages/about'),
  loading: Loader,
});
const Dashboard = Loadable({
  loader: () => import('pages/admin/dashboard'),
  loading: Loader,
});
const Team = Loadable({
  loader: () => import('pages/team'),
  loading: Loader,
});
const Committee = Loadable({
  loader: () => import('pages/committee'),
  loading: Loader,
});
const Highlights = Loadable({
  loader: () => import('pages/highlights'),
  loading: Loader,
});
const Registration = Loadable({
  loader: () => import('pages/registration'),
  loading: Loader,
});
const Login = Loadable({
  loader: () => import('pages/login'),
  loading: Loader,
});
const AdminLogin = Loadable({
  loader: () => import('pages/admin/login'),
  loading: Loader,
});
const AmbassdorLogin = Loadable({
  loader: () => import('components/AmbassdorLogin'),
  loading: Loader,
});
const TestPage = Loadable({
  loader: () => import('pages/test'),
  loading: Loader,
});
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
    ADMIN_LOGIN,
    AMBASSADOR_LOGIN,
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
          <Route exact path={ADMIN_LOGIN} component={AdminLogin} />
          <Route exact path={AMBASSADOR_LOGIN} component={AmbassdorLogin} />
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
