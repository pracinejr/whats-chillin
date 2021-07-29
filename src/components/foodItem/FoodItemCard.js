import React, { useContext } from "react";
import "./FoodItem.css";
import { useHistory } from "react-router-dom";

export const FoodItemCard = ({ foodItem }) => {
  const handleEdit = () => {
    history.push(`/foodItems/edit/${foodItem.id}`);
  };

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );
  // let foundUser = users.filter(
  //   (user) => FoodItem.user.homeId === currentUser.homeId
  // );
  // console.log(foundUser);

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
          <div className="food_item_price">{foodItem.price}</div>
          <div className="food_item_datePurchased">
            {foodItem.datePurchased}
          </div>
          <div className="food_item_expirationDate">
            {foodItem.expirationDate}
          </div>
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
