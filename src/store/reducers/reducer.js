const initialState = {};

const reducer = (state = initialState, action) => {
  if (action.type === "CHECK_IS_WORKING") {
    return action.payload;
  }
  return state;
};

export default reducer;
