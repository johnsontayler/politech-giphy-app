import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { removeGif } from '../actions';

class RemoveButton extends Component {

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
    { removeGif: removeGif },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(RemoveButton);
