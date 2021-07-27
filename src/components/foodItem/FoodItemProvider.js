import React, { createContext, useState } from "react";

export const FoodItemContext = createContext();

export const FoodItemProvider = (props) => {
  const [foodItems, setFoodItems] = useState([]);

  const getFoodItems = () => {
    return fetch("http://localhost:8088/foodItems?_expand=user")
      .then((res) => res.json())
      .then(setFoodItems);
  };

  const addFoodItem = (foodItemObj) => {
    return fetch("http://localhost:8088/foodItems", {
      method: "FoodItem",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodItemObj),
    }).then(getFoodItems);
  };

  const getFoodItemById = (id) => {
    return fetch(`http://localhost:8088/foodItems/${id}`).then((res) =>
      res.json()
    );
  };

  const deleteFoodItem = (foodItemId) => {
    return fetch(`http://localhost:8088/foodItems/${foodItemId}`, {
      method: "DELETE",
    }).then(getFoodItems);
  };

  const updateFoodItem = (foodItem) => {
    return fetch(`http://localhost:8088/foodItems/${foodItem.id}?`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(foodItem),
    }).then(getFoodItems);
  };

  return (
    <>
      <FoodItemContext.Provider
        value={{
          foodItems,
          getFoodItems,
          deleteFoodItem,
          addFoodItem,
          updateFoodItem,
          getFoodItemById,
        }}
      >
        {props.children}
      </FoodItemContext.Provider>
    </>
  );
};
