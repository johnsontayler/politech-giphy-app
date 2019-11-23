import { LIKE_GIF } from '../actions';

export default function (prevState, action) {
  if (prevState === undefined) { return []; }

  switch (action.type) {
    case LIKE_GIF:
      return action.gifsLiked
    default:
      return prevState;
  }
}
