const gifReducer = (state, action) => {
  state === undefined ? [] : "";

  switch (action.type) {
    case 'SET_GIF':
      return action.payload
    default:
      return state
  };
}

export default gifReducer;