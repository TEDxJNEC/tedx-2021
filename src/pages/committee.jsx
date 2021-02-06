import React from 'react';
import DefaultLayout from 'layouts';
import CommitteeComponent from 'components/CommitteeComponent';
import TeamHeadings from 'assets/team/teamHeadings';

const Committee = ({ match }) => {
  const { committee } = match.params;
  return (
    <DefaultLayout>
      {TeamHeadings[committee]}
      <CommitteeComponent Committee={committee} />
    </DefaultLayout>
  );
};

export default Committee;
