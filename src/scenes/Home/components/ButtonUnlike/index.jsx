//  External modules
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const ButtonUnlike = (props) => {
  const { handleClick } = props

  return (
    <FontAwesomeIcon icon={faTimesCircle}
      className="fa-times-circle"
      onClick={handleClick}
    />
  );
}

export default ButtonUnlike;
