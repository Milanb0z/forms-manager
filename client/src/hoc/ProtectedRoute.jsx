import { Navigate } from "react-router-dom";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import { useGetProfileQuery } from "@store/authSlice";

const ProtectedRoute = ({ children }) => {
  const { data: user, isLoading } = useGetProfileQuery();

  if (isLoading) {
    return (
      <div
        style={{ height: "100svh", display: "grid", placeContent: "center" }}
      >
        {" "}
        <LoadingSpinner />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
