import {
  SET_WEIRDNESS, ADD_SCORE, SUBTRACT_SCORE,
  CALCULATE_SCORE, RESET_WEIRDNESS_RESULT
} from './actions';

const initialState = {
  number: 0,
  scores: [],
  finalScore: 0,
}

export default function (prevState = initialState, action) {
  let scoreCalculation = prevState.scores.reduce((a, b) => a + b, 0) / 5;

  switch (action.type) {
    case SET_WEIRDNESS:
      return { ...prevState, number: action.number }
    case ADD_SCORE:
      return {
        ...prevState,
        scores: prevState.scores.concat(action.gifWeirdness)
      }
    case SUBTRACT_SCORE:
      return {
        ...prevState,
        scores: prevState.scores.filter((num, index) =>
          index != action.index
        )
      }
    case CALCULATE_SCORE:
      return {
        ...prevState,
        finalScore: Math.round(scoreCalculation)
      }
    case RESET_WEIRDNESS_RESULT:
      return {
        ...prevState,
        number: 0,
        scores: [],
        finalScore: 0
      };
    default:
      return prevState;
  }
}
