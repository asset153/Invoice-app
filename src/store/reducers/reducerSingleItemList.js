const initialState = [];

const reducerSingleItemList = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE_ITEM") {
    const filteredArray = state.filter((el) => {
      return el.key !== action.payload;
    });
    return [...filteredArray];
  }
  return state;
};

export default reducerSingleItemList;
