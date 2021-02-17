import React from 'react';

import {
  Logo,
  Facebook,
  Insta,
  Twitter,
  Youtube,
  Linkedin,
  Home,
  Email,
  Phone,
} from 'components/icons';
import ROUTES from 'constants/routes';
import { Link } from 'react-router-dom';

const { HOME, ABOUT, TEAM, HIGHLIGHT, REGISTRATION } = ROUTES;
const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container-footer">
          <div className="sec aboutus">
            <Logo />
            <br />
            <p>
              TEDx JNEC is independently organized TED event. Officially
              <br /> licensed by TED.
            </p>
            <ul className="sci">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/TEDx-JNEC-102123505190447/"
                >
                  <Facebook />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href=" https://twitter.com/tedxjnec?s=09"
                >
                  <Twitter />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.youtube.com/channel/UCsT0YIqwnpJCM-mx7-gSA4Q"
                >
                  <Youtube />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://instagram.com/tedx_jnec?igshid=99m3ao9ndgdf"
                >
                  <Insta />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/company/tedx-jnec"
                >
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <br />
            <ul>
              <li>
                <Link to={HOME}>Home</Link>
              </li>
              <li>
                <Link to={ABOUT}>About</Link>
              </li>
              <li>
                <Link to={TEAM}>Team</Link>
              </li>
              <li>
                <Link to={HIGHLIGHT}>Highlights</Link>
              </li>
              <li>
                <Link to={REGISTRATION}>Registrations</Link>
              </li>
            </ul>
          </div>
          <div className="sec contact">
            <h2>Contact Info</h2>
            <br />
            <ul className="info">
              <li>
                <span>
                  <Home />
                </span>
                <span>
                  MGM&apos;s Jawaharlal Nehru Engineering College, Aurangabad.
                </span>
              </li>
              <li>
                <span>
                  <Email />
                </span>
                <p>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="mailto:tedxjnec@gmail.com "
                  >
                    tedxjnec@gmail.com{' '}
                  </a>
                </p>
              </li>
              <li>
                <span>
                  <Phone />
                </span>
                <p>
                  <a target="_blank" rel="noreferrer" href="tel:9028960519">
                    9028960519
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="text">
        <p>Made By WebDevelopment Team : TEDxJNEC 2021</p>
      </div>
    </div>
  );
};

export default Footer;
