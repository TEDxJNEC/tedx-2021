import React from 'react';
import ReactGA from 'react-ga';
import RouteChangeTracker from 'components/RouteChangeTracker';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import 'common/footer.scss';
import 'common/nav.scss';

const DefaultLayout = ({ children }) => {
  const TRACKING_ID = 'G-JY5E8PKBT9';
  ReactGA.initialize(TRACKING_ID);

  return (
    <div>
      <Navbar />
      <RouteChangeTracker />
      <div className="page-wrapper">{children}</div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
