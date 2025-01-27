import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectCurrentUser } from "@store/authSlice";

const ProtectedRoute = () => {
  const location = useLocation();

  const user = useSelector(selectCurrentUser);

  return user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default ProtectedRoute;
