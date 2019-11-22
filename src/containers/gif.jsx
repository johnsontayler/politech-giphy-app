import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { setGif } from '../actions';

class Gif extends Component {

  componentWillMount() {
    this.props.setGif();
  }

  render() {
    // console.log(this.props.gif)
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={src} alt="gif" className="gif" />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { setGif: setGif },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    gif: state.gif
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Gif);
