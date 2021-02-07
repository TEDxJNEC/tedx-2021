import React from 'react';
import DefaultLayout from 'layouts';
import CommitteeComponent from 'components/CommitteeComponent';
import TeamHeadings from 'assets/team/teamHeadings';
import 'common/committee.scss';
import TempTeam from 'components/TempTeam';

const Committee = ({ match }) => {
  const { committee } = match.params;
  return (
    <DefaultLayout>
      <TempTeam />
      <h1 className="committee__header-name">{TeamHeadings[committee]}</h1>
      <div className="committee-wrapper">
        <CommitteeComponent Committee={committee} />
      </div>
    </DefaultLayout>
  );
};

export default Committee;
