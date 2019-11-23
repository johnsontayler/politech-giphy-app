import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Gif from './gif';

class GifsLiked extends Component {
  render() {
    const gifsLiked = this.props.gifsLiked;

    return (
      <div className="gifs-liked">
        {gifsLiked.map((gif, index) => {
          return (
            <div style={{ position: "relative" }}
              key={"div" + index}>
              <Gif id={gif.id} key={index} />
              <FontAwesomeIcon icon={faTimesCircle}
                className="fa-times-circle"
                key={"icon" + index}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gifsLiked: state.gifsLiked };
}

export default connect(mapStateToProps)(GifsLiked);

