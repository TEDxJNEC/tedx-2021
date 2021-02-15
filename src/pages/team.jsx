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
      </Helmet>
      <div className="team-page-wrapper">
        <TempTeam />
        <TeamComponent />
      </div>
    </DefaultLayout>
  );
}

export default Team;
