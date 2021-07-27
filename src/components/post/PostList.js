import React, { useContext, useEffect, useState } from "react";
import { PostCard } from "./PostCard";
import "./Post.css";
import { PostContext } from "./PostProvider";
import { useHistory } from "react-router-dom";
import { UserContext } from "../user/UserProvider";

export const PostList = ({ post }) => {
  const { posts, getPosts } = useContext(PostContext);
  const { users, getUsers } = useContext(UserContext);

  const history = useHistory();

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  useEffect(() => {
    console.log("useEffect - getPosts");
    getPosts();
  }, []);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const postsFilteredByHome = posts.filter(
    (post) => post.homeId === currentUserHomeId
  );

  const sortedPosts = postsFilteredByHome.sort((a, b) => {
    return (
      parseInt(b.sentTime.split("/").join("")) -
      parseInt(a.sentTime.split("/").join(""))
    );
  });

  return (
    <>
      <section className="posts">
        <h1 className="post_header">Posts</h1>

        <button
          className="new_post_button"
          onClick={() => {
            history.push("/posts/create");
          }}
        >
          Add New
        </button>

        <div className="post_list">
          {console.log("postList - Render", sortedPosts)}
          {sortedPosts.map((post) => {
            return <PostCard key={post.id} post={post} />;
          })}
        </div>
      </section>
    </>
  );
};
