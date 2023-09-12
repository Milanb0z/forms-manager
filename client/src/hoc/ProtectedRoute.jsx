import { useContext } from "react";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

const ProtectedRoute = ({ children }) => {
  const [user] = useContext(UserContext);
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
