import React, { useContext, useEffect, useState } from "react";
import { FoodItemCard } from "./FoodItemCard";
import "./FoodItem.css";
import { FoodItemContext } from "./FoodItemProvider";
import { useHistory } from "react-router-dom";

export const FoodItemList = ({ foodItem }) => {
  const { foodItems, getFoodItems, searchTerms } = useContext(FoodItemContext);
  const [filteredFoodItems, setFiltered] = useState([]);

  const history = useHistory();

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  useEffect(() => {
    getFoodItems();
  }, []);

  const foodItemsFilteredByHome = foodItems.filter(
    (foodItem) => foodItem.homeId === currentUserHomeId
  );

  const sortedFoodItems = foodItemsFilteredByHome.sort((a, b) => {
    return (
      parseInt(b.datePurchased.split("-").join("")) -
      parseInt(a.datePurchased.split("-").join(""))
    );
  });

  useEffect(() => {
    if (searchTerms !== "") {
      const subset = sortedFoodItems.filter((foodItem) =>
        foodItem.name.toLowerCase().includes(searchTerms)
      );

      setFiltered(subset);
    } else {
      setFiltered(foodItems);
    }
  }, [searchTerms, sortedFoodItems]);

  return (
    <>
      <section className="foodItems">
        <h1 className="foodItem_header">Food Items</h1>

        <button
          className="new_foodItem_button"
          onClick={() => {
            history.push("/foodItems/create");
          }}
        >
          Add New
        </button>

        <div className="foodItem_list">
          {filteredFoodItems.map((foodItem) => {
            return (
              <FoodItemCard
                key={foodItem.id}
                foodItem={foodItem}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};
