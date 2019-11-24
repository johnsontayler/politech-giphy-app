import { SET_WEIRDNESS, ADD_WEIRDNESS } from './actions';

const initialState = {
  number: 0,
  score: 0,
}

export default function (prevState = initialState, action) {

  switch (action.type) {
    case SET_WEIRDNESS:
      return { ...prevState, number: action.number }
    case ADD_WEIRDNESS:
      return {
        ...prevState,
        score: prevState.score + action.gifWeirdness
      }
    default:
      return prevState;
  }
}
