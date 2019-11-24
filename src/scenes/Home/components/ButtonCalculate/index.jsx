//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { calculateScore } from '../../services/setWeirdness/actions';

class ButtonCalculate extends Component {
  handleCalculation = () => {
    if (this.props.gifsLikedCount < 5) {
      alert("You must like 5 GIFs to calculate your score.")
    } else {
      this.props.calculateScore();
    }
  };

  render() {
    let path = ""
    this.props.gifsLikedCount < 5 ? path = "/" : path = "/results";

    return (
      <Link to={path} onClick={this.handleCalculation}>
        <button
          className="btn btn-primary btn-calcuate my-2 my-sm-0"
          type="submit"
          style={{ borderRadius: 2 }}>
          CALCULATE MY WEIRDNESS SCORE
        </button>
      </Link>
    );
  }
}

function mapStateToProps(state) {
  return { gifsLikedCount: state.gifs.likedCount };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ calculateScore: calculateScore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonCalculate);
