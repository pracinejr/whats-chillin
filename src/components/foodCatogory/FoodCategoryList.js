import React, { useContext, useEffect } from "react";
import { FoodCategoryCard } from "./FoodCategoryCard";
import "./FoodCategory.css";
import { FoodCategoryContext } from "./FoodCategoryProvider";

export const FoodCategoryList = ({ foodCategory }) => {
  const { foodCategories, getFoodCategories } = useContext(FoodCategoryContext);

  useEffect(() => {
    console.log("useEffect - getFoodCategories");
    getFoodCategories();
  }, []);

  return (
    <>
      <section className="foodCategories">
        <h1 className="foodCategory_header">Food Categoreies</h1>
        <div className="foodCategory_list">
          {console.log("FoodCategoryList - Render", foodCategories)}
          {foodCategories.map((foodCategory) => {
            return (
              <FoodCategoryCard
                key={foodCategory.id}
                foodCategory={foodCategory}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
