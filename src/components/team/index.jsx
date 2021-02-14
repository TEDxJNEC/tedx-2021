import React from 'react';
import 'common/team.scss';
import { Link } from 'react-router-dom';
import webPruthvi from 'assets/team/web/webPruthvi.webp';
import dopAnuj from 'assets/team/core/dopAnuj.webp';
import budgetRaj from 'assets/team/core/budgetRaj.webp';
import documentationSiddhi from 'assets/team/core/documentationSiddhi.webp';
import managementGayatri from 'assets/team/core/managementGayatri.webp';
import marketingOmkar from 'assets/team/core/marketingOmkar.webp';
import officialAbhishek from 'assets/team/core/officalAbhishek.webp';
import officialManik from 'assets/team/core/officalManik.webp';
import sponsorshipEsha from 'assets/team/core/sponsorshipEsha.webp';
import graphicKrishna from 'assets/team/core/graphicKrishna.webp';
import technicalShubham from 'assets/team/core/technicalShubham.webp';
import curationSaumitra from 'assets/team/curation/curationSaumitra.webp';
import officialPriyanka from 'assets/team/official/officialPriyanka.webp';

const TeamComponent = () => {
  return (
    <>
      <div className="carousel_wrapper">
        <div className="carousel">
          <Link to="/team/official" className="slide one">
            <img className="carousel-image" src={officialAbhishek} alt="dd" />
          </Link>
          <Link to="/team/official" className="slide two">
            <img className="carousel-image" src={officialPriyanka} alt="dd" />
          </Link>
          <Link to="/team/official" className="slide three">
            <img className="carousel-image" src={officialManik} alt="dd" />
          </Link>
          <Link to="/team/budget" className="slide four">
            <img className="carousel-image" src={budgetRaj} alt="dd" />
          </Link>
          <Link to="/team/documentation" className="slide five">
            <img
              className="carousel-image"
              src={documentationSiddhi}
              alt="dd"
            />
          </Link>
          <Link to="/team/dop" className="slide six">
            <img className="carousel-image" src={dopAnuj} alt="dd" />
          </Link>
          <Link to="/team/management" className="slide seven">
            <img className="carousel-image" src={managementGayatri} alt="dd" />
          </Link>
          <Link to="/team/marketing" className="slide eight">
            <img className="carousel-image" src={marketingOmkar} alt="dd" />
          </Link>
          <Link to="/team/sponsorship" className="slide nine">
            <img className="carousel-image" src={sponsorshipEsha} alt="dd" />
          </Link>
          <Link to="/team/web" className="slide ten">
            <img className="carousel-image" src={webPruthvi} alt="dd" />
          </Link>
          <Link to="/team/web" className="slide eleven">
            <img className="carousel-image" src={graphicKrishna} alt="dd" />
          </Link>
          <Link to="/team/web" className="slide twelve">
            <img className="carousel-image" src={technicalShubham} alt="dd" />
          </Link>
          <Link to="/team/web" className="slide thirteen">
            <img className="carousel-image" src={curationSaumitra} alt="dd" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default TeamComponent;
