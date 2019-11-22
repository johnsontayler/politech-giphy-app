import React, { Component } from 'react';
import { connect } from 'react-redux';
class Gif extends Component {

  render() {
    const gif = this.props.gif;
    const src = `https://media.giphy.com/media/${gif.id}/giphy.gif`;

    return (
      <img src={src} alt="gif" className="gif" />
    );
  }
}

function mapStateToProps(state) {
  return {
    gif: state.gif
  };
}

export default connect(mapStateToProps, null)(Gif);
