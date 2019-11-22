import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './search_bar';
import Gif from '../containers/gif';
import Button from './button';
import GifsLiked from '../containers/gifs_liked';

class App extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <h2>Weirdness Calculator</h2>
        </div>
        <div className="main-content">
          <div className="left-scene">
            <div className="search-container">
              <p>
                Find out how weird you are by selecting the GIFs that make
                you laugh. We'll show you the latest weird ones to start,
                but you can move the slider to make them weirder.
              </p>
              <p>
                When you find a GIF that you like, press the
                <i>Like</i> button. Once you like 5 GIFs, we'll show you how
                weird you are.
              </p>
              <SearchBar />
            </div>
            <div className="gif-result">
              <h3>YOUR RESULT</h3>
              <Gif />
              <br />
              <br />
              <Button />
            </div>
          </div>
          <div className="right-scene">
            <h3>YOUR LIKED GIFS</h3>
            <GifsLiked />
            <br />
            <br />
            <br />
            <button className="btn btn-primary btn-like my-2 my-sm-0" type="submit">
              CALCULATE MY WEIRDNESS SCORE
            </button>
            <br />
            <br />
            <p>
              You must
              <i> Like </i>
              1 more GIF to calculate your score.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
