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
    case "CHANGE_VALUES_BILL_FROM_EDIT":
      return {
        billFromStreetAddress: action.payload.billFromStreetAddress,
        billFromCity: action.payload.billFromCity,
        billFromPostCode: action.payload.billFromPostCode,
        billFromCountry: action.payload.billFromCountry,
      };
    default:
      return state;
  }
};

export default reducerBillFromValues;
