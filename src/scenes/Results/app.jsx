//  External modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//  Components+Containers
import GifsLikedResult from './containers/GifsLikedResult';
import WeirdnessScore from './containers/WeirdnessScore';

class App extends Component {

  render() {
    return (
      <div>
        <div className="banner">
          <h2>Weirdness Calculator</h2>
        </div>
        <div className="results">
          <WeirdnessScore />
          <div className="final-gifs-liked">
            <p style={{ textAlign: "left" }}>
              <strong>The GIFs you liked</strong>
            </p>
            <GifsLikedResult />
          </div>
          <Link to="/">
            <button className="btn btn-primary my-2 my-sm-0"
              type="submit"
              onClick={this.clearGifsLiked}
              style={{ borderRadius: 2 }}>
              START OVER
          </button>
          </Link>
        </div>
      </div >
    );
  }
}

export default App;
