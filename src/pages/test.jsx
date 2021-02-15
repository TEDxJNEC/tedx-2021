import React, { useContext } from 'react';
// eslint-disable-next-line import/no-cycle
import { AuthContext } from 'routes';
import { Redirect } from 'react-router-dom';

const Test = () => {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;
  if (!state.isLoggedIn) {
    dispatch({
      type: 'LOGOUT',
    });
    // send to Book page after its made [TODO]
    return <Redirect to="/login" />;
  }
  return (
    <div className="callback-page-wrapper">
      <img
        style={{ borderRadius: '25%' }}
        alt="User Display"
        src={user.profile_uri}
      />
      Welcome : <b>{user.name}</b> <br />
      Email : <b>{user.email}</b> <br />
    </div>
  );
};

export default Test;
