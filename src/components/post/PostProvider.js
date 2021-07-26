import React, { createContext, useState } from "react";

export const PostContext = createContext();

export const PostProvider = (props) => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    return fetch("http://localhost:8088/posts?_expand=user")
      .then((res) => res.json())
      .then(setPosts);
  };

  const addPost = (postObj) => {
    return fetch("http://localhost:8088/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    }).then(getPosts);
  };

  const getPostById = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`).then((res) => res.json());
  };

  const deletePost = (postId) => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
      method: "DELETE",
    }).then(getPosts);
  };

  const updatePost = (post) => {
    return fetch(`http://localhost:8088/posts/${post.id}?`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    }).then(getPosts);
  };

  return (
    <>
      <PostContext.Provider
        value={{
          posts,
          getPosts,
          deletePost,
          addPost,
          updatePost,
          getPostById,
        }}
      >
        {props.children}
      </PostContext.Provider>
    </>
  );
};
