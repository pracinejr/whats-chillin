import React, { useContext, useEffect } from "react";
import "./MessagePost.css";
import { MessagePostContext } from "./MessagePostProvider";
import { useHistory } from "react-router-dom";
import { UserContext } from "../user/UserProvider";

export const MessagePostCard = ({ messagePost }) => {
  const { deleteMessagePost } = useContext(MessagePostContext);
  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));
  const { users, getUsers } = useContext(UserContext);

  const handleDelete = () => {
    deleteMessagePost(messagePost.id);
  };

  const handleEditMessage = () => {
    history.push(`/messagePost/edit/${messagePost.id}`);
  };

  useEffect(() => {
    getUsers(users);
    console.log(users);
  }, []);

  let foundUser = users.find((user) => messagePost.userId === user.userId);
  console.log(foundUser);

  const history = useHistory();

  return (
    <>
      {messagePost.userId === currentUser ? (
        <section className="MessagePost">
          <h3>Posted by: {messagePost.user.name}</h3>
          <div>{messagePost.message}</div>
          <div>{messagePost.sentTime}</div>
          <button className="button" onClick={handleEditMessage}>
            Edit Message
          </button>
          <button className="button" onClick={handleDelete}>
            Delete messagePost
          </button>
        </section>
      ) : (
        ""
      )}
      {foundUser ? (
        <section className="messagePost User_messagePost">
          <h3>Posted by: {messagePost.user.name}</h3>
          <div>{messagePost.message}</div>
          <div>{messagePost.sentTime}</div>
          <button className="button" onClick={handleEditMessage}>
            Edit messagePost
          </button>
          <button className="button" onClick={handleDelete}>
            Delete messagePost
          </button>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
