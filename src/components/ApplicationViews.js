import React from "react";
import { Route } from "react-router-dom";
import { MessagePostProvider } from "./messagePost/MessagePostProvider";
// import { MessagePostForm } from "./messagePost/MessagePostForm";
import { MessagePostList } from "./messagePost/MessagePostList";
import { UserProvider } from "./user/UserProvider";

export const ApplicationViews = () => {
  return (
    <>
      <MessagePostProvider>
        <UserProvider>
          <Route exact path="/home">
            <MessagePostList />
          </Route>
        </UserProvider>
      </MessagePostProvider>
    </>
  );
};
