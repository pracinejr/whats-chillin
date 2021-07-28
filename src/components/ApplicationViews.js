import React from "react";
import { Route } from "react-router-dom";
import { PostProvider } from "./post/PostProvider";
import { PostForm } from "./post/PostForm";
import { PostList } from "./post/PostList";
import { UserProvider } from "./user/UserProvider";
import { FoodCategoryProvider } from "./foodCatogory/FoodCategoryProvider";
import { FoodCategoryList } from "./foodCatogory/FoodCategoryList";
import { FoodItemProvider } from "./foodItem/FoodItemProvider";
import { FoodItemList } from "./foodItem/FoodItemList";

export const ApplicationViews = () => {
  return (
    <>
      <PostProvider>
        <UserProvider>
          <Route exact path="/posts">
            <PostList />
          </Route>
        </UserProvider>
        <Route exact path="/posts/create">
          <PostForm />
        </Route>
        <Route exact path="/posts/edit/:postId(\d+)">
          <PostForm />
        </Route>
      </PostProvider>

      <FoodItemProvider>
        <Route exact path="/foodItems">
          <FoodItemList />
        </Route>
      </FoodItemProvider>

      <FoodCategoryProvider>
        <Route exact path="/foodCategories">
          <FoodCategoryList />
        </Route>
      </FoodCategoryProvider>
    </>
  );
};
