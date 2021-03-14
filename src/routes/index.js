import React, { useReducer, createContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';

import ROUTES from 'constants/routes';
import Error from 'pages/error';
// eslint-disable-next-line import/no-cycle
import UserCallback from 'pages/google/callback';
import Loader from 'components/Loader';
import { initialState, reducer } from 'store/reducers/auth';

export const AuthContext = createContext({
  isLoggedIn: JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: JSON.parse(localStorage.getItem('token')) || null,
  eventToken: localStorage.getItem('eventToken') || null,
});
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
  loader: () => import('pages/loginambas'),
  loading: Loader,
});
const TestPage = Loadable({
  loader: () => import('pages/test'),
  loading: Loader,
});
const UserCredentials = Loadable({
  loader: () => import('pages/credentials'),
  loading: Loader,
});
const AmbassadorDashboard = Loadable({
  loader: () => import('pages/ambassador/ambassador-dashboard'),
  loading: Loader,
});
const Policy = Loadable({
  loader: () => import('pages/policy'),
  loading: Loader,
});
const TOCPage = Loadable({
  loader: () => import('pages/toc'),
  loading: Loader,
});
const TNCPage = Loadable({
  loader: () => import('pages/tnc'),
  loading: Loader,
});
const StreamPage = Loadable({
  loader: () => import('pages/stream'),
  loading: Loader,
});
const RegistrationSuccess = Loadable({
  loader: () => import('pages/success-registration'),
  loading: Loader,
});
const RegistrationDetails = Loadable({
  loader: () => import('pages/registrationDetails'),
  loading: Loader,
});
const AmbassadorRegistrations = Loadable({
  loader: () => import('pages/ambassador/ambassador-registration'),
  loading: Loader,
});

const PaymentSuccess = Loadable({
  loader: () => import('pages/success-payment'),
  loading: Loader,
});
const LogoutPage = Loadable({
  loader: () => import('pages/logout'),
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
    REGISTER_SUCCESS,
    REGISTRATIONS_DETAILS,
    GOOGLE_AUTH_CALLBACK_USER,
    LOGIN,
    USER_LOGIN,
    AMBASSADOR_LOGIN,
    AMBASSADOR_DASHBOARD,
    POLICY,
    TOC,
    TNC,
    AMBASSADOR_REGISTRATION,
    PAYMENT_SUCCESS,
    LOGOUT,
    STREAM,
    USER_CREDENTIALS,
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
          <Route exact path={USER_LOGIN} component={AdminLogin} />
          <Route exact path={AMBASSADOR_LOGIN} component={AmbassdorLogin} />
          <Route exact path={TNC} component={TNCPage} />
          <Route exact path={STREAM} component={StreamPage} />
          <Route exact path={USER_CREDENTIALS} component={UserCredentials} />
          <Route
            exact
            path={AMBASSADOR_DASHBOARD}
            component={AmbassadorDashboard}
          />
          <Route
            exact
            path={GOOGLE_AUTH_CALLBACK_USER}
            component={UserCallback}
          />
          <Route exact path={TOC} component={TOCPage} />
          <Route exact path={POLICY} component={Policy} />
          <Route
            exact
            path={`${TEAM}/:committee`}
            render={(props) => <Committee {...props} />}
          />
          <Route
            exact
            path={REGISTER_SUCCESS}
            component={RegistrationSuccess}
          />
          <Route
            exact
            path={REGISTRATION}
            render={(props) => <Registration {...props} propState={state} />}
          />
          <Route
            exact
            path={REGISTRATIONS_DETAILS}
            component={RegistrationDetails}
          />

          <Route
            exact
            path={AMBASSADOR_REGISTRATION}
            component={AmbassadorRegistrations}
          />
          <Route exact path={PAYMENT_SUCCESS} component={PaymentSuccess} />
          <Route exact path="/test" component={TestPage} />
          <Route exact path={LOGOUT} component={LogoutPage} />
          {/* <Route exact path={BOOKINGS} component={}></Route> */}
          <Route component={Error} />
        </Switch>
      </Router>
    </AuthContext.Provider>
  );
};

export default Routes;
