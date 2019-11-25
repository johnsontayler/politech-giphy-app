import {
  SET_GIF, GIF_ERROR, LIKE_GIF,
  UNLIKE_GIF, RESET_GIFS
} from './actions';

const initialState = {
  result: [],
  resultError: null,
  errorInfo: null,
  liked: [],
  likedCount: 0
};

export default function (prevState = initialState, action) {

  switch (action.type) {
    case SET_GIF:
      return { ...prevState, result: action.payload.data };
    case LIKE_GIF:
      return {
        ...prevState,
        liked: prevState.liked.concat(action.gifLiked),
        likedCount: prevState.likedCount + action.count
      };
    case UNLIKE_GIF:
      return {
        ...prevState,
        liked: prevState.liked.filter((gif, index) => index !== action.index),
        likedCount: prevState.likedCount - action.count
      };
    case RESET_GIFS:
      return { ...prevState, liked: [], likedCount: 0 };
    case GIF_ERROR:
      return {
        ...prevState,
        resultError: action.error, errorInfo: action.errorInfo
      };
    default:
      return prevState;
  }
}
