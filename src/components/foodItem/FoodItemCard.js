import React, { useContext } from "react";
import "./FoodItem.css";
import { useHistory } from "react-router-dom";
import { FoodItemContext } from "./FoodItemProvider";

export const FoodItemCard = ({ foodItem }) => {
  const { foodItems, getFoodItems } = useContext(FoodItemContext);

  const handleEdit = () => {
    history.push(`/foodItems/edit/${foodItem.id}`);
  };

  const todaysDate = new Date();

  const expirationDate = new Date(foodItem.expirationDate);

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  const expiredFood = todaysDate > expirationDate;

  const history = useHistory();

  return (
    <>
      {foodItem.homeId === currentUserHomeId ? (
        <section className="foodItem">
          <div>
            <div className="food_item_photo">{foodItem.photo}</div>
          </div>
          <div className="food_item_name">{foodItem.name}</div>
          <div className="food_item_homeId">{foodItem.home?.name}</div>
          <div className="food_item_homeId">{foodItem.category?.name}</div>
          <div className="food_item_storageAreaId">
            {foodItem.storageArea?.name}
          </div>
          <div className="food_item_price">${foodItem.price}</div>
          <div className="food_item_datePurchased">
            Date Purchased: {foodItem.datePurchased}
          </div>
          <div className="food_item_expirationDate">
            Expiration Date: {foodItem.expirationDate}
          </div>
          {expiredFood ? (
            <div className="expiration_alert">THIS ITEM IS EXPIRED</div>
          ) : (
            <></>
          )}
          <button className="button" onClick={handleEdit}>
            Edit
          </button>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};
