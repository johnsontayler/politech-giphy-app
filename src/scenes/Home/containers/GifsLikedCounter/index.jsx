//  External modules
import React from 'react';
import { connect } from 'react-redux';

const GifsLikedCounter = (props) => {
  const countsLeft = 5 - props.gifsLikedCount;

  switch (countsLeft) {
    case 0:
      return <p>Calculate your score!</p>;
    case 1:
      return (
        <p>
          You must
          <i> Like </i>
          {countsLeft} more GIF to calculate your score.
        </p>
      )
    default:
      return (
        <p>
          You must
          <i> Like </i>
          {countsLeft} more GIFs
          to calculate your score.
        </p>
      )
  };
}

function mapStateToProps(state) {
  return { gifsLikedCount: state.gifs.likedCount };
}

export default connect(mapStateToProps)(GifsLikedCounter);
