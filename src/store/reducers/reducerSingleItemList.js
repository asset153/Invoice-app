const initialState = [];

const reducerSingleItemList = (state = initialState, action) => {
  if (action.type === "ADD_ITEM") {
    return [...state, action.payload];
  } else if (action.type === "ADD_ITEM_EDIT") {
    return [...state, ...action.payload];
  } else if (action.type === "ADD_ITEM_CLEAR") {
    return (state = []);
  } else if (action.type === "REMOVE_ITEM") {
    return state.filter((el) => {
      return el.key !== action.payload;
    });
  }
  return state;
};

export default reducerSingleItemList;
