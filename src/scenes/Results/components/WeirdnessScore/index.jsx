import React from 'react';

const WeirdnessScore = (props) => {
  const { finalScore } = props

  return (
    <h3 className="final-score">
      <strong>
        You scored a
          {" " + finalScore + " "}
        out of 10 on the weirdness scale!
        </strong>
    </h3>
  );
}

export default WeirdnessScore;