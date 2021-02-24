import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/ambassdor/AmbassadorNavbar';
import '../common/admin.scss';

const AmbPageWrapper = styled.div`
  display: flex;
  background: #fff;
  color: black;
  width: 100%;
  min-height: 100%;
`;
const AmbassdorPageLayout = ({ children, name, onLogout }) => {
  return (
    <AmbPageWrapper>
      {window.screen.width >= 720 ? (
        <Navbar name={name} onLogout={onLogout} />
      ) : null}
      <div className="amb-dashboard-wrapper">{children}</div>
    </AmbPageWrapper>
  );
};

export default AmbassdorPageLayout;
