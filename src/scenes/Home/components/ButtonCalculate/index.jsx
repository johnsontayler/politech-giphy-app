//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { calculateScore } from '../../services/setWeirdness/actions';

class ButtonCalculate extends Component {

  handleCalculation = (e) => {
    // e.preventDefault();
    this.props.calculateScore()
  };

  render() {
    return (
      <Link to="/results" onClick={this.handleCalculation}>
        <button className="btn btn-primary btn-calcuate my-2 my-sm-0"
          type="submit"
          style={{ borderRadius: 2 }}>
          CALCULATE MY WEIRDNESS SCORE
        </button>
      </Link>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ calculateScore: calculateScore }, dispatch);
}

export default connect(null, mapDispatchToProps)(ButtonCalculate);
