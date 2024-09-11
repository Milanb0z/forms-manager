import { useContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context
import { UserContext } from "@context/user.context";

// Pages
import {
  Invite,
  EditForm,
  ExploreForms,
  FormResults,
  Login,
  NewForm,
  SignUp,
  SingleForm,
  UserDetails,
  MainDashboard,
  Landing,
  NotFoundPage,
} from "@pages";

import ProtectedRoute from "@hoc/ProtectedRoute";

import axios from "./axios.default.js";
import Profile from "./pages/Profile/Profile.jsx";
import PageWrapper from "@hoc/PageWrapper.jsx";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
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
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <PageWrapper />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <MainDashboard />,
      },
      {
        path: "invite",
        element: <Invite />,
      },
      {
        path: "form",
        element: <ExploreForms />,
      },
      {
        path: "form/new",
        element: <NewForm />,
      },
      {
        path: "form/edit/:formId",
        element: <EditForm />,
      },
      {
        path: "results/:formId",
        element: <FormResults />,
      },
      {
        path: "user/:username",
        element: <UserDetails />,
      },

      {
        path: "me",
        element: <Profile />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

const App = () => {
  const [, setUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    let token = localStorage.getItem("token");
    axios.get("/user/profile", { headers: { token } }).then((res) => {
      setUser(res.data.user);
    });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <RouterProvider router={router} />;
};

export default App;
