import React from 'react';
import '../common/loader.scss';

const Loader = () => {
  return (
    <>
      <div className="show-loader">
        <img
          src="https://miro.medium.com/max/1600/1*e_Loq49BI4WmN7o9ItTADg.gif"
          width="500"
          alt=""
        />
      </div>
    </>
  );
};

export default Loader;
