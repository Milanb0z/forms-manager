import { createBrowserRouter, RouterProvider } from "react-router-dom";

//Context

import { ToastContainer } from "react-toastify";

// Pages
import {
  Invite,
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

import Profile from "./pages/Profile/Profile.jsx";
import PageWrapper from "@hoc/PageWrapper.jsx";

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
    path: "/invite/:inviteId",
    element: <SingleForm inviteMode />,
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
        path: "invite/:formId",
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
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer theme="dark" position="bottom-right" />
    </>
  );
};

export default App;
