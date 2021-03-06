import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { NavBar } from "./nav/NavBar";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import { HomeProvider } from "./home/HomeProvider";
import { Copyright } from "./copyright/CopyrightProvider";
import "./Whats-Chillin.css";

export const WhatsChillin = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("whats_chillin_user")) {
          return (
            <>
              <div class="main_container">
                <div class="nav">
                  <NavBar />
                </div>
                <div class="app_view">
                  <ApplicationViews />
                </div>
              </div>
              <div class="copyright">
                <Copyright />
              </div>
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
