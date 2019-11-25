//  External modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

//  Internal modules
import '../assets/stylesheets/application.scss';
import Home from './scenes/Home/app';
import Results from './scenes/Results/app';

//  Reducers
import setGifsReducer from './scenes/Home/services/setGifs/reducer';
import setWeirdnessReducer from './scenes/Home/services/setWeirdness/reducer';
import setResultsReducer from './scenes/Results/services/setResults/reducer';

const reducers = combineReducers({
  gifs: setGifsReducer,
  weirdness: setWeirdnessReducer,
  results: setResultsReducer
});

const middlewares = applyMiddleware(logger, reduxPromise);

//  Render
const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={createStore(reducers, middlewares)}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/results" component={Results} />
        </Switch>
      </Router>
    </Provider>, root
  );
}
