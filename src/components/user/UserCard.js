import React from "react";
import "./User.css";
import { useHistory } from "react-router-dom";
import { Image } from "cloudinary-react";

export const UserCard = ({ user }) => {
  const history = useHistory();

  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));

  const handleEdit = () => {
    history.push(`/users/edit/${user.id}`);
  };

  return (
    <>
      <section className="card">
        <Image
          cloudName="pracinejr"
          style={{ width: 200, height: 200 }}
          publicId={user.userPhoto}
        />
        <h4 className="card-title">{user.name}</h4>
        <h4 className="card-body">{user.email}</h4>
        {user.id === currentUser ? (
          <>
            <button className="button" onClick={handleEdit}>
              Edit
            </button>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};
