//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  Components
import Gif from '../../components/Gif';

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
