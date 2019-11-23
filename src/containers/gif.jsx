import React, { Component } from 'react';
// import { connect } from 'react-redux';
class Gif extends Component {

  render() {
    // const gif = this.props.gif;
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;

    return (
      <img src={src} alt="gif" className="gif" />
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     gif: state.gif
//   };
// }

export default Gif;

// export default connect(mapStateToProps, null)(Gif);
