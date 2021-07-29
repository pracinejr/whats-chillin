import React from "react";
import "./User.css";

export const UserCard = ({ user }) => {
  return (
    <>
      <section className="card">
        <div className="card-photo"> {user.photo}</div>
        <h4 className="card-title">{user.name}</h4>
        <h4 className="card-body">{user.email}</h4>
      </section>
    </>
  );
};
