// External Modules
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Gif from '../Gif';

// Actions 
import { setGifError } from
  '../../scenes/Home/services/setGifs/actions';

class ErrorBoundary extends Component {

  componentDidCatch(error, errorInfo) {
    this.props.setGifError(error, errorInfo)
  }

  render() {
    const { gifs: { resultError, errorInfo } } = this.props;

    if (errorInfo) {
      return (
        <div>
          <h2>Something went wrong</h2>
          <Gif id="W7RVlWfc1O9gY" />
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {resultError && resultError.toString()}
            <br />
            {errorInfo.componentStack}
          </details>
        </div>
      );
    }

    return this.props.children;
  }
};

function mapStateToProps(state) {
  return { gifs: state.gifs };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGifError: setGifError },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorBoundary);
