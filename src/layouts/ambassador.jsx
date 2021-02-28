import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import LogoImgSrc from 'assets/JNEC-black.svg';
import Navbar from '../components/ambassdor/AmbassadorNavbar';
import '../common/admin.scss';

const AmbPageWrapper = styled.div`
  display: flex;
  background: #fff;
  color: black;
  width: 100%;
  min-height: 100%;
  position: relative;
`;
const LOGO = styled.img`
  position: absolute;
  top: 1.2rem;
  left: 2rem;
  z-index: 12;
  width: 10rem;
  cursor: pointer;
`;
const AmbassdorPageLayout = ({ children, name, onLogout }) => {
  const history = useHistory();
  const takeHome = () => {
    history.push('/');
  };
  return (
    <AmbPageWrapper>
      <LOGO onClick={takeHome} src={LogoImgSrc} />
      {window.screen.width >= 720 ? (
        <Navbar name={name} onLogout={onLogout} />
      ) : null}
      <div className="amb-dashboard-wrapper">{children}</div>
    </AmbPageWrapper>
  );
};

export default AmbassdorPageLayout;
