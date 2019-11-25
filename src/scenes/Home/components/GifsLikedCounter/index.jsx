//  External modules
import React from 'react';

const GifsLikedCounter = (props) => {
  const { countsLeft } = props

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

export default GifsLikedCounter;
