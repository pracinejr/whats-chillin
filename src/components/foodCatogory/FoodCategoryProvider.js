import React, { createContext, useState } from "react";

export const FoodCategoryContext = createContext();

export const FoodCategoryProvider = (props) => {
  const [foodCategories, setFoodCategories] = useState([]);

  const getFoodCategories = () => {
    return fetch("http://localhost:8088/categories")
      .then((res) => res.json())
      .then(setFoodCategories);
  };

  return (
    <>
      <FoodCategoryContext.Provider
        value={{
          foodCategories,
          getFoodCategories,
        }}
      >
        {props.children}
      </FoodCategoryContext.Provider>
    </>
  );
};
