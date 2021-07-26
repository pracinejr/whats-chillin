import React, { createContext, useState } from "react";
import "./Home.css";

export const HomeContext = createContext();

export const HomeProvider = (props) => {
  const [homes, setHomes] = useState([]);

  const getHomes = () => {
    return fetch("http://localhost:8088/homes")
      .then((res) => res.json())
      .then(setHomes);
  };

  const addHome = (homeObj) => {
    return fetch("http://localhost:8088/homes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(homeObj),
    }).then(getHomes);
  };

  const getHomeById = (id) => {
    return fetch(`http://localhost:8088/homes/${id}?_embed=users`).then((res) =>
      res.json()
    );
  };

  const completeHome = (home) => {
    return fetch(`http://localhost:8088/Homes/${home.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(home),
    }).then(getHomes);
  };

  const deleteHome = (id) => {
    return fetch(`http://localhost:8088/homes/${id}`, {
      method: "DELETE",
    }).then(getHomes);
  };

  const updateHome = (home) => {
    return fetch(`http://localhost:8088/homes/${home.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(home),
    }).then(getHomes);
  };

  return (
    <HomeContext.Provider
      value={{
        homes,
        deleteHome,
        getHomes,
        addHome,
        getHomeById,
        updateHome,
        completeHome,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
};
