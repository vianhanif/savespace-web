import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import allReducers from '../_reducers';

// Setup
let middleWare = [promise(), thunk];

// Logger Middleware. This always has to be last
if (process.env.NODE_ENV !== 'production') {
  middleWare = [...middleWare, logger];
}

const store = createStore(allReducers, applyMiddleware(...middleWare));

export default store;

// const middleware = applyMiddleware(promise(), thunk, logger);

// const store = createStore(allReducers, middleware);

// export default store;
