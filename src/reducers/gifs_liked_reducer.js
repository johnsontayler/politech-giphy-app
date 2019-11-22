import { LIKE_GIF } from '../actions';

export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case LIKE_GIF:
      return action.payload
    default:
      return state;
  }
}
