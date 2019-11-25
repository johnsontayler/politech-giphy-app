//  External modules
import React from 'react';

//  Components
import Gif from '../../../../components/Gif';

const GifsLikedResult = (props) => {
  const { gifsLiked, scores } = props;

  return (
    <div className="gifs-liked">
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
            <Gif id={gif.id} key={index} />
            <p>
              {scores[index]}/10
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default GifsLikedResult;
