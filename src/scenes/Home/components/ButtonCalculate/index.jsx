//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { finalScore } from '../../services/setGifs/actions';

class ButtonCalculate extends Component {

  handleCalculation = (e) => {
    e.preventDefault();
    this.props.finalScore();
  };

  render() {
    return (
      <Link to="/results">
        <button className="btn btn-primary btn-calcuate my-2 my-sm-0"
          type="submit"
          onClick={this.handleCalculation}
          style={{ borderRadius: 2 }}>
          CALCULATE MY WEIRDNESS SCORE
        </button>
      </Link>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { finalScore: finalScore },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ButtonCalculate);
