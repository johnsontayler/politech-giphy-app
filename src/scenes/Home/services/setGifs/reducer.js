import { SET_GIF, LIKE_GIF, UNLIKE_GIF } from '../actions';

export default function (
  prevState = {
    result: [],
    liked: [],
    count: 0
  }, action) {

  switch (action.type) {
    case SET_GIF:
      return { prevState, result: action.payload.data }
    case LIKE_GIF:
      return {
        prevState,
        liked: prevState.liked.concat(action.liked),
        count: prevState.count + action.count
      }
    case UNLIKE_GIF:
      return {
        prevState,
        liked: prevState.liked.filter((gif, index) => index != action.index),
        count: prevState.count - action.count
      }
    default:
      return prevState;
  }
}
