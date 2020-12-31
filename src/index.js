import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
  //store를 index에 연결? ->advantages 있다.
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
