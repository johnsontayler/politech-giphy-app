//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  Components
import GifsLikedResult from '../../components/GifsLikedResult';
import WeirdnessScore from '../../components/WeirdnessScore';

class WeirdnessResults extends Component {
  render() {
    const {
      gifsLiked,
      weirdness: { finalScore, scores }
    } = this.props;

    return (
      <div>
        <WeirdnessScore finalScore={finalScore} />
        <div className="final-gifs-liked">
          <p style={{ textAlign: "left" }}>
            <strong>The GIFs you liked</strong>
          </p>
          <GifsLikedResult
            gifsLiked={gifsLiked}
            scores={scores}
          />
        </div>
      </div>
    )
  };
}

function mapStateToProps(state) {
  return {
    gifsLiked: state.gifs.liked,
    weirdness: state.weirdness
  };
}

export default connect(mapStateToProps)(WeirdnessResults);
