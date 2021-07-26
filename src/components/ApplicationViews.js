import React from "react";
import { Route } from "react-router-dom";
import { PostProvider } from "./post/PostProvider";
// import { PostForm } from "./post/PostForm";
import { PostList } from "./post/PostList";
import { UserProvider } from "./user/UserProvider";

export const ApplicationViews = () => {
  return (
    <>
      <PostProvider>
        <UserProvider>
          <Route exact path="/home">
            <PostList />
          </Route>
        </UserProvider>
      </PostProvider>
    </>
  );
};
