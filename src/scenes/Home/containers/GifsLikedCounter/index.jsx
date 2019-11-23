//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

class GifsLikedCounter extends Component {
  render() {
    const countsLeft = 5 - this.props.gifsLikedCount;

    switch (countsLeft) {
      case 0:
        return <p>Calculate your score!</p>;
      case 1:
        return <p>You must <i> Like </i>
          {countsLeft} more GIF to calculate your score.</p>;
      default:
        return <p>You must <i> Like </i>{countsLeft} more GIFs
        to calculate your score.</p>;
    };
  }
}

function mapStateToProps(state) {
  return { gifsLikedCount: state.gifsLiked.count };
}

export default connect(mapStateToProps)(GifsLikedCounter);

