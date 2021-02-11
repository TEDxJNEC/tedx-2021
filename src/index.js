import React from 'react';
import ReactDOM from 'react-dom';
import './common/main.scss';
import Routes from './routes';

require('dotenv').config();

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);
