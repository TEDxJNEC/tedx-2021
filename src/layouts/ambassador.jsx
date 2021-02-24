import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/ambassdor/AmbassadorNavbar';
import '../common/admin.scss';

const AmbPageWrapper = styled.div`
  display: flex;
  background: #fff;
  color: black;
  min-height: 100%;
`;
const AmbassdorPageLayout = ({ children, name, onLogout }) => {
  return (
    <AmbPageWrapper>
      <Navbar name={name} onLogout={onLogout} />
      <div className="amb-dashboard-wrapper">{children}</div>
    </AmbPageWrapper>
  );
};

export default AmbassdorPageLayout;
