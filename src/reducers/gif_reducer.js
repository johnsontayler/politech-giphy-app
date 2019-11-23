import { SET_GIF } from '../actions';

export default function (prevState, action) {
  if (prevState === undefined) return prevState = [];

  switch (action.type) {
    case SET_GIF:
      return action.payload.data
    default:
      return prevState;
  }
}
