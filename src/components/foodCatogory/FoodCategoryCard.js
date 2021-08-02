import React from "react";
import "./FoodCategory.css";

export const CategoryCard = ({ category }) => {
  return (
    <>
      <section className="card">
        <h4 className="card-title">{category.name}</h4>
      </section>
    </>
  );
};
