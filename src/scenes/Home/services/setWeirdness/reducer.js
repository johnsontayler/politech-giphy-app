import { SET_WEIRDNESS, ADD_SCORE, SUBTRACT_SCORE } from './actions';

const initialState = {
  number: 0,
  score: [],
}

export default function (prevState = initialState, action) {

  switch (action.type) {
    case SET_WEIRDNESS:
      return { ...prevState, number: action.number }
    case ADD_SCORE:
      return {
        ...prevState,
        score: prevState.score.concat(action.gifWeirdness)
      }
    case SUBTRACT_SCORE:
      return {
        ...prevState,
        score: prevState.score.filter((num, index) => index != action.index)
      }
    default:
      return prevState;
  }
}
