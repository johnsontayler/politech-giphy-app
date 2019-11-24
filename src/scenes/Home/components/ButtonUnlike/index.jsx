//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Actions
import { unlikeGif } from '../../services/setGifs/actions';
import { subtractScore } from '../../services/setWeirdness/actions';

class ButtonUnlike extends Component {
  handleRemove = (e) => {
    e.preventDefault();
    console.log(this.props.gifIndex);
    this.props.unlikeGif(this.props.gifIndex);
    this.props.subtractScore(this.props.gifIndex);
  };

  render() {
    return (
      <FontAwesomeIcon icon={faTimesCircle}
        className="fa-times-circle"
        onClick={this.handleRemove}
      />
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { unlikeGif: unlikeGif, subtractScore: subtractScore },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ButtonUnlike);
