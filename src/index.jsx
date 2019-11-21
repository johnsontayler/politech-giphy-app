//  React
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';

//  Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import gifReducer from './reducers/gif_reducer';

import App from './components/app';

const reducers = combineReducers({
  gif: gifReducer
});

const middlewares = applyMiddleware(logger);

//  Render
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>, root
  );
}
