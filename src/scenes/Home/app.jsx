//  External modules
import React, { Component } from 'react';

//  Components+Containers
import SearchBar from './components/SearchBar';
import ButtonLike from './components/ButtonLike';
import GifResult from './containers/GifResult';
import GifsLiked from './containers/GifsLiked';
import GifsLikedCounter from './containers/GifsLikedCounter';

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
              <GifResult />
              <br />
              <br />
              <ButtonLike />
            </div>
          </div>
          <div className="right-scene">
            <h3>YOUR LIKED GIFS</h3>
            <GifsLiked />
            <br />
            <br />
            <br />
            <button className="btn btn-primary btn-calcuate my-2 my-sm-0"
              type="submit"
              style={{ borderRadius: 2 }}>
              CALCULATE MY WEIRDNESS SCORE
            </button>
            <br />
            <br />
            <GifsLikedCounter />
          </div>
        </div>
      </div >
    );
  }
}

export default App;
