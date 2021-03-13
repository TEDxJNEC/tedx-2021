import React, { useState } from 'react';
import 'common/admin_login.scss';
import img from 'assets/Login.svg';

const AdminLogin = () => {
  const [info, setinfo] = useState({
    username: '',
    password: '',
  });

  const inputEvent = (event) => {
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

  const submitEvent = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login">
      <div className="design">
        <img src={img} className="image" alt="design" />
      </div>

      <form onSubmit={submitEvent}>
        <h2>User LogIn</h2>
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
      </form>
    </div>
  );
};

export default AdminLogin;
