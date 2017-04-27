import React from 'react';
import ReactDOM from 'react-dom';

import DATA from './data'
import MenuContainer from './MenuContainer';

ReactDOM.render(
  <MenuContainer menuData={DATA} />,
  document.getElementById('root')
);
