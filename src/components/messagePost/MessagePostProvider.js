import React, { createContext, useState } from "react";

export const MessagePostContext = createContext();

export const MessagePostProvider = (props) => {
  const [messagePosts, setMessagePosts] = useState([]);

  const getMessagePosts = () => {
    return fetch("http://localhost:8088/messagePosts?_expand=user")
      .then((res) => res.json())
      .then(setMessagePosts);
  };

  const addMessagePost = (messagePostObj) => {
    return fetch("http://localhost:8088/messagePosts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messagePostObj),
    }).then(getMessagePosts);
  };

  const getMessagePostById = (id) => {
    return fetch(`http://localhost:8088/MessagePosts/${id}`).then((res) =>
      res.json()
    );
  };

  const deleteMessagePost = (messagePostId) => {
    return fetch(`http://localhost:8088/messagePosts/${messagePostId}`, {
      method: "DELETE",
    }).then(getMessagePosts);
  };

  const updateMessagePost = (messagePost) => {
    return fetch(`http://localhost:8088/messagePosts/${messagePost.id}?`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messagePost),
    }).then(getMessagePosts);
  };

  return (
    <>
      <MessagePostContext.Provider
        value={{
          messagePosts,
          getMessagePosts,
          deleteMessagePost,
          addMessagePost,
          updateMessagePost,
          getMessagePostById,
        }}
      >
        {props.children}
      </MessagePostContext.Provider>
    </>
  );
};
