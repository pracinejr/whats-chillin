import React, { createContext, useState } from "react";

export const FoodItemContext = createContext();

export const FoodItemProvider = (props) => {
  const [foodItems, setFoodItems] = useState([]);

  const getFoodItems = () => {
    return fetch(
      "http://localhost:8088/foodItems?_expand=home&_expand=storageArea&_expand=foodCategory"
    )
      .then((res) => res.json())
      .then(setFoodItems);
  };

  const addFoodItem = (foodItemObj) => {
    return fetch("http://localhost:8088/foodItems", {
      method: "POST",
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
