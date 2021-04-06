import React, { Component, FC } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";


const PrivateRoute = ({ /*component,*/ ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      {true ?
        <Component />
        :
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      }
    </Route>
  );
};

export default PrivateRoute;
