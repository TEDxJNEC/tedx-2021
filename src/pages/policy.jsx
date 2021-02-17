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
const policyText = `Privacy Policy
Your privacy is important to us. It is TEDx JNEC's policy to respect your privacy regarding any information we may collect from you across our website, https://www.tedxjnec.com/, and other sites we own and operate.

We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.

We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft, as well as unauthorized access, disclosure, copying, use or modification.

We don’t share any personally identifying information publicly or with third-parties, except when required to by law.

Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.

You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.

Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.

This policy is effective as of 15 February 2021.`;
const TermsAndConditions = () => {
  return (
    <DefaultLayout>
      <PageWrapper>
        <Container>
          <TOCcontainer>
            <h1>PRIVACY POLICY</h1>
            <p>{policyText}</p>
          </TOCcontainer>
        </Container>
      </PageWrapper>
    </DefaultLayout>
  );
};
export default TermsAndConditions;
