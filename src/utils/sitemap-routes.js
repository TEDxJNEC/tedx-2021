import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route } from 'react-router';

const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  TEAM: '/team',
  REGISTRATION: '/registration',
  DASHBOARD: '/admin/dashboard',
  HIGHLIGHT: '/highlight',
  GOOGLE_AUTH_CALLBACK_USER: '/callback/google',
  ADMIN_LOGIN: '/admin/login',
  AMBASSADOR_LOGIN: '/ambassador/login',
  LOGIN: '/login',
};

const { HOME, ABOUT, TEAM, DASHBOARD, HIGHLIGHT, REGISTRATION } = ROUTES;
export default (
  <Route>
    <Route path={HOME} />
    <Route path={ABOUT} />
    <Route path={TEAM} />
    <Route path={DASHBOARD} />
    <Route path={HIGHLIGHT} />
    <Route path={REGISTRATION} />
    <Route path={`${TEAM}/web`} />
    <Route path={`${TEAM}/graphic`} />
    <Route path={`${TEAM}/marketing`} />
    <Route path={`${TEAM}/curation`} />
    <Route path={`${TEAM}/sponsorship`} />
    <Route path={`${TEAM}/management`} />
    <Route path={`${TEAM}/creative`} />
    <Route path={`${TEAM}/technical`} />
    <Route path={`${TEAM}/event`} />
    <Route path={`${TEAM}/budget`} />
    <Route path={`${TEAM}/documentation`} />
    <Route path={`${TEAM}/dop`} />
    <Route path={`${TEAM}/official`} />
  </Route>
);
