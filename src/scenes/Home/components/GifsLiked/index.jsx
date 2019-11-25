//  External modules
import React from 'react';

//  Components
import Gif from '../../../../components/Gif';
import ButtonUnlike from '../ButtonUnlike';

const GifsLiked = (props) => {
  const { gifsLiked, unlikeGif } = props

  return (
    <div
      className="gifs-liked">
      {gifsLiked.map((gif, index) => {
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
            <ButtonUnlike
              handleClick={() => unlikeGif(index)} />
          </div>
        );
      })}
    </div>
  );
}

export default GifsLiked;
