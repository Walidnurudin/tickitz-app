import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");
  const userState = useSelector((state) => state.user);

  console.log(userState);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated && userState.data.role === "ADMIN" ? (
          <Component {...props} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};

export default PublicRoute;
