import React from "react";
import ReactDOM from "react-dom/client";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { logger } from "redux-logger/src";
import thunkMiddleware from "redux-thunk";
import App from "./App";
import "./styles/main.scss";

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(logger, thunkMiddleware))
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
