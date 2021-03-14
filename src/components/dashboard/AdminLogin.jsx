import React, { useState } from 'react';
import styled from 'styled-components';
import 'common/admin_login.scss';
import img from 'assets/Login.svg';
import axios from 'axios';
import API_ROUTES from 'constants/api';
import { useHistory } from 'react-router-dom';
import ROUTES from 'constants/routes';

const ErrorMessage = styled.div`
  color: red;
  margin: 12px auto;
`;
const AdminLogin = () => {
  const [info, setinfo] = useState({
    username: '',
    password: '',
  });
  const [errors, setError] = useState('');
  const { EVENT_USER_LOGIN } = API_ROUTES;
  const { STREAM } = ROUTES;
  const history = useHistory();

  const inputEvent = (event) => {
    setError('');
    // console.log(event.target.name);
    // console.log(event.target.value);
    const { value, name } = event.target;

    setinfo((preVal) => {
      if (name === 'username') {
        return {
          username: value,
          password: preVal.password,
        };
      }
      if (name === 'password') {
        return {
          username: preVal.username,
          password: value,
        };
      }
      return null;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      username: info.username,
      password: info.password,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/${EVENT_USER_LOGIN}`, payload)
      .then((resp) => {
        localStorage.setItem('eventToken', resp.data.token);
        localStorage.setItem('eventEmail', resp.data.user.email);
        history.push(STREAM);
      })
      // eslint-disable-next-line no-console
      .catch((err) => {
        console.log(err);
        setError('Invalid Credentials');
      });
  };

  return (
    <div className="login">
      <div className="design">
        <img src={img} className="image" alt="design" />
      </div>

      <form onSubmit={handleSubmit}>
        <h2>Event LogIn</h2>
        <div className="input-group">
          <input
            type="text"
            name="username"
            required="required"
            autoComplete="off"
            onChange={inputEvent}
            value={info.username}
          />
          <span>Username</span>
        </div>
        <div className="input-group">
          <input
            type="Password"
            name="password"
            required="required"
            onChange={inputEvent}
            value={info.password}
          />
          <span>Password</span>
        </div>
        <button type="submit">LOG IN</button>
        <ErrorMessage>{errors}</ErrorMessage>
      </form>
    </div>
  );
};

export default AdminLogin;
