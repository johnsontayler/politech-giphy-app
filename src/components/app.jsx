import React, { Component } from 'react';
import SearchBar from './search_bar';

class App extends Component {

  render() {

    return (
      <div>
        <div className="banner">
          <h2>Weirdness Calculator</h2>
        </div>
        <div className="main-content">
          <div className="left-scene">
            <p>Find out how weird you are by selecting the GIFs that make
              you laugh. We'll show you the latest weird ones to start,
              but you can move the slider to make them weirder.</p>
            <p>When you find a GIF that you like, press the <i>Like</i> button.
              Once you like 5 GIFs, we'll show you how weird you
              are.</p>
            <SearchBar />
          </div>
          <div className="right-scene">
          </div>
        </div>
      </div>
    );
  }
}

export default App;