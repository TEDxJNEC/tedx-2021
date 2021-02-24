import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import AmbassdorPageLayout from 'layouts/ambassador';
import { AuthContext } from 'routes';
import { useHistory } from 'react-router-dom';

const Dashboard = styled.div`
  max-width: 100%;
  min-height: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
const LinkText = styled.p`
  color: #fff;
  background: #f6c90e;
  text-align: center;
  cursor: pointer;
  margin: 1rem auto;
  width: 50%;
  padding: 1rem;
`;
const DashboardItem = styled.div`
  border-radius: 8px;
  flex-grow: 1;
  border: 1px solid #dadce0;
  padding: 1.5rem;
  @media only screen and (min-width: 768px) {
    padding: 3rem;
  }
`;
const ambassadorDashboard = () => {
  const { state, dispatch } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    if (!state.isLoggedIn && state.type !== 'amb') {
      dispatch({
        type: 'LOGOUT',
      });
      history.push('/');
    }
  }, []);
  const copyLink = () => {
    const link = `https://www.tedxjnec.com/registration?aid=${state.user.aId}`;
    navigator.clipboard.writeText(link);
  };
  return (
    <AmbassdorPageLayout name={state.user.name}>
      <Dashboard>
        <DashboardItem>
          <p>
            <b>Your Unique Referral Link:</b>{' '}
            <LinkText onClick={copyLink}>Copy Link</LinkText>
          </p>
        </DashboardItem>
        <DashboardItem>
          <h2>
            <b>Directs:</b> {' Coming Soon'}
          </h2>
        </DashboardItem>
        <DashboardItem>
          <h2>
            <b>Conversions:</b>
            {' Coming Soon'}
          </h2>
        </DashboardItem>
      </Dashboard>
    </AmbassdorPageLayout>
  );
};

export default ambassadorDashboard;
