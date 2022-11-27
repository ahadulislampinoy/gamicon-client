import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import LargeSpinner from "../components/Loader/LargeSpinner";
import { AuthContext } from "../contexts/AuthProvider";
import useRole from "../Hook/useRole";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [role, roleLoading] = useRole();
  const location = useLocation();

  if (loading || roleLoading) {
    return <LargeSpinner />;
  }
  if (user && role === "admin") {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
