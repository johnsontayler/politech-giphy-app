//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  Components
import Gif from '../../../components/Gif';

class GifsLikedResult extends Component {

  render() {

    const weirdnessScores = this.props.weirdnessScores;

    return (
      <div className="gifs-liked">
        {this.props.gifsLiked.map((gif, index) => {
          return (
            <div style={{ position: "relative" }}
              key={"div" + index}>
              <p key={gif.title} className="gif-title">
                {gif.title.substring(0, 23)}
              </p>
              <Gif id={gif.id} key={index} />
              <p>{weirdnessScores[index]}/10</p>
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifsLiked: state.gifs.liked,
    weirdnessScores: state.weirdness.scores
  };
}

export default connect(mapStateToProps)(GifsLikedResult);

