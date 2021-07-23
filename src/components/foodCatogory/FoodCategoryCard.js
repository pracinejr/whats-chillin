import React, { useContext } from "react";
import "./FoodCategory.css";
import { FoodCategoryContext } from "./foodCategory/FoodCategoryProvider";

export const FoodCategoryCard = ({ foodCategory }) => {
  const { deleteFoodCategory, getFoodCategories } =
    useContext(FoodCategoryContext);

  const handleDelete = () => {
    deleteFoodCategory(foodCategory.id);
  };

  return (
    <>
      <section className="card">
        <h4 className="card-title">{foodCategory.name}</h4>
        <button className="btn" onClick={handleDelete}>
          Delete Category{" "}
        </button>
      </section>
    </>
  );
};
