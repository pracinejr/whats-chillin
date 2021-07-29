import React from "react";
import { Route } from "react-router-dom";
import { PostProvider } from "./post/PostProvider";
import { PostForm } from "./post/PostForm";
import { PostList } from "./post/PostList";
import { FoodCategoryProvider } from "./foodCatogory/FoodCategoryProvider";
import { FoodCategoryList } from "./foodCatogory/FoodCategoryList";
import { FoodItemProvider } from "./foodItem/FoodItemProvider";
import { FoodItemList } from "./foodItem/FoodItemList";
import { FoodItemForm } from "./foodItem/FoodItemForm";
import { UserProvider } from "./user/UserProvider";
import { UserList } from "./user/UserList";
import { StorageAreaProvider } from "./storageArea/StorageAreaProvider";
import { StorageAreaList } from "./storageArea/StorageAreaList";

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

      <UserProvider>
        <Route exact path="/users">
          <UserList />
        </Route>
      </UserProvider>

      <StorageAreaProvider>
        <Route exact path="/storageAreas">
          <StorageAreaList />
        </Route>
      </StorageAreaProvider>
    </>
  );
};
