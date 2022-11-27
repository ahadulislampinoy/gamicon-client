import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LargeSpinner from "../components/Loader/LargeSpinner";
import { AuthContext } from "../contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <LargeSpinner />;
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
