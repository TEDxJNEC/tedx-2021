import TeamComponent from 'components/team';
import TempTeam from 'components/TempTeam';
import DefaultLayout from 'layouts';
import React from 'react';

function Team() {
  return (
    <DefaultLayout>
      <div className="team-page-wrapper">
        <TempTeam />
        <TeamComponent />
      </div>
    </DefaultLayout>
  );
}

export default Team;
