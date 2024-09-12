import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import App from "./App";

import ErrorBoundary from "./ErrorBoundary";
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <App />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
