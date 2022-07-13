/* eslint-disable */

const initialState = {};

const reducerAddDeleteChangeInvoicesList = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INVOICE":
      return { ...action.payload };
    case "DELETE_INVOICE":
      return { ...action.payload };
    case "EDIT_INVOICE":
      return { ...action.payload };
    case "MARKS_AS_PAID_INVOICE":
      return { ...action.payload };
    default:
      return state;
  }
};

export default reducerAddDeleteChangeInvoicesList;
