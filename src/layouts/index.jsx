import React, { useState, useEffect } from 'react';
import Loader from 'components/Loader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DefaultLayout = ({ children }) => {
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 300);
  }, []);
  return (
    <>
      {/* // eslint-disable-next-line no-constant-condition */}
      {isMounted ? (
        <div>
          <Navbar />
          <div className="page-wrapper">{children}</div>
          <Footer />
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default DefaultLayout;
