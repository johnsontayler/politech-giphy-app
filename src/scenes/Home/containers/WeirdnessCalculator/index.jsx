//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

//  Components
import GifsLiked from '../../components/GifsLiked';
import Button from '../../../../components/Button';
import GifsLikedCounter from '../../components/GifsLikedCounter';

// Actions
import { unlikeGif, resetGifsLiked } from
  '../../services/setGifs/actions';
import { subtractScore, calculateScore, resetWeirdnessResult } from
  '../../services/setWeirdness/actions';

class WeirdnessCalculator extends Component {

  componentDidMount() {
    const calculatorHistory = history.state

    if (calculatorHistory) {
      this.props.resetGifsLiked()
      this.props.resetWeirdnessResult()
      delete calculatorHistory.state
    }
  }

  handleUnlikeGif = (gifIndex) => {
    this.props.unlikeGif(gifIndex);
    this.props.subtractScore(gifIndex);
  };

  handleCalculation = () => {
    if (this.props.gifsLikedCount < 5) {
      alert("You must like 5 GIFs to calculate your score.")
    } else {
      this.props.calculateScore();
    }
  };

  render() {
    const { gifsLiked, gifsLikedCount } = this.props;

    let resultsPath = "/results";
    if (gifsLikedCount < 5) resultsPath = "/";

    return (
      <div>
        <GifsLiked
          gifsLiked={gifsLiked}
          unlikeGif={this.handleUnlikeGif} />
        <br />
        <br />
        <br />
        <Link to={resultsPath}>
          <Button
            id="btnCalculate"
            handleClick={this.handleCalculation}
            style={{ borderRadius: 2 }}
            text="CALCULATE MY WEIRDNESS SCORE" />
        </Link>
        <br />
        <br />
        <GifsLikedCounter countsLeft={5 - gifsLikedCount} />
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    gifsLiked: state.gifs.liked,
    gifsLikedCount: state.gifs.likedCount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      unlikeGif: unlikeGif,
      subtractScore: subtractScore,
      calculateScore: calculateScore,
      resetGifsLiked: resetGifsLiked,
      resetWeirdnessResult: resetWeirdnessResult
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(WeirdnessCalculator);
