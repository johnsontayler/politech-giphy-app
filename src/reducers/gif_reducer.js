const gifReducer = (state, action) => {
  if (state === undefined) {
    return [];
  }

  switch (action.type) {
    case 'SET_GIF':
      return action.payload;
    default:
      return state;
  }
}

export default gifReducer;
