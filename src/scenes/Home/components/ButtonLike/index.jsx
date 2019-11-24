//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

// Actions
import { likeGif } from '../../services/setGifs/actions';
import { addScore } from '../../services/setWeirdness/actions';

class ButtonLike extends Component {

  handleLike = (e) => {
    e.preventDefault();

    if (this.props.gifsLikedCount === 5) {
      alert("You've already liked 5 Gifs. Calculate your score!");
    } else {
      this.props.likeGif(this.props.gifResult);
      this.props.addScore(this.props.gifWeirdness);
    }
  };

  render() {
    const style = {
      borderRadius: 2,
      padding: "6px 40px"
    };

    return (
      <button className="btn btn-primary btn-like my-2 my-sm-0"
        onClick={this.handleLike}
        type="submit"
        style={style}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button >
    );
  }

}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      likeGif: likeGif,
      addScore: addScore
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    gifResult: state.gifs.result,
    gifWeirdness: state.weirdness.number,
    gifsLikedCount: state.gifs.likedCount
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonLike);