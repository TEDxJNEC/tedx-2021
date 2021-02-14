import React from 'react';
import { Helmet } from 'react-helmet';
import DefaultLayout from 'layouts';
import CommitteeComponent from 'components/CommitteeComponent';
import TeamHeadings from 'assets/team/teamHeadings';
import 'common/committee.scss';
import TempTeam from 'components/TempTeam';

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
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
