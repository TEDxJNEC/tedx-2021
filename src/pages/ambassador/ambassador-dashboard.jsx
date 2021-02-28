import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import AmbassdorPageLayout from 'layouts/ambassador';
import { AuthContext } from 'routes';
import API_ROUTES from 'constants/api';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Dashboard = styled.div`
  max-width: 100%;
  min-height: 100%;
  display: flex;
  gap: 12px;
  flex-direction: column;
`;
const LinkText = styled.p`
  color: #fff;
  background: #ffb74d;
  text-align: center;
  cursor: pointer;
  margin: 1rem auto;
  width: 100%;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 1rem;
  :hover {
    background: #f57c00;
  }
`;
const LogoutButton = styled.div`
  padding: 1rem;
  background: #ff4040;
  color: white;
  text-align: center;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background: #f80000;
  }
  @media only screen and (min-width: 768px) {
    display: none;
  }
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
const MobileBanner = styled(DashboardItem)`
  @media only screen and (min-width: 768px) {
    display: none;
  }
`;
const Span = styled.span`
  padding: 0 1rem;
  max-width: 100%;
  word-break: break-all;
`;
const LinkURI = styled.p`
  display: inline-block;
`;
const Desc = styled.div`
  color: #aaa;
  margin: 1rem 0;
  text-align: justify;
`;

const { GET_AMBASSADOR_INFO } = API_ROUTES;

const ambassadorDashboard = () => {
  const { state, dispatch } = useContext(AuthContext);
  const [copied, setCopied] = useState(false);
  const [amb, setAmb] = useState({});
  const history = useHistory();
  const LogoutUser = () => {
    dispatch({
      type: 'LOGOUT',
    });
    history.push('/');
  };
  useEffect(() => {
    if (!state.isLoggedIn && state.type !== 'amb') {
      LogoutUser();
    }
    const GetAmbInfo = async () => {
      const { token } = state;
      const resp = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/${GET_AMBASSADOR_INFO}`,
        {
          headers: { token },
        }
      );
      setAmb(resp.data);
    };
    GetAmbInfo();
  }, []);
  const link = `https://www.tedxjnec.com/registration?aid=${state.user.aId}`;
  const copyLink = () => {
    navigator.clipboard.writeText(link);
    setTimeout(() => {
      setCopied(true);
    }, 500);
  };
  return (
    <AmbassdorPageLayout onLogout={LogoutUser} name={state.user.name}>
      <Dashboard>
        <h2>Ambassador Dashboard</h2>
        <MobileBanner>
          <h4>
            <b>Hi,</b> {state.user.name}{' '}
          </h4>
        </MobileBanner>
        <DashboardItem>
          <Desc>
            {' '}
            Below is your custom referal link. Copy it with your promotion
            message as we will record your Reach and Conversions{' '}
          </Desc>
          <LinkURI>
            <b>Your Unique Referral Link:</b>
            <br /> <Span>{link}</Span>
          </LinkURI>
          <LinkText onClick={copyLink}>
            {copied ? 'Link Copied!' : 'Copy Link'}
          </LinkText>
        </DashboardItem>
        <DashboardItem>
          <Desc>
            {' '}
            Below is your Reach it denotes the number of users who have
            registered through your referal Link{' '}
          </Desc>
          <h2>
            <b>Reach:</b> {amb.reach}
          </h2>
        </DashboardItem>
        <DashboardItem>
          <Desc>
            {' '}
            Below are your Conversions, it denotes the number of users who have
            registered through your referal Link and also Booked a ticket for
            TEDx JNEC{' '}
          </Desc>
          <h2>
            <b>Conversions:</b> {amb.conversions}
          </h2>
        </DashboardItem>
        <LogoutButton onClick={LogoutUser}>Logout</LogoutButton>
      </Dashboard>
    </AmbassdorPageLayout>
  );
};

export default ambassadorDashboard;
