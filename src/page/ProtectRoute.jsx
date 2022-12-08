import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useAuth } from "../Components/Context/authContext";

export default function ProtectRoute({ component: Component, ...rest }) {
  const { isLogding } = useAuth();
  return (
    <Route
      {...rest}
      render={() => {
        if (isLogding) {
          return <Component />;
        }
        return <Navigate to="/landing" replace />;
      }}
    />
  );
}
