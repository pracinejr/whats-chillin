import React, { useState, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { HomeContext } from "../home/HomeProvider";

import "./Login.css";

export const Register = () => {
  const [registerUser, setRegisterUser] = useState({
    name: "",
    homeId: 0,
    email: "",
    photo: "",
  });
  const [conflictDialog, setConflictDialog] = useState(false);

  const { homes, getHomes } = useContext(HomeContext);

  const history = useHistory();

  useEffect(() => {
    console.log("useEffect: getHomes");
    getHomes();
  }, []);

  const handleInputChange = (event) => {
    const newUser = { ...registerUser };
    newUser[event.target.id] = event.target.value;
    setRegisterUser(newUser);
  };

  const existingUserCheck = () => {
    // If your json-server URL is different, please change it below!
    return fetch(`http://localhost:8088/users?email=${registerUser.email}`)
      .then((res) => res.json())
      .then((user) => !!user.length);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    existingUserCheck().then((userExists) => {
      if (!userExists) {
        // If your json-server URL is different, please change it below!
        fetch("http://localhost:8088/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: registerUser.email,
            name: registerUser.name,
            homeId: registerUser.homeId,
            photo: registerUser.photo,
          }),
        })
          .then((res) => res.json())
          .then((createdUser) => {
            if (createdUser.hasOwnProperty("id")) {
              sessionStorage.setItem("whats_chillin_user", createdUser.id);
              sessionStorage.setItem(
                "whats_chillin_user_homeId",
                createdUser.homeId
              );
              history.push("/posts");
            }
          });
      } else {
        setConflictDialog(true);
      }
    });
  };

  return (
    <main style={{ textAlign: "center" }}>
      <dialog className="dialog dialog--password" open={conflictDialog}>
        <div>Account with that email address already exists</div>
        <button
          className="button--close"
          onClick={(e) => setConflictDialog(false)}
        >
          Close
        </button>
      </dialog>

      <form className="form--login" onSubmit={handleRegister}>
        <h1 className="h3 mb-3 font-weight-normal">
          Please Register for Application Name
        </h1>
        <fieldset>
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-control"
            placeholder="Name"
            required
            autoFocus
            value={registerUser.name}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="user-home-id">Select a Home</label>
          <select
            name="userId"
            id="homeId"
            value={registerUser.homeId}
            className="form-control"
            onChange={handleInputChange}
          >
            <option value="0">Select a Home</option>
            {homes.map((home) => {
              return (
                <option key={home.id} value={home.id}>
                  {home.name}
                </option>
              );
            })}
          </select>
        </fieldset>
        <fieldset>
          <label htmlFor="inputEmail"> Email address </label>
          <input
            type="email"
            name="email"
            id="email"
            className="form-control"
            placeholder="Email address"
            required
            value={registerUser.email}
            onChange={handleInputChange}
          />
        </fieldset>
        <fieldset>
          <button type="submit"> Sign in </button>
        </fieldset>
      </form>
    </main>
  );
};
