/* eslint-disable */

const initialState = [];

const reducerSingleItemListValue = (state = initialState, action) => {
  switch (action.type) {
    case "CREATE_OBJ_FROM_VALUE":
      return [
        ...state,
        {
          itemID: action.payload,
          itemName: "",
          itemQty: "",
          itemPrice: "",
          itemTotal: "",
        },
      ];
    case "CREATE_OBJ_FROM_VALUE_EDIT":
      return [...state, ...action.payload];
    case "CREATE_OBJ_FROM_VALUE_CLEAR":
      return (state = []);
    case "CREATE_VALUE_TO_OBJECT":
      return state.map((item) => {
        if (item.itemID === action.payload.itemUniqueID) {
          return {
            ...item,
            ...action.payload.valueOfItem,
          };
        } else {
          return item;
        }
      });
    case "REMOVE_SINGLE_OBJECT_WITH_VALUE":
      return state.filter((el) => {
        return el.itemID !== action.payload;
      });
    default:
      return state;
  }
};

export default reducerSingleItemListValue;
