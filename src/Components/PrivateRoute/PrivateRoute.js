import React from "react";
import { Navigate, Route } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? children : <Navigate replace to="/signup" />
      }
    />
  );
};

export default PrivateRoute;
