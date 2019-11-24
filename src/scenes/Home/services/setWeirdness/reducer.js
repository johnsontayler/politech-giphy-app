import { SET_WEIRDNESS } from './actions';

const initialState = {
  number: 0,
}

export default function (prevState = initialState, action) {

  switch (action.type) {
    case SET_WEIRDNESS:
      return { ...prevState, number: action.number }
    default:
      return prevState;
  }
}
