import React, { useContext, useEffect } from "react";
import { PostCard } from "./PostCard";
import "./Post.css";
import { PostContext } from "./PostProvider";
import { useHistory } from "react-router-dom";

export const PostList = ({ post }) => {
  const { posts, getPosts } = useContext(PostContext);

  const history = useHistory();

  useEffect(() => {
    console.log("useEffect - getPosts");
    getPosts();
  }, []);

  const sortedPosts = posts.sort((a, b) => {
    return (
      parseInt(b.sentTime.split("/").join("")) -
      parseInt(a.sentTime.split("/").join(""))
    );
  });

  return (
    <>
      <section className="posts">
        <h1 className="post_header">s</h1>

        <button
          className="new_post_button"
          onClick={() => {
            history.push("/home/create");
          }}
        >
          Add New
        </button>

        <div className="post_list">
          {console.log("postList - Render", sortedPosts)}
          {sortedPosts.map((post) => {
            return <PostCard key={post.id} Post={post} />;
          })}
        </div>
      </section>
    </>
  );
};
