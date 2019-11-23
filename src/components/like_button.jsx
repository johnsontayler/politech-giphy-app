import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

import { likeGif } from '../actions';

class LikeButton extends Component {

  handleLike = (e) => {
    e.preventDefault();
    const gif = this.props.gif;
    this.props.likeGif(gif);
  };

  render() {
    return (
      <button className="btn btn-primary btn-like my-2 my-sm-0"
        onClick={this.handleLike}
        type="submit"
        style={{ padding: "6px 40px" }}>
        <FontAwesomeIcon icon={faThumbsUp} />
      </button >
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { likeGif: likeGif },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    gif: state.gif
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LikeButton);