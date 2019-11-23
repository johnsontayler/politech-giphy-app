//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  Components
import Gif from '../../components/Gif';
import ButtonUnlike from '../../ButtonUnlike';

class GifsLiked extends Component {

  render() {
    const gifsLiked = this.props.gifsLiked;

    return (
      <div className="gifs-liked">
        {gifsLiked.map((gif, index) => {
          return (
            <div style={{ position: "relative" }}
              key={"div" + index}>
              <Gif id={gif.id} key={index} />
              <ButtonUnlike gifIndex={index} />
            </div>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { gifsLiked: state.gifsLiked.gifs };
}

export default connect(mapStateToProps)(GifsLiked);

