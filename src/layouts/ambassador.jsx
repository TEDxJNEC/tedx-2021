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
const AmbassdorPageLayout = ({ children }) => {
  return (
    <AmbPageWrapper>
      <Navbar />
      <div className="dashboard-wrapper">{children}</div>
    </AmbPageWrapper>
  );
};

export default AmbassdorPageLayout;
