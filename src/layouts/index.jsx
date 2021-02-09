import React from 'react';
import Loader from 'components/Loader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const DefaultLayout = ({ children }) => {
  // const [isMounted, setIsMounted] = useState(false);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsMounted(true);
  //   }, 7000);
  // }, []);
  return (
    <>
      {/* // eslint-disable-next-line no-constant-condition */}
      {true ? (
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
