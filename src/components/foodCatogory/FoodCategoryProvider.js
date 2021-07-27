import React, { createContext, useState } from "react";

export const FoodCategoryContext = createContext();

export const FoodCategoryProvider = (props) => {
  const [foodCategories, setFoodCategories] = useState([]);

  const getFoodCategories = () => {
    return fetch("http://localhost:8088/foodCategories")
      .then((res) => res.json())
      .then(setFoodCategories);
  };

  const addFoodCategory = (foodCategoryObj) => {
    return fetch("http://localhost:8088/foodCategories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodCategoryObj),
    }).then(getFoodCategories);
  };

  const getFoodCategoryById = (id) => {
    return fetch(`http://localhost:8088/foodCategories/${id}`).then((res) =>
      res.json()
    );
  };

  const deleteFoodCategory = (foodCategoryId) => {
    return fetch(`http://localhost8088/foodCategories/${foodCategoryId}`, {
      method: "DELETE",
    }).then(getFoodCategories);
  };

  const updateFoodCategory = (foodCategory) => {
    return fetch(`http://localhost:8088/foodCategories/${foodCategory.id}?`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodCategory),
    }).then(getFoodCategories);
  };

  return (
    <>
      <FoodCategoryContext.Provider
        value={{
          foodCategories,
          getFoodCategories,
          deleteFoodCategory,
          addFoodCategory,
          updateFoodCategory,
          getFoodCategoryById,
        }}
      >
        {props.children}
      </FoodCategoryContext.Provider>
    </>
  );
};
