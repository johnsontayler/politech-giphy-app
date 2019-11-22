import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const Button = () => {

  return (
    <button className="btn btn-primary btn-like my-2 my-sm-0" type="submit"
      style={{ padding: "6px 40px" }}>
      <FontAwesomeIcon icon={faThumbsUp} />
    </button>
  );
}

export default Button;