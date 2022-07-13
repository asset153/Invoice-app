import { faker } from "@faker-js/faker";

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
    case "TEST_BILL_FROM":
      return {
        billFromStreetAddress: faker.address.streetAddress(),
        billFromCity: faker.address.cityName(),
        billFromPostCode: faker.address.zipCode(),
        billFromCountry: faker.address.country(),
      };
    default:
      return state;
  }
};

export default reducerBillFromValues;
