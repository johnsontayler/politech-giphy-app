//  React
import React from 'react';
import ReactDOM from 'react-dom';
import '../assets/stylesheets/application.scss';

//  Redux
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import gifReducer from './reducers/gif_reducer';

import App from './components/app';

const reducers = combineReducers({
  gif: gifReducer
});

//  Render
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers)}>
      <App />
    </Provider>, root
  );
}
