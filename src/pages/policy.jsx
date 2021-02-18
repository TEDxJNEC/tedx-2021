import React from 'react';
import styled from 'styled-components';
import DefaultLayout from 'layouts';
import { Helmet } from 'react-helmet';

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
      <Helmet>
        <title>Privacy Policy - TEDx JNEC</title>
        <meta name="description" content="PRIVACY POLICY of TEDx JNEC" />
        <meta
          name="keywords"
          content="ted,tedx, jnec, tedxjnec, team, mgmjnec, aurangabad, tedxaurangabad, best, event, tedxtalk, talk, tedtalk, events, engineering, college, pruthvi, shetty, web, kintsugi, tedxjnec,mgm,mgmu,pruthvishetty,top,events,about,abhishek,manik,soham,tamboli,priyanka,jain,terms,service"
        />
        <meta name="author" content="pruthvishetty" />

        <meta property="og:url" content="https://tedxjnec.com/policy" />
        <meta
          property="og:title"
          content="PRIVACY POLICY | TEDx JNEC | Kintsugi"
        />
        <meta
          property="og:description"
          content="TERMS OF SERVICE of TEDx JNEC"
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="TEDxJNEC" />
        <meta property="og:locale" content="en_us" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tedxjnec" />
        <meta name="twitter:creator" content="@pruthvi2103" />
        <meta name="twitter:url" content="https://tedxjnec.com/policy" />
        <meta
          name="twitter:title"
          content="PRIVACY POLICY | TEDx JNEC | Kintsugi"
        />
        <meta
          name="twitter:description"
          content="PRIVACY POLICY of TEDx JNEC"
        />
        <link rel="author" href="//github.com/pruthvi2103" />
        <link rel="canonical" href="//tedxjnec.com/policy" />
      </Helmet>
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
