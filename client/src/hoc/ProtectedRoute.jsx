import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/user.context";
import LoadingSpinner from "@components/LoadingSpinner/LoadingSpinner";

import axios from "../axios.default";

const ProtectedRoute = ({ children }) => {
  const [user, setUser] = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    let token = localStorage.getItem("token");
    axios
      .get("/user/profile", { headers: { token } })
      .then((res) => {
        setUser(res.data.user);
        setIsLoading(false);
        console.log(res.data);
      })
      .catch(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  } else {
    return children;
  }
};

export default ProtectedRoute;
