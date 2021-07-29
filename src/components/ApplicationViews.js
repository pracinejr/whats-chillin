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
import { FoodItemForm } from "./foodItem/FoodItemForm";
import { StorageAreaProvider } from "./storageArea/StorageAreaProvider";

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
        <FoodCategoryProvider>
          <StorageAreaProvider>
            <Route exact path="/foodItems/create">
              <FoodItemForm />
            </Route>
          </StorageAreaProvider>
        </FoodCategoryProvider>
      </FoodItemProvider>

      <FoodCategoryProvider>
        <Route exact path="/foodCategories">
          <FoodCategoryList />
        </Route>
      </FoodCategoryProvider>
    </>
  );
};
