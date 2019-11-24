//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  Components
import Gif from '../../../components/Gif';

class GifResult extends Component {

  render() {
    const gifResult = this.props.gifResult;

    return (
      <Gif id={gifResult.id} />
    );
  }
}

function mapStateToProps(state) {
  return {
    gifResult: state.gifs.result
  };
}

export default connect(mapStateToProps, null)(GifResult);
