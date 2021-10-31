import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const userState = useSelector((state) => state.user);

  console.log(userState);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userState.data.role === "USER" ? (
          <Component {...props} />
        ) : isAuthenticated && userState.data.role === "ADMIN" ? (
          <Redirect to="/dashboard" />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
