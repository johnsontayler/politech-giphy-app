//  External modules
import React from 'react';
import { connect } from 'react-redux';

//  Components
import Gif from '../../../components/Gif';

const GifResult = (props) => {
  const gifResult = props.gifResult;

  return (
    <Gif id={gifResult.id} />
  );
}

function mapStateToProps(state) {
  return {
    gifResult: state.gifs.result
  };
}

export default connect(mapStateToProps, null)(GifResult);
