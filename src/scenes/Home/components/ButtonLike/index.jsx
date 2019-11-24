//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

// Actions
import { likeGif } from '../../services/setGifs/actions';
import { addWeirdness } from '../../services/setGifs/actions';

class LikeButton extends Component {

  handleLike = (e) => {
    e.preventDefault();
    this.props.likeGif(this.props.gifResult);
    this.props.addWeirdness(this.props.gifWeirdness)
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
      addWeirdness: addWeirdness
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    gifResult: state.gifs.result,
    gifWeirdness: state.weirdness.number
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);