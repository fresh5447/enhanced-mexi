import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

import DATA from './data';
import App from './App';

ReactDOM.render(
  <App restaurantData={DATA} />,
  document.getElementById('root')
);
