import { combineReducers } from "redux";
import reducerSingleItemList from "./reducerSingleItemList";
import reducerSingleItemListValue from "./reducerSingleItemListValue";
import reducerBillFromValues from "./reducerBillFromValues";
import reducerBillToValues from "./reducerBillToValues";
import reducerAddDeleteChangeInvoicesList from "./reducerAddDeleteChangeInvoicesList";
import reducerFormControl from "./reducerFormControl";

export default combineReducers({
  reducerSingleItemList,
  reducerSingleItemListValue,
  reducerBillFromValues,
  reducerBillToValues,
  reducerAddDeleteChangeInvoicesList,
  reducerFormControl,
});
