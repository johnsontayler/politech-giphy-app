//  External modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

//  Internal modules
import '../assets/stylesheets/application.scss';
import App from './components/app';

//  Reducers
import { reducer as formReducer } from 'redux-form';
import gifReducer from './reducers/gif_reducer';
import gifsLikedReducer from './reducers/gifs_liked_reducer';

const reducers = combineReducers({
  gif: gifReducer,
  gifsLiked: gifsLikedReducer,
  form: formReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

//  Render
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, {}, middlewares)}>
      <App />
    </Provider>, root
  );
}
