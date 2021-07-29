import React from "react";
import "./FoodCategory.css";

export const FoodCategoryCard = ({ foodCategory }) => {
  return (
    <>
      <section className="card">
        <h4 className="card-title">{foodCategory.name}</h4>
      </section>
    </>
  );
};
