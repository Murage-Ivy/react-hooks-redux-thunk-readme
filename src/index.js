import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import  ThunkMiddleware  from "redux-thunk";
import App from "./App";
import rootReducer from "./reducer";

const store = createStore(
  rootReducer,
  applyMiddleware(ThunkMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
