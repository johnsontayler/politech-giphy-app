//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Button from '../../../../components/Button'

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
        <Button
          id="btnCalculate"
          style={{ borderRadius: 2 }}
          text="CALCULATE MY WEIRDNESS SCORE" />
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
