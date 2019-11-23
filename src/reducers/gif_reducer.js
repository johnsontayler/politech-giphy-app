import { SET_GIF } from '../actions';

export default function (prevState = [], action) {

  switch (action.type) {
    case SET_GIF:
      return action.payload.data
    default:
      return prevState;
  }
}
