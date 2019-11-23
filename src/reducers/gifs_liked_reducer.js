import { LIKE_GIF } from '../actions';

export default function (prevState = [], action) {

  switch (action.type) {
    case LIKE_GIF:
      return prevState.concat(action.gifLiked)
    default:
      return prevState;
  }
}
