import React, { Component } from 'react';
import Gif from './gif.jsx'

class LikedGifs extends Component {
  render() {
    return (
      <div className="gifs-liked">
        {this.props.gifsLiked.map(gif => <Gif id={gif.id} key={gif.id} />)}
      </div>
    );
  }
}

export default LikedGifs;