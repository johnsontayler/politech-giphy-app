import React, { Component } from './node_modules/react';
import { connect } from './node_modules/react-redux';

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