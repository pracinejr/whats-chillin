import React, { createContext, useState } from "react";

export const FoodCategoryContext = createContext();

export const FoodCategoryProvider = (props) => {
  const [foodCategories, setFoodCategories] = useState([]);

  const getFoodCategories
}