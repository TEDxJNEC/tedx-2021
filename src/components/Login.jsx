import React from 'react';
import styled from 'styled-components';
import * as queryString from 'query-string';
import 'common/colors.scss';
import 'common/fonts.scss';
import Login from './icons/Login';

const LeftSide = styled.div``;
const RightSide = styled.div``;

const RightWrapper = styled.div``;

const ContainerPageWrapper = styled.div`
  display: flex;
  font-family: '"Poppins" sans-serif';
  min-height: calc(100% - 80px);
  justify-content: center;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContentWrapper = styled.div`
  background: #353535;
  box-shadow: 3px 3px 2px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 2rem 5rem;
  gap: 4rem;
  margin: 0 3rem;
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    padding: 1.5rem 1rem;
  }
`;

const CustomGoogleButton = styled.a`
  transition: background-color 0.3s, box-shadow 0.3s;

  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;

  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 11px;

  &:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }
`;

const Subheadline = styled.h2`
  color: #fff;
  font-size: 1rem;
  margin: 1rem 0;
  text-align: center;
  z-index: 10;
`;

const Heading = styled.h1`
  color: #fff;
  text-align: center;
`;

const RegLogin = () => {
  const stringifiedParams = queryString.stringify({
    client_id: process.env.REACT_APP_GOOGLE_OAUTH_ID,
    redirect_uri: process.env.REACT_APP_GOOGLE_REDIRECT_URI,
    scope: [
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.googleapis.com/auth/userinfo.profile',
    ].join(' '), // space seperated string
    response_type: 'code',
    access_type: 'offline',
    prompt: 'consent',
  });

  const googleLoginUrl = `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`;
  return (
    <ContainerPageWrapper>
      <ContentWrapper>
        <LeftSide>
          <Login />
        </LeftSide>
        <RightSide>
          <RightWrapper>
            <Heading>Account Login</Heading>

            <ButtonWrapper>
              <Subheadline>Login with your Google Account</Subheadline>

              <CustomGoogleButton href={googleLoginUrl}>
                Sign in with Google
              </CustomGoogleButton>
            </ButtonWrapper>
          </RightWrapper>
        </RightSide>
      </ContentWrapper>
    </ContainerPageWrapper>
  );
};

export default RegLogin;
