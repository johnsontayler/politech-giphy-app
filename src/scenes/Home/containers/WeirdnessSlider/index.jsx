// External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeWeirdness } from '../../services/setWeirdness/actions';
import { setWeirdness } from '../../services/setWeirdness/actions';

class WeirdnessSlider extends Component {

  handleSlide = (event) => {
    event.preventDefault();
    this.props.changeWeirdness(event);
  }

  handleWeirdness = () => {
    event.preventDefault();
    this.props.setWeirdness();
  }

  render() {
    return (
      <div id="weirdnessSlider" className="weirdness-slider">
        <div className="thumb"
          onMouseDown={this.handleSlide}
          onMouseUp={this.handleWeirdness}
          onDragStart={() => false}>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      changeWeirdness: changeWeirdness,
      setWeirdness: setWeirdness
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(WeirdnessSlider);

