import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {CookiesProvider} from 'react-cookie';

import Store from './_helpers/store';
import App from './App';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './sass/App.scss';

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <CookiesProvider>
    <Provider store={Store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root')
);
registerServiceWorker();
