// src/components/ProtectedRoute.js
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/userContext";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const { user } = useUser();

  return user.role === "Admin" ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default ProtectedRoute;
