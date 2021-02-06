import React from 'react';
import '../common/card.scss';

function List() {
  return (
    <div className="card-comingsoon">
      <div className="imgbx">
        <img
          src="https://yada.org/wp-content/uploads/2016/11/coming-soon-1.png"
          alt="img"
        />
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
