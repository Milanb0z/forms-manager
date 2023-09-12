import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";

import App from "./App";
import { UserProvider } from "./context/user.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);
