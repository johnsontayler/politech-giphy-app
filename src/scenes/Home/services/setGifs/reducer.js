import { SET_GIF, LIKE_GIF, UNLIKE_GIF } from './actions';

const initialState = {
  result: [],
  liked: [],
  likedCount: 0
}

export default function (prevState = initialState, action) {

  switch (action.type) {
    case SET_GIF:
      return { ...prevState, result: action.payload.data }
    case LIKE_GIF:
      return {
        ...prevState,
        liked: prevState.liked.concat(action.liked),
        likedCount: prevState.likedCount + action.count
      }
    case UNLIKE_GIF:
      return {
        ...prevState,
        liked: prevState.liked.filter((gif, index) => index != action.index),
        likedCount: prevState.likedCount - action.count
      }
    default:
      return prevState;
  }
}
