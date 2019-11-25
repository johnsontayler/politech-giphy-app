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
  componentDidCatch(error, errorInfo) {
    this.props.setGifError(error, errorInfo)
  }

  handleLike = (e) => {
    e.preventDefault();
    const { gifs: { result, likedCount }, weirdness } = this.props;

    switch (likedCount) {
      case 4:
        return this.props.likeGif(result),
          this.props.addScore(weirdness);
      case 5:
        return alert(
          "You've already liked 5 GIFs. Calculate your score!"
        );
      default:
        this.props.likeGif(result);
        this.props.addScore(weirdness);
        setTimeout(() => {
          alert("Woo! Keep adding GIFs ya weirdo.");
        }, 500);
    }
  };

  render() {
    const { gifs: { result: { id } } } = this.props;

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
    gifs: state.gifs,
    weirdness: state.weirdness.number
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
