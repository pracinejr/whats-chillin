import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { HomeProvider } from "./home/HomeProvider";
import "./Whats-Chillin.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const WhatsChillin = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("whats_chillin_user")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <HomeProvider>
      <Route path="/register">
        <Register />
      </Route>
    </HomeProvider>
  </>
);
