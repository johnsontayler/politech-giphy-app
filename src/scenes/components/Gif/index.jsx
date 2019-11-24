import React from 'react';

const Gif = (props) => {
  const src = `https://media.giphy.com/media/${props.id}/giphy.gif`;

  return (
    <img src={src} alt="gif" className="gif" />
  );
}

export default Gif;
