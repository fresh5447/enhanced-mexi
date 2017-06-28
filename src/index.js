import React from 'react';
import ReactDOM from 'react-dom';
require('./index.css');

import DATA from './data';
import MenuContainer from './MenuContainer';

ReactDOM.render(
  <MenuContainer restaurantData={DATA} />,
  document.getElementById('root')
);
