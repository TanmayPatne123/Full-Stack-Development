import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Header from "./components/header/Header";
import { BrowserRouter } from "react-router-dom";
import {Provider} from 'react-redux'
import myReduxStore from "./redux/store/Store";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <Provider store={myReduxStore}>
    <App />
  </Provider>
  </BrowserRouter>
);
