import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import App from "./App";
import { UserProvider } from "./context/user.context";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <UserProvider>
        <App />
      </UserProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
