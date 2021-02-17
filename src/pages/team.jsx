import React from 'react';
import { Helmet } from 'react-helmet';
import TeamComponent from 'components/team';
import TempTeam from 'components/TempTeam';
import DefaultLayout from 'layouts';

function Team() {
  return (
    <DefaultLayout>
      <Helmet>
        <title>Meet the Team - TEDx JNEC</title>
        <meta
          name="description"
          content="The TEDx JNEC team comprises of a group of independent individuals working towards a common goal. The Team is determined to make great ideas accessible and spark conversation."
        />
        <meta
          name="keywords"
          content="ted,tedx, jnec, tedxjnec, team, mgmjnec, aurangabad, tedxaurangabad, best, event, tedxtalk, talk, tedtalk, events, engineering, college, pruthvi, shetty, web, kintsugi, tedxjnec,mgm,mgmu,pruthvishetty,top,events,about,abhishek,manik,soham,tamboli,priyanka,jain"
        />
        <meta name="author" content="pruthvishetty" />

        <meta property="og:url" content="https://tedxjnec.com/team" />
        <meta property="og:title" content="TEAM | TEDx JNEC | Kintsugi" />
        <meta
          property="og:description"
          content="The TEDx JNEC team comprises of a group of independent individuals working towards a common goal. The Team is determined to make great ideas accessible and spark conversation."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:site_name" content="TEDxJNEC" />
        <meta property="og:locale" content="en_us" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tedxjnec" />
        <meta name="twitter:creator" content="@pruthvi2103" />
        <meta name="twitter:url" content="https://tedxjnec.com/team" />
        <meta name="twitter:title" content="TEAM | TEDx JNEC | Kintsugi" />
        <meta
          name="twitter:description"
          content="The TEDx JNEC team comprises of a group of independent individuals working towards a common goal. The Team is determined to make great ideas accessible and spark conversation."
        />
        <meta name="twitter:image:src" content="%PUBLIC_URL%/logo192.png" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="author" href="//github.com/pruthvi2103" />
        <link rel="canonical" href="//tedxjnec.com/team" />
      </Helmet>
      <div className="team-page-wrapper">
        <TempTeam />
        <TeamComponent />
      </div>
    </DefaultLayout>
  );
}

export default Team;
