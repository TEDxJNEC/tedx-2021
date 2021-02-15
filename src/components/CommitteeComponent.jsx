/* eslint-disable */
import React from 'react';
import TeamData from 'assets/team/data.js';
const Item1 = ({ img, quirk1, quirk2, quote }) => {
  return (
    <span className="grid__item">
      <div className="box">
        <img className="box__img" src={img} alt="Some image" />
        <h3 className="box__title">
          <span className="box__title-inner" data-hover={quirk1}>
            {quirk1}
          </span>
        </h3>
        <h4 className="box__text">
          <span className="box__text-inner">{quirk2}</span>
        </h4>
        {/* <div className="box__deco">{symbol}</div> */}
        <p className="box__content">
          <b>{quote}</b>
        </p>
      </div>
    </span>
  );
};
const Item2 = ({ img, quirk1, quirk2, quote }) => {
  return (
    <span className="grid__item">
      <div className="box">
        <p className="box__content quote__top">
          <b>{quote}</b>
        </p>
        <img className="box__img" src={img} alt="Some image" />
        <h3 className="box__title box__title--straight box__title--bottom">
          <span className="box__title-inner" data-hover={quirk1}>
            {quirk1}
          </span>
        </h3>
        <h4 className="box__text box__text--bottom">
          <span className="box__text-inner box__text-inner--rotated1">
            {quirk2}
          </span>
        </h4>
        {/* <div className="box__deco box__deco--top"> {symbol}</div> */}
      </div>
    </span>
  );
};
const CommitteeComponent = ({ Committee }) => {
  const renderComiteeGrid = (Com) => {
    const ComData = TeamData[Com];
    if (ComData) {
      return ComData.map((member, index) => {
        if (index % 2) {
          return (
            <Item1
              key={member.name}
              img={member.img}
              quirk1={member.quirk1}
              quirk2={member.quirk2}
              quote={member.quote}
            />
          );
        } else {
          return (
            <Item2
              key={member.name}
              img={member.img}
              quirk1={member.quirk1}
              quirk2={member.quirk2}
              quote={member.quote}
            />
          );
        }
      });
    }
  };
  return (
    <main>
      <div className="content">
        <div className="grid">{renderComiteeGrid(Committee)}</div>
      </div>
    </main>
  );
};

export default CommitteeComponent;
