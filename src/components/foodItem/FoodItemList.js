import React, { useContext, useEffect } from "react";
import { FoodItemCard } from "./FoodItemCard";
import "./FoodItem.css";
import { FoodItemContext } from "./FoodItemProvider";
import { useHistory } from "react-router-dom";
import { UserContext } from "../user/UserProvider";

export const FoodItemList = ({ foodItem }) => {
  const { foodItems, getFoodItems } = useContext(FoodItemContext);
  const { users, getUsers } = useContext(UserContext);

  const history = useHistory();

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  useEffect(() => {
    console.log("useEffect - getFoodItems");
    getFoodItems();
  }, []);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const FoodItemsFilteredByHome = foodItems.filter(
    (foodItem) => foodItem.homeId === currentUserHomeId
  );

  const sortedFoodItems = FoodItemsFilteredByHome.sort((a, b) => {
    return (
      parseInt(b.datePurchased.split("/").join("")) -
      parseInt(a.datePurchased.split("/").join(""))
    );
  });

  return (
    <>
      <div class="container">
        <section className="foodItems" class="container">
          <h1 className="foodItem_header">FoodItems</h1>

          <button
            className="new_foodItem_button"
            onClick={() => {
              history.push("/foodItems/create");
            }}
          >
            Add New
          </button>

          <div className="foodItem_list">
            {console.log("foodItemList - Render", sortedFoodItems)}
            {sortedFoodItems.map((foodItem) => {
              return <FoodItemCard key={foodItem.id} foodItem={foodItem} />;
            })}
          </div>
        </section>
      </div>
    </>
  );
};
