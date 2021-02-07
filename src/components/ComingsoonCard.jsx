import React from 'react';
import COMINGSOON from 'assets/coming-soon.webp';
import 'common/comingsoon_card.scss';

function List() {
  return (
    <div className="card">
      <div className="imgbx">
        <img src={COMINGSOON} alt="img" />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <>
      <div className="main_container">
        <h1>SPEAKERS</h1>
        <hr />
        <div className="container">
          <div className="box">
            <List />
            <List />
            <List />
            <List />
            {/* <List /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
