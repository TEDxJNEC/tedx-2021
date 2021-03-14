import React from 'react';
import styled from 'styled-components';
import DefaultLayout from 'layouts';

const PageWrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TNCcontainer = styled.div`
  border: 1px solid #f6c90e;
  padding: 24px 24px;
  @media (min-width: 768px) {
    padding: 24px 64px;
  }
  p {
    text-align: justify;
    line-height: 1.8;
    font-size: 1.2rem;
  }
  a {
    color: #f6c90e;
  }
  h1 {
    text-align: center;
    margin: 2rem 0;
  }
`;
const Container = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: 768px) {
    width: 750px;
  }
  @media (min-width: 992px) {
    width: 970px;
  }
  @media (min-width: 1200px) {
    width: 1170px;
  }
`;

const TermsConditions = () => {
  return (
    <DefaultLayout>
      <PageWrapper>
        <Container>
          <TNCcontainer>
            <h1>REGISTRATIONS ARE CLOSED</h1>

            <p>Contact 9834153735 for queries</p>
          </TNCcontainer>
        </Container>
      </PageWrapper>
    </DefaultLayout>
  );
};
export default TermsConditions;
