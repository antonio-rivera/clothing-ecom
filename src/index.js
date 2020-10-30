import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import persistStore from "./redux/store";

ReactDOM.render(
  <Provider store={persistStore.store}>
    <BrowserRouter>
      <React.StrictMode>
        <PersistGate persistor={persistStore.persistor}>
          <App />
        </PersistGate>
      </React.StrictMode>
    </BrowserRouter>
    ,
  </Provider>,
  document.getElementById("root")
);
