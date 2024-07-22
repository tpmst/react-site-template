import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../logic/AuthContext"; // Ensure this path is correct

const PrivateRoute: React.FC<{ element: JSX.Element }> = ({ element }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? element : <Navigate to="/landing" replace />;
};

export default PrivateRoute;
