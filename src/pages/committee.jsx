import React from 'react';
import DefaultLayout from 'layouts';

const Committee = ({ match }) => {
  return <DefaultLayout>{match.params.committee}</DefaultLayout>;
};

export default Committee;
