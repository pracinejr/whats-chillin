import React, { useContext, useEffect } from "react";
import { UserCard } from "./UserCard";
import "./User.css";
import { UserContext } from "./UserProvider";

export const UserList = ({ user }) => {
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    console.log("useEffect - getusers");
    getUsers();
  }, []);

  return (
    <>
      <section className="users">
        <h1 className="user_header">Your Fam</h1>
        <div className="user_list">
          {console.log("userList - Render", users)}
          {users.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </div>
      </section>
    </>
  );
};
