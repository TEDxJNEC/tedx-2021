import React, { useEffect, useContext } from 'react';
import { AuthContext } from 'routes';
import ROUTES from 'constants/routes';
import { useHistory, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLayout from 'layouts';
import paymentSrc from 'assets/original.gif';
import paymentSrc2 from 'assets/moon.gif';

const ContentWrapper = styled.div`
  height: calc(100% - 80px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const WrapperCard = styled.div`
  background-color: #353535;
  font-size: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  margin: 0 2rem;
  padding: 3rem 3rem;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
    padding: 1.5rem 1.5rem;
  }
`;

const Vector = styled.img`
  height: 320px;
  width: auto;
  align-items: flex-start;

  @media only screen and (max-width: 600px) {
    height: 180px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 2.3em;
`;
const SubHeading = styled.h4``;
const RedirectLink = styled(NavLink)`
  background-color: #76f500;
  margin: 0 auto;
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  color: #000;
  font-weight: bold;
  text-decoration: none;
  text-align: center;
  position: relative;
  font-size: 1.2em;
  transition: 0.5s;
  :after {
    content: '\\00bb';
    position: absolute;
    opacity: 0;
    right: 2rem;
    line-height: 1;
    font-size: 1.2em;
    transition: 0.5s;
  }
  :hover {
    padding-right: 2.2rem;
    :after {
      opacity: 1;
      right: 12px;
    }
  }
`;
const { LOGIN, HOME } = ROUTES;
const successRegistration = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(AuthContext);
  useEffect(() => {
    const { token } = state;
    if (!token) {
      dispatch({
        type: 'LOGOUT',
      });
      history.push(LOGIN);
    }
  }, []);
  return (
    <DefaultLayout>
      <ContentWrapper>
        <WrapperCard>
          <Vector src={window.screen.width >= 720 ? paymentSrc2 : paymentSrc} />
          <Heading>Payment Successful !!!</Heading>
          <SubHeading>
            You will recieve the Invoice on your registered e-mail and tickets
            will be available on the web app one week before the event
          </SubHeading>
          <RedirectLink to={HOME}>Continue to Website</RedirectLink>
        </WrapperCard>
      </ContentWrapper>
    </DefaultLayout>
  );
};

export default successRegistration;
