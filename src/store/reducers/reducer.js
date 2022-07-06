const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === "ITEM_LIST") {
    return [...state, action.payload];
  }
  return state;
};

export default reducer;
