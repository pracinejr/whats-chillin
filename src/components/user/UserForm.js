import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserProvider";
import { useHistory, useParams } from "react-router-dom";
import "./User.css";
import { HomeContext } from "../home/HomeProvider";

export const UserForm = () => {
  const { getUserById, updateUser } = useContext(UserContext);
  const { homes, getHomes } = useContext(HomeContext);
  const [isLoading, setIsLoading] = useState(true);

  const [user, setUser] = useState({});

  const { userId } = useParams();

  const history = useHistory();

  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));

  const handleControlledInputChange = (event) => {
    const updatedUser = { ...user };
    updatedUser[event.target.id] = event.target.value;
    setUser(updatedUser);
  };

  const handleClickSaveUser = (event) => {
    event.preventDefault();
    if (user.name === "" || user.userPhoto === "" || user.homeId === "") {
      window.alert("Please complete the form");
    } else {
      if (currentUser === user.id) {
        sessionStorage.removeItem("whats_chillin_user_homeId");
        sessionStorage.setItem("whats_chillin_user_homeId", user.homeId);
      }
      updateUser({
        name: user.name,
        homeId: parseInt(user.homeId),
        userPhoto: user.userPhoto,
        email: user.email,
        id: user.id,
      }).then(() => history.push("/users"));
    }
  };

  useEffect(() => {
    getHomes().then(() => {
      if (userId) {
        getUserById(userId).then((user) => {
          setUser(user);
          console.log(user);
          setIsLoading(false);
        });
      } else {
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <form className="User_form">
      <h2 className="User_form__title">
        {userId ? <>Update User </> : <>New User</>}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Update Your Name</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Your Name"
            value={user.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="photo">Update Your Photo</label>
          <img
            name="photoId"
            id="photoId"
            src={user.photo}
            className="card-img-top"
            alt={user.name}
            placeholder="Your Photo"
          />
        </div>
      </fieldset>
      <fieldset>
        <select
          name="homeId"
          id="homeId"
          value={user.homeId}
          className="form-control"
          onChange={handleControlledInputChange}
        >
          <option>Select a Food Category</option>
          {homes.map((home) => {
            return (
              <option key={home.id} value={home.id}>
                {home.name}
              </option>
            );
          })}
        </select>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSaveUser}
      >
        {userId ? <>Save Updated User</> : <>Save User</>}
      </button>
    </form>
  );
};
