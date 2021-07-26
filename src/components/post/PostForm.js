import React, { useContext, useEffect, useState } from "react";
import { PostContext } from "./PostProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Post.css";

export const PostForm = () => {
  const { addPost, getPostById, updatePost } =
    useContext(PostContext);

  const [isLoading, setIsLoading] = useState(true);

  const [post, setPost] = useState({});

  const { postId } = useParams();

  const history = useHistory();
  
  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));

  const currentUserHomeId = parseInt(sessionStorage.getItem("whats_chillin_user_homeId")) 


  const ts = new Date();

  const handleControlledInputChange = (event) => {
    const newPost = { ...post };
    newPost[event.target.id] = event.target.value;
    setPost(newPost);
  };

  const handleClickSavePost = (event) => {
    event.preventDefault();
    if (
      post.message === undefined ||
    ) {
      window.alert("Please complete the form");
    } else if (PostId) {
      updatePost(post).then(() => history.push("/home"));
    } else {
      const newPost = {
        message: post.message,
        homeId: currentUserHomeId,
        sentTime: ts.toLocaleDateString(),
        userId: currentUser,
      };
      addPost(newPost).then(() => history.push("/home"));
    }
  };

  useEffect(() => {
    if (postId) {
      getPostById(postId).then((post) => {
        setPost(post);
        console.log(post);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <form className="post_form">
      <h2 className="post_form__title">New </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name"> Message:{post.messgae}</label>
          <input
            type="text"
            id="title"
            required
            autoFocus
            className="form-control"
            placeholder="Enter Your  Here"
            value={Post.message}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSavePost}
      >
        {PostId ? <>Update Post</> : <>Save Post</>}
      </button>
    </form>
  );
};
