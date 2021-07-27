import React, { useContext } from "react";
import "./FoodCategory.css";
import { FoodCategoryContext } from "./FoodCategoryProvider";
import { useHistory } from "react-router-dom";

export const FoodCategoryCard = ({ foodCategory }) => {
  const { deleteFoodCategory, getFoodCategories } =
    useContext(FoodCategoryContext);

  const handleDelete = () => {
    deleteFoodCategory(foodCategory.id);
  };

  const history = useHistory();

  const handleEdit = () => {
    history.push(`/foodCategories/edit/${foodCategory.id}`);
  };

  return (
    <>
      <section className="card">
        <h4 className="card-title">{foodCategory.name}</h4>
      </section>
    </>
  );
};
