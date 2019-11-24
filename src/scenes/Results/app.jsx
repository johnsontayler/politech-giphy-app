//  External modules
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//  Components+Containers
import GifsLikedResult from './components/GifsLikedResult/';

class App extends Component {
  render() {
    return (
      <div>
        <div className="banner">
          <h2>Weirdness Calculator</h2>
        </div>
        <div className="results">
          <h3 className="final-score">
            <strong>You scored an 8 out of 10 on the weirdness scale!</strong>
          </h3>
          <div className="final-gifs-liked">
            <p style={{ textAlign: "left" }}>
              The GIFs you liked
            </p>
            <GifsLikedResult />
          </div>
          <Link to="/">
            <button className="btn btn-primary my-2 my-sm-0"
              type="submit"
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
