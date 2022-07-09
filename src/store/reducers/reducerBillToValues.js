const initialState = {
  billToClientsName: "",
  billToClientsEmail: "",
  billToStreetAddress: "",
  billToCity: "",
  billToPostCode: "",
  billToCountry: "",
  billToDate: "",
  billToPaymentTerms: "",
  billToProjectDescription: "",
};

const reducerBillToValues = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_VALUES_BILL_TO":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default reducerBillToValues;
