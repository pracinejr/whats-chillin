import React, { useContext } from "react";
import "./Post.css";
import { PostContext } from "./PostProvider";
import { useHistory } from "react-router-dom";

export const PostCard = ({ post }) => {
  const { deletePost, getPosts } = useContext(PostContext);

  const handleDelete = () => {
    deletePost(post.id);
  };

  const handleEdit = () => {
    history.push(`/posts/edit/${post.id}`);
  };

  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));
  // let foundUser = users.filter(
  //   (user) => post.user.homeId === currentUser.homeId
  // );
  // console.log(foundUser);

  const history = useHistory();

  return (
    <>
      <section className="post">
        <h3>Posted by: {post.user.name}</h3>
        <div>{post.message}</div>
        <div>{post.sentTime}</div>
        {post.userId === currentUser ? (
          <>
            <button className="button" onClick={handleEdit}>
              Edit
            </button>
            <button className="button" onClick={handleDelete}>
              Delete Post
            </button>
          </>
        ) : (
          <></>
        )}
      </section>
    </>
  );
};
