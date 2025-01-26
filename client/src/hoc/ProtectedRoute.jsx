import { useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectCurrentUser } from "@store/authSlice";

const ProtectedRoute = () => {
  const location = useLocation();
  const user = useSelector(selectCurrentUser);

  console.log(user);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
