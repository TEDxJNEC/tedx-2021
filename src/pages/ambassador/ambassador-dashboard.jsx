import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import AmbassdorPageLayout from 'layouts/ambassador';
import { AuthContext } from 'routes';
import { useHistory } from 'react-router-dom';

const Dashboard = styled.div`
  width: 100%;
  min-height: 100%;
`;
const LinkText = styled.span`
  color: #6319ff;
  cursor: pointer;
  text-decoration: underline;
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
  const copyLink = () => {};
  return (
    <AmbassdorPageLayout>
      <Dashboard>
        <DashboardItem>
          <p>
            <b>Your Unique Referral Link:</b>{' '}
            <LinkText
              onClick={copyLink}
            >{`https://www.tedxjnec.com/registration?aid=${state.user.aId}`}</LinkText>
          </p>
        </DashboardItem>
      </Dashboard>
    </AmbassdorPageLayout>
  );
};

export default ambassadorDashboard;
