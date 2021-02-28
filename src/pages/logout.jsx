import React, { useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from 'routes';

const logout = () => {
  const history = useHistory();
  const { dispatch } = useContext(AuthContext);
  useEffect(() => {
    dispatch({
      type: 'LOGOUT',
    });
    history.push('/');
  }, []);
  return <div>Logging Out</div>;
};

export default logout;
