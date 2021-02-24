import React, { useEffect, useContext } from 'react';
import { AuthContext } from 'routes';
import ROUTES from 'constants/routes';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLayout from 'layouts';
import paymentSrc from 'assets/payment.svg';

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

const RedirectLink = styled.a`
  background-color: #f57c00;
  margin: 0 auto;
  cursor: pointer;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  color: #fff;
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
const { LOGIN } = ROUTES;
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
          <Vector src={paymentSrc} />
          <Heading>Registration Successful !!!</Heading>
          <RedirectLink href="https://rzp.io/l/JZWllRPkq">
            Continue to Payment
          </RedirectLink>
        </WrapperCard>
      </ContentWrapper>
    </DefaultLayout>
  );
};

export default successRegistration;
