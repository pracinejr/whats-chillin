import React, { useContext, useEffect } from "react";
import { CategoryCard } from "./FoodCategoryCard";
import "./FoodCategory.css";
import { CategoryContext } from "./FoodCategoryProvider";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    display: "flex",
    flexWrap: "wrap",
    overflow: "hidden",
  },
}));

export const CategoryList = ({ category }) => {
  const { categories, getCategories } = useContext(CategoryContext);
  const classes = useStyles();

  useEffect(() => {
    console.log("useEffect - getCategories");
    getCategories();
  }, []);

  return (
    <>
      <Grid className={classes.cardGrid} item xs={12} sm={6} md={4}>
        <h1 className="category_header" justifyText="center">
          Food Categoreies
        </h1>
        <div className="category_list">
          {console.log("categoryList - Render", categories)}
          {categories.map((category) => {
            return <CategoryCard key={category.id} category={category} />;
          })}
        </div>
      </Grid>
    </>
  );
};
