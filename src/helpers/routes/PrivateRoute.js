import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const userState = useSelector((state) => state.user);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userState.role === "USER" ? (
          <Component {...props} />
        ) : isAuthenticated && userState.role === "ADMIN" ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
