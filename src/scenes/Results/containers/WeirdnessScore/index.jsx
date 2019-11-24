import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeirdnessScore extends Component {

  render() {
    return (
      <h3 className="final-score">
        <strong>
          You scored a
          {" " + this.props.finalScore + " "}
          out of 10 on the weirdness scale!
        </strong>
      </h3>
    );
  }
}

function mapStateToProps(state) {
  return { finalScore: state.weirdness.finalScore };
}

export default connect(mapStateToProps)(WeirdnessScore);