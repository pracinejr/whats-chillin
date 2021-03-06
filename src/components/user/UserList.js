import React, { useContext, useEffect } from "react";
import { UserCard } from "./UserCard";
import "./User.css";
import { UserContext } from "./UserProvider";
import { useHistory } from "react-router-dom";

export const UserList = ({ user }) => {
  const { users, getUsers } = useContext(UserContext);

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  const usersFilteredByHome = users.filter(
    (user) => user.homeId === currentUserHomeId
  );

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <section className="users">
        <h1 className="user_header">Your Fam</h1>
        <div className="user_list">
          {console.log("userList - Render", usersFilteredByHome)}
          {usersFilteredByHome.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </section>
    </>
  );
};
