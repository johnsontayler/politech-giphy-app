import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gif from './gif';
import RemoveButton from '../components/remove_button';

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
              <RemoveButton gifIndex={index} />
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

