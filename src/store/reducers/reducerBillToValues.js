import { faker } from "@faker-js/faker";

// zmienne dla inputow bill to
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
    // kontrolowany formularz dla bill to
    case "CHANGE_VALUES_BILL_TO":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    // zastępuje pola input danymi z edycji formularza
    case "CHANGE_VALUES_BILL_TO_EDIT":
      return {
        ...state,
        billToClientsName: action.payload.billToClientsName,
        billToClientsEmail: action.payload.billToClientsEmail,
        billToStreetAddress: action.payload.billToStreetAddress,
        billToCity: action.payload.billToCity,
        billToPostCode: action.payload.billToPostCode,
        billToCountry: action.payload.billToCountry,
        billToDate: action.payload.billToDate,
        billToPaymentTerms: action.payload.billToPaymentTerms,
        billToProjectDescription: action.payload.billToProjectDescription,
      };
    case "TEST_BILL_TO":
      return {
        ...state,
        billToClientsName: faker.name.findName(),
        billToClientsEmail: faker.internet.email(),
        billToStreetAddress: faker.address.streetAddress(),
        billToCity: faker.address.cityName(),
        billToPostCode: faker.address.zipCode(),
        billToCountry: faker.address.country(),
        billToDate: "2023-03-30",
        billToPaymentTerms: "30",
        billToProjectDescription: faker.commerce.productDescription(),
      };
    default:
      return state;
  }
};
export default reducerBillToValues;
