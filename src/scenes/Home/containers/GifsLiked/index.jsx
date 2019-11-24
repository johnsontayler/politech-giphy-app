//  External modules
import React, { Component } from 'react';
import { connect } from 'react-redux';

//  Components
import Gif from '../../components/Gif';
import ButtonUnlike from '../../components/ButtonUnlike';

class GifsLiked extends Component {

  render() {
    return (
      <div className="gifs-liked">
        {this.props.gifsLiked.map((gif, index) => {
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
  return { gifsLiked: state.gifs.liked };
}

export default connect(mapStateToProps)(GifsLiked);

