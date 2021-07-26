import React, { useContext, useEffect } from "react";
import { MessagePostCard } from "./MessagePostCard";
import "./MessagePost.css";
import { MessagePostContext } from "./MessagePostProvider";
import { useHistory } from "react-router-dom";

export const MessagePostList = ({ messagePost }) => {
  const { messagePosts, getMessagePosts } = useContext(MessagePostContext);

  const history = useHistory();

  useEffect(() => {
    console.log("useEffect - getMessagePosts");
    getMessagePosts();
  }, []);

  const sortedMessagePosts = messagePosts.sort((a, b) => {
    return (
      parseInt(b.sentTime.split("/").join("")) -
      parseInt(a.sentTime.split("/").join(""))
    );
  });

  return (
    <>
      <section className="messagePosts">
        <h1 className="messagePost_header">Messages</h1>

        <button
          className="new_MessagePost_button"
          onClick={() => {
            history.push("/home/create");
          }}
        >
          Add New Message
        </button>

        <div className="messagePost_list">
          {console.log("messagePostList - Render", sortedMessagePosts)}
          {sortedMessagePosts.map((messagePost) => {
            return (
              <MessagePostCard key={messagePost.id} messagePost={messagePost} />
            );
          })}
        </div>
      </section>
    </>
  );
};
