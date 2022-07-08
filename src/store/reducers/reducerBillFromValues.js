const initialState = {
  billFromStreetAddress: "",
  billFromCity: "",
  billFromPostCode: "",
  billFromCountry: "",
};

const reducerBillFromValues = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUES_BILL_FROM":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducerBillFromValues;
