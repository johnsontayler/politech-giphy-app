import { SET_GIF } from '../actions';

export default function (state, action) {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case SET_GIF:
      return action.payload.data
    default:
      return state;
  }
}
