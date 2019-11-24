import { CHANGE_WEIRDNESS } from './actions';

const initialState = {
  number: 0,
}

export default function (prevState = initialState, action) {

  switch (action.type) {
    case CHANGE_WEIRDNESS:
      return { ...prevState, number: action.weirdness }
    default:
      return prevState;
  }
}
