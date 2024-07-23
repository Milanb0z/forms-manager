import { useContext, useEffect, useState } from "react";
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
  MainDashboard,
} from "@pages";

import ProtectedRoute from "@hoc/ProtectedRoute";

import axios from "./axios.default.js";
import Profile from "./pages/Profile/Profile.jsx";
import PageWrapper from "@hoc/PageWrapper.jsx";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <PageWrapper>
          <MainDashboard />
        </PageWrapper>
      </ProtectedRoute>
    ),
  },
  {
    path: "/form",
    element: <ExploreForms />,
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
