import React from 'react';
import ReactDOM from 'react-dom';

import PaginationComicsProvider from './contexts/PaginationComics';

import { WrapperIndex } from './containers/WrapperIndex/WrapperIndex';

import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <PaginationComicsProvider>
      <WrapperIndex />
    </PaginationComicsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);