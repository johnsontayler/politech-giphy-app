import { TOGGLE_CONFETTI } from './actions';

const initialState = {
  gifConfetti: []
};

export default function (prevState = initialState, action) {
  switch (action.type) {
    case TOGGLE_CONFETTI:
      return {
        ...prevState,
        gifConfetti: action.gifConfetti.classList.toggle("remove")
      };
    default:
      return prevState;
  }
}
