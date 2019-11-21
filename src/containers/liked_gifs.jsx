import React, { Component } from 'react';
import Gif from './gif.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

class LikedGifs extends Component {
  render() {
    return (
      <div className="gifs-liked">
        {this.props.gifsLiked.map((gif, index) => {
          return (
            <div style={{ position: "relative" }} key={index}>
              <Gif id={gif.id} key={gif.id} />
              <FontAwesomeIcon icon={faTimesCircle}
                className="fa-times-circle" key={"icon" + gif.id} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default LikedGifs;