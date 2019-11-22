import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Gif from './gif';

class GifsLiked extends Component {
  render() {
    return (
      <div className="gifs-liked">
        {this.props.gifsLiked.map((gif) => {
          return (
            <div style={{ position: "relative" }}
              key={"div" + gif.id}>
              <Gif gif={gif} key={gif.id} />
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

export default GifsLiked;
