import React, { Component } from 'react';
import { connect } from 'react-redux';

class GifsLikedCounter extends Component {
  render() {
    return (
      <p>You must
        <i> Like </i>
        {`${this.props.gifsLikedCount} `}
        more GIFs to calculate your score.
      </p>
    );
  }
}

function mapStateToProps(state) {
  return { gifsLikedCount: state.gifsLiked.count };
}

export default connect(mapStateToProps)(GifsLikedCounter);

