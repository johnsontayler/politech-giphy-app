import React, { Component } from 'react';

class Gif extends Component {
  render() {
    const src = "https://media.giphy.com/media/3o7TKyL1IgyDtHlg6A/giphy.gif"

    return (
      <img src={src} alt="gif" className="gif" />
    );
  }
}

export default Gif;