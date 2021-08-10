import React from 'react';
import ReactDOM from 'react-dom';

import { WrapperIndex } from './containers/WrapperIndex/WrapperIndex';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <WrapperIndex />
  </React.StrictMode>,
  document.getElementById('root')
);