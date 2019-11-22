import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import SearchBar from './search_bar';
import Gif from '../containers/gif';
import LikedGifs from '../containers/liked_gifs';

class App extends Component {
  render() {
    const gifsLiked = [
      { id: "9Xh1CGm4Hzo4g" },
      { id: "3o7TKsMrLzh993NPsA" },
      { id: "WeaIjMN9QUrsI" },
      { id: "anxJh9Vufpgvm" },
      { id: "tZqHBmFpCg0VeXm1Em" }
    ];

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
              <button className="btn btn-primary btn-like my-2 my-sm-0" type="submit"
                style={{ padding: "6px 40px" }}>
                <FontAwesomeIcon icon={faThumbsUp} />
              </button>
            </div>
          </div>
          <div className="right-scene">
            <h3>YOUR LIKED GIFS</h3>
            <LikedGifs gifsLiked={gifsLiked} />
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
