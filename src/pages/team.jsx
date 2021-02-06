import TeamComponent from 'components/team';
import TempTeam from 'components/TempTeam';
import DefaultLayout from 'layouts';
import React from 'react';

function Team() {
  return (
    <DefaultLayout>
      <TempTeam />
      <TeamComponent />
    </DefaultLayout>
  );
}

export default Team;
