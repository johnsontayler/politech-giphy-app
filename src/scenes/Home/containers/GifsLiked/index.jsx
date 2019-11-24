//  External modules
import React from 'react';
import { connect } from 'react-redux';

//  Components
import Gif from '../../../components/Gif';
import ButtonUnlike from '../../components/ButtonUnlike';

const GifsLiked = (props) => {
  return (
    <div
      className="gifs-liked">
      {props.gifsLiked.map((gif, index) => {
        return (
          <div
            style={{ position: "relative" }}
            key={"div" + index}>
            <p
              key={gif.title}
              className="gif-title">
              {gif.title.substring(0, 23)}
            </p>
            <Gif id={gif.id} key={"Gif" + gif.title} />
            <ButtonUnlike gifIndex={index} />
          </div>
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return { gifsLiked: state.gifs.liked };
}

export default connect(mapStateToProps)(GifsLiked);
