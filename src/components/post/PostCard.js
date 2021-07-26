import React, { useContext, useEffect } from "react";
import "./Post.css";
import { PostContext } from "./PostProvider";
import { useHistory } from "react-router-dom";
import { UserContext } from "../user/UserProvider";

export const PostCard = ({ post }) => {
  const { deletePost } = useContext(PostContext);
  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));
  const { users, getUsers } = useContext(UserContext);

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleEdit = () => {
    history.push(`/post/edit/${post.id}`);
  };

  useEffect(() => {
    getUsers(users);
    console.log(users);
  }, []);

  let foundUser = users.find((user) => post.userId === user.userId);
  console.log(foundUser);

  const history = useHistory();

  return (
    <>
      {post.userId === currentUser ? (
        <section className="post">
          <h3>Posted by: {post.user.name}</h3>
          <div>{post.message}</div>
          <div>{post.sentTime}</div>
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
          <button className="button" onClick={handleDelete}>
            Delete Post
          </button>
        </section>
      ) : (
        ""
      )}
      {foundUser ? (
        <section className="Post User_Post">
          <h3>Posted by: {post.user.name}</h3>
          <div>{post.message}</div>
          <div>{post.sentTime}</div>
          <button className="button" onClick={handleEdit}>
            Edit Post
          </button>
          <button className="button" onClick={handleDelete}>
            Delete Post
          </button>
        </section>
      ) : (
        ""
      )}
    </>
  );
};
