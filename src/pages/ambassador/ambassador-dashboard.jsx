import React from 'react';
import styled from 'styled-components';
import AmbassdorPageLayout from 'layouts/ambassador';

const Dashboard = styled.div`
  width: 100%;
  min-height: 100%;
`;
const DashboardItem = styled.div`
  border-radius: 8px;
  flex-grow: 1;
  border: 1px solid #dadce0;
`;
const ambassadorDashboard = () => {
  return (
    <AmbassdorPageLayout>
      <Dashboard>
        <DashboardItem>Card1</DashboardItem>
      </Dashboard>
    </AmbassdorPageLayout>
  );
};

export default ambassadorDashboard;
