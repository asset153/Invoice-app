import { combineReducers } from "redux";
import reducerSingleItemList from "./reducerSingleItemList";
import reducerSingleItemListValue from "./reducerSingleItemListValue";
import reducerBillFromValues from "./reducerBillFromValues";
import reducerBillToValues from "./reducerBillToValues";
export default combineReducers({
  reducerSingleItemList,
  reducerSingleItemListValue,
  reducerBillFromValues,
  reducerBillToValues,
});
