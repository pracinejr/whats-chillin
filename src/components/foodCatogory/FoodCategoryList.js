import React, { useContext, useEffect } from "react";
import { CategoryCard } from "./FoodCategoryCard";
import "./FoodCategory.css";
import { CategoryContext } from "./FoodCategoryProvider";

export const CategoryList = ({ category }) => {
  const { categories, getCategories } = useContext(CategoryContext);

  useEffect(() => {
    console.log("useEffect - getCategories");
    getCategories();
  }, []);

  return (
    <>
      <section className="categories">
        <h1 className="category_header">Food Categoreies</h1>
        <div className="category_list">
          {console.log("categoryList - Render", categories)}
          {categories.map((category) => {
            return <CategoryCard key={category.id} Category={category} />;
          })}
        </div>
      </section>
    </>
  );
};
