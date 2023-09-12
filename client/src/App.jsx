import { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context
import { UserContext } from "@context/user.context";

// Pages
import ExploreForms from "@pages/ExploreForms.jsx";
import SingleForm from "@pages/SingleForm.jsx";
import NewForm from "@pages/NewForm.jsx";
import Login from "@pages/Login.jsx";
import SignUp from "@pages/SignUp.jsx";
import EditForm from "@pages/EditForm.jsx";
import FormResults from "@pages/FormResults";

import ProtectedRoute from "@hoc/ProtectedRoute";

import axios from "./axios.default.js";

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
    path: "/form/edit/:formId",
    element: <EditForm />,
  },
  {
    path: "/results/:formId",
    element: <FormResults />,
  },
  {
    path: "/form/new",
    element: (
      <ProtectedRoute>
        <NewForm />
      </ProtectedRoute>
    ),
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

const App = () => {
  const [, setUser] = useContext(UserContext);
  useEffect(() => {
    let token = localStorage.getItem("token");

    axios.get("/user/profile", { headers: { token } }).then((res) => {
      setUser(res.data.user);
    });
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
