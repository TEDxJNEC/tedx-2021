import React from 'react';
import COMINGSOON from 'assets/coming-soon.webp';
import 'common/comingsoon_card.scss';

function List() {
  return (
    <div className="card-comingsoon">
      <div className="imgbx">
        <img src={COMINGSOON} alt="img" />
      </div>
    </div>
  );
}

const Card = () => {
  return (
    <>
      {window.screen.width >= 720 ? (
        <div className="main_container">
          <h1>SPEAKERS</h1>
          <hr />
          <div className="container">
            <div className="box-card">
              <List />
              <List />
              <List />
              <List />
              {/* <List /> */}
            </div>
          </div>
        </div>
      ) : (
        <div className="main_container">
          <h1>SPEAKERS</h1>
          <hr />
          <div className="container">
            <div className="box-card">
              <List />
              <List />

              {/* <List /> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
