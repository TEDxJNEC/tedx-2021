import React from 'react';
import styled from 'styled-components';
import DefaultLayout from 'layouts';

const PageWrapper = styled.div`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TOCcontainer = styled.div`
  border: 1px solid #f6c90e;
  padding: 24px 24px;
  @media (min-width: 768px) {
    padding: 24px 64px;
  }
  p {
    text-align: justify;
    line-height: 1.6;
    font-size: 1.2rem;
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
const policyText1 = `By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.`;
const policyText2 = `To help explain things as clearly as possible in this Privacy Policy, every time any of these terms are referenced, are strictly defined as:`;

const TermsAndConditions = () => {
  return (
    <DefaultLayout>
      <PageWrapper>
        <Container>
          <TOCcontainer>
            <h1>TERMS OF SERVICE</h1>
            <p>{policyText1}</p>
            <h1>Definitions and key terms</h1>
            <p>{policyText2}</p>
            <p>
              <strong>Cookie:</strong> small amount of data generated by a
              website and saved by your web browser. It is used to identify your
              browser, provide analytics, remember information about you such as
              your language preference or login information.
            </p>
            <p>
              <strong>Company:</strong> when this policy mentions “Company,”
              “we,” “us,” or “our,” it refers to{' '}
              <a href="https://www.tedxjnec.com">www.tedxjnec.com</a> that is
              responsible for your information under this Privacy Policy
            </p>
            <p>
              <strong>Country:</strong> where{' '}
              <a href="https://www.tedxjnec.com">Pruthvi Shetty</a> or the
              owners/founders of{' '}
              <a href="https://www.tedxjnec.com/">TEDx JNEC</a> are based, in
              this case is <b>MGM JNEC Aurangabad</b>.
            </p>
          </TOCcontainer>
        </Container>
      </PageWrapper>
    </DefaultLayout>
  );
};
export default TermsAndConditions;
