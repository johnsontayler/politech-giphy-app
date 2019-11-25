import { REMOVE_CONFETTI } from './actions';

const initialState = {
  confettiDisplay: ""
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case REMOVE_CONFETTI:
      return { ...prevState, confettiDisplay: "none" };
    default:
      return prevState;
  }
}
