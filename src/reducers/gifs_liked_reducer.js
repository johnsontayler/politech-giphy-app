import { LIKE_GIF, REMOVE_GIF } from '../actions';

export default function (prevState = [], action) {

  switch (action.type) {
    case LIKE_GIF:
      return prevState.concat(action.gifLiked)
    case REMOVE_GIF:
      return prevState.filter((gif, index) => index != action.index)
    default:
      return prevState;
  }
}
