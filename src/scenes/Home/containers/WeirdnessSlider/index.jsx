// External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeWeirdness } from '../../services/setWeirdness/actions';

class WeirdnessSlider extends Component {

  handleSlide = (event) => {
    event.preventDefault();
    this.props.changeWeirdness(event);
  }

  render() {
    return (
      <div id="weirdnessSlider" className="weirdness-slider">
        <div className="thumb"
          onMouseDown={this.handleSlide}
          onDragStart={() => false}>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { changeWeirdness: changeWeirdness },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(WeirdnessSlider);

