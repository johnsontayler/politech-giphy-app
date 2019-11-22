import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Gif from './gif';

class LikedGifs extends Component {
  render() {
    return (
      <div className="gifs-liked">
        {this.props.gifsLiked.map((gif) => {
          return (
            <div style={{ position: "relative" }}
              key={"div" + gif.id}>
              <Gif id={gif.id} key={gif.id} />
              <FontAwesomeIcon icon={faTimesCircle}
                className="fa-times-circle"
                key={"icon" + gif.id}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default LikedGifs;
