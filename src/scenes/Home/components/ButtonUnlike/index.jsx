//  External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// Actions
import { unlikeGif } from '../../services/setGifs/actions';

class ButtonUnlike extends Component {

  handleRemove = (e) => {
    e.preventDefault();
    const gifIndex = this.props.gifIndex;
    this.props.removeGif(gifIndex);
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
    { unlikeGif: unlikeGif },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ButtonUnlike);
