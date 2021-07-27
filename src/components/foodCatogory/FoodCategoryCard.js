import React, { useContext } from "react";
import "./FoodCategory.css";
import { FoodCategoryContext } from "./FoodCategoryProvider";
import { useHistory } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

export const FoodCategoryCard = ({ foodCategory }) => {
  const { deleteFoodCategory, getFoodCategories } =
    useContext(FoodCategoryContext);

  return (
    <>
      <div class="mt-5 text-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://pics.drugstore.com/prodimg/418561/450.jpg"
          />
          <Card.Body>
            <Card.Title>{foodCategory.name}</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        {/* <section className="card">
        <h4 className="card-title">{foodCategory.name}</h4>
      </section> */}
      </div>
    </>
  );
};
