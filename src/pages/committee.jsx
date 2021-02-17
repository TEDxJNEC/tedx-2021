import React from 'react';
import { Helmet } from 'react-helmet';
import DefaultLayout from 'layouts';
import CommitteeComponent from 'components/CommitteeComponent';
import TeamHeadings from 'assets/team/teamHeadings';
import 'common/committee.scss';
import TempTeam from 'components/TempTeam';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

const Committee = ({ match }) => {
  const { committee } = match.params;
  return (
    <DefaultLayout>
      <Helmet>
        <title>{toTitleCase(committee)} Team - TEDx JNEC</title>
        <meta
          name="description"
          content={` ${toTitleCase(
            committee
          )} Team is awesome! The TEDx JNEC team comprises of a group of independent individuals working towards a common goal. The Team is determined to make great ideas accessible and spark conversation.`}
        />
        <meta
          name="keywords"
          content={`ted,tedx, jnec, tedxjnec, team, mgmjnec, aurangabad, tedxaurangabad, best, event, tedxtalk, talk, tedtalk, events, engineering, college, pruthvi, shetty, web, kintsugi, ${committee}, tedxjnec${committee},mgm,mgmu,pruthvishetty,top,events`}
        />
        <meta name="author" content="pruthvishetty" />

        <meta property="og:url" content="https://tedxjnec.com/" />
        <meta
          property="og:title"
          content={`${committee} TEAM | TEDx JNEC | Kintsugi`}
        />
        <meta
          property="og:description"
          content={`The ${committee} Team of TEDx JNEC has put in endless work and effort into  making this event possible and have imporoved and reinforced theri cracks with gold to keep the event together`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="%PUBLIC_URL%/logo192.png" />
        <meta property="og:site_name" content="TEDxJNEC" />
        <meta property="og:locale" content="en_us" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@tedxjnec" />
        <meta name="twitter:creator" content="@pruthvi2103" />
        <meta
          name="twitter:url"
          content={`https://tedxjnec.com/team/${committee}`}
        />
        <meta
          name="twitter:title"
          content={`${committee} TEAM | TEDx JNEC | Kintsugi`}
        />
        <meta
          name="twitter:description"
          content={`The ${committee} Team of TEDx JNEC has put in endless work and effort into  making this event possible and have imporoved and reinforced theri cracks with gold to keep the event together`}
        />
        <meta name="twitter:image:src" content="%PUBLIC_URL%/logo192.png" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="author" href="//github.com/pruthvi2103" />
        <link rel="canonical" href={`//tedxjnec.com/team/${committee}`} />
      </Helmet>
      <TempTeam />
      <h1 className="committee__header-name fancy">
        {TeamHeadings[committee]}
      </h1>
      <div className="committee-wrapper">
        <CommitteeComponent Committee={committee} />
      </div>
    </DefaultLayout>
  );
};

export default Committee;
