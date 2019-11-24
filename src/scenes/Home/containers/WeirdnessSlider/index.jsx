// External modules
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// Actions
import { changeWeirdness, setWeirdness } from '../../services/setWeirdness/actions';
import { setGif } from '../../services/setGifs/actions';

class WeirdnessSlider extends Component {

  handleSlide = (event) => {
    event.preventDefault();
    this.props.changeWeirdness(event);
  }

  handleWeirdness = () => {
    event.preventDefault();
    this.props.setWeirdness();
  }

  componentDidUpdate() {
    this.props.setGif(this.props.weirdness);
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
      setWeirdness: setWeirdness,
      setGif: setGif
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return { weirdness: state.weirdness.number };
}

export default connect(mapStateToProps, mapDispatchToProps)(WeirdnessSlider);

