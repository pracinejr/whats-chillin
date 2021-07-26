import React, { useContext, useEffect, useState } from "react";
import { MessagePostContext } from "./MessagePostProvider";
import { useHistory, useParams } from "react-router-dom";
import "./MessagePost.css";

export const MessagePostForm = () => {
  const { addMessagePost, getMessagePostById, updateMessagePost } =
    useContext(MessagePostContext);

  const [isLoading, setIsLoading] = useState(true);

  const [messagePost, setMessagePost] = useState({});

  const { messagePostId } = useParams();

  const history = useHistory();
  
  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));

  const currentUserHomeId = parseInt(sessionStorage.getItem("whats_chillin_user_homeId")) 


  const ts = new Date();

  const handleControlledInputChange = (event) => {
    const newMessagePost = { ...messagePost };
    newMessagePost[event.target.id] = event.target.value;
    setMessagePost(newMessagePost);
  };

  const handleClickSaveMessagePost = (event) => {
    event.preventDefault();
    if (
      messagePost.message === undefined ||
    ) {
      window.alert("Please complete the form");
    } else if (messagePostId) {
      updateMessagePost(messagePost).then(() => history.push("/home"));
    } else {
      const newMessagePost = {
        title: messagePost.title,
        homeId: currentUserHomeId,
        sentTime: ts.toLocaleDateString(),
        userId: currentUser,
      };
      addMessagePost(newMessagePost).then(() => history.push("/home"));
    }
  };

  useEffect(() => {
    if (messagePostId) {
      getMessagePostById(messagePostId).then((messagePost) => {
        setMessagePost(messagePost);
        console.log(messagePost);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <form className="messagePost_Form">
      <h2 className="mesPost_Form__title">New Message</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Message Title:</label>
          <input
            type="text"
            id="title"
            required
            autoFocus
            className="form-control"
            placeholder="Enter Your Message Here"
            value={messagePost.message}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSaveMessagePost}
      >
        {MessagePostId ? <>Update MessagePost</> : <>Save MessagePost</>}
      </button>
    </form>
  );
};
