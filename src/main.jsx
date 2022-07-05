import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../src/store/reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger/src";
import App from "./App";
import "./styles/main.scss";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger))
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
