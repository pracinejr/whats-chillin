import React, { useState, createContext } from "react";
import "./User.css";

export const UserContext = createContext();

export const UserProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [searchTerms, setSearchTerms] = useState("");

  const getUsers = () => {
    return fetch("http://localhost:8088/users")
      .then((res) => res.json())
      .then(setUsers);
  };

  const getUserById = (id) => {
    return fetch(`http://localhost:8088/users/${id}?_embed=users`).then((res) =>
      res.json()
    );
  };

  const updateUser = (userObj) => {
    return fetch(`http://localhost:8088/users/${userObj.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    }).then(getUsers);
  };

  return (
    <UserContext.Provider
      value={{
        users,
        getUsers,
        searchTerms,
        setSearchTerms,
        updateUser,
        getUserById,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};
