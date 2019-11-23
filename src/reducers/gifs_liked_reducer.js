import { LIKE_GIF, REMOVE_GIF } from '../actions';

export default function (
  prevState = {
    gifs: [],
    count: 0
  }, action) {

  switch (action.type) {
    case LIKE_GIF:
      return {
        prevState,
        gifs: prevState.gifs.concat(action.gifs),
        count: prevState.count + action.count
      }
    case REMOVE_GIF:
      return {
        prevState,
        gifs: prevState.gifs.filter((gif, index) => index != action.index),
        count: prevState.count - action.count
      }
    default:
      return prevState;
  }
}
