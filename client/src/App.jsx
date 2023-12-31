import { useContext, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context
import { UserContext } from "@context/user.context";

// Pages
import {
  EditForm,
  ExploreForms,
  FormResults,
  Login,
  NewForm,
  SignUp,
  SingleForm,
  UserDetails,
  DragNDropForm,
} from "@pages";

import ProtectedRoute from "@hoc/ProtectedRoute";

import axios from "./axios.default.js";
import Profile from "./pages/Profile/Profile.jsx";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <DndProvider backend={HTML5Backend}>
        <DragNDropForm />
      </DndProvider>
    ),
  },
  {
    path: "/form",
    element: <ExploreForms />,
    index: true,
  },
  {
    path: "/form/id/:formId",
    element: <SingleForm byId />,
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
    path: "/form/new",
    element: (
      <ProtectedRoute>
        <NewForm />
      </ProtectedRoute>
    ),
  },
  {
    path: "/me",
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/results/:formId",
    element: <FormResults />,
  },
  {
    path: "/user/:username",
    element: <UserDetails />,
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
