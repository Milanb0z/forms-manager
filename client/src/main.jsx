import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

// Pages
import ExploreForms from "./pages/ExploreForms.jsx";
import SingleForm from "./pages/SingleForm.jsx";
import NewForm from "./pages/NewForm.jsx";
import Login from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import { UserProvider } from "./context/user.context";
import FormResults from "./pages/FormResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>Hellow</h2>,
  },
  {
    path: "/form",
    element: <ExploreForms />,
    index: true,
  },
  {
    path: "/form/:formId",
    element: <SingleForm />,
  },
  {
    path: "/results/:formId",
    element: <FormResults />,
  },
  {
    path: "/form/new",
    element: <NewForm />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
