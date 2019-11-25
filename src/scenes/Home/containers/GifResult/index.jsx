//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';


//  Components
import Gif from '../../../../components/Gif';
import Button from '../../../../components/Button'

// Actions
import { likeGif } from '../../services/setGifs/actions';
import { addScore } from '../../services/setWeirdness/actions';

class GifResult extends Component {
  handleLike = (e) => {
    e.preventDefault();
    const { gifResult, gifWeirdness, gifsLikedCount } = this.props;

    switch (gifsLikedCount) {
      case 4:
        return this.props.likeGif(gifResult),
          this.props.addScore(gifWeirdness);
      case 5:
        return alert(
          "You've already liked 5 GIFs. Calculate your score!"
        );
      default:
        this.props.likeGif(gifResult);
        this.props.addScore(gifWeirdness);
        alert("Woo! Keep adding GIFs ya weirdo.");
    }
  };

  render() {
    const { gifResult: { id } } = this.props;

    return (
      <div>
        <Gif id={id} />
        <br />
        <br />
        <Button
          id="btnLike"
          style={{ borderRadius: 2, padding: "6px 40px" }}
          handleClick={this.handleLike}
          text={<FontAwesomeIcon icon={faThumbsUp} />} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    gifResult: state.gifs.result,
    gifWeirdness: state.weirdness.number,
    gifsLikedCount: state.gifs.likedCount
  };
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

export default connect(mapStateToProps, mapDispatchToProps)(GifResult);
