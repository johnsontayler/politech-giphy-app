//  External modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createHistory as history } from 'history';

//  Internal modules
import '../assets/stylesheets/application.scss';
import Home from './scenes/Home/app';

//  Reducers
import gifReducer from './scenes/Home/services/setGifs/reducers/gif_reducer';
import gifsLikedReducer from './scenes/Home/services/setGifs/reducers/gifs_liked_reducer';

const reducers = combineReducers({
  gif: gifReducer,
  gifsLiked: gifsLikedReducer,
});

const middlewares = applyMiddleware(logger, reduxPromise);

//  Render
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, middlewares)}>
      <Router history={history}>
        <Switch>
          <Route path="/" component={Home} />
          {/* <Route path="/:results" component={AppResults} /> */}
        </Switch>
      </Router>
    </Provider>, root
  );
}
