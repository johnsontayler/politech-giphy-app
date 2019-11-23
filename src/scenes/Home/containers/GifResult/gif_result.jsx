import React, { Component } from 'react';
import { connect } from 'react-redux';

import Gif from './gif';

class GifResult extends Component {

  render() {
    const gif = this.props.gif;

    return (
      <Gif id={gif.id} />
    );
  }
}

function mapStateToProps(state) {
  return {
    gif: state.gif
  };
}

export default connect(mapStateToProps, null)(GifResult);
