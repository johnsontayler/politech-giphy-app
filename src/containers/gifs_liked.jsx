import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import Gif from './gif';

class GifsLiked extends Component {
  render() {
    const gifsLiked = this.props.gifsLiked;
    // console.log(gifsLiked);

    return (
      <div className="gifs-liked">
        {gifsLiked.map((gif) => {
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

function mapStateToProps(state) {
  return { gifsLiked: state.gifsLiked };
}

export default connect(mapStateToProps)(GifsLiked);

