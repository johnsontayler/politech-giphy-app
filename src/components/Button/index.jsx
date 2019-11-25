import React from 'react';

const Button = (props) => {
  const { text, handleClick, id, style } = props

  return (
    <button
      className="btn btn-success my-2 my-sm-0"
      id={id}
      type="submit"
      style={style}
      onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button;