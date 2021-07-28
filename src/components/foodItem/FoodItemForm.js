import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "./FoodItemProvider";
import { useHistory, useParams } from "react-router-dom";
import "./FoodItem.css";

export const FoodItemForm = () => {
  const { addFoodItem, getFoodItemById, updateFoodItem } =
    useContext(FoodItemContext);

  const [isLoading, setIsLoading] = useState(true);

  const [foodItem, setFoodItem] = useState({});

  const { foodItemId } = useParams();

  const history = useHistory();

  // const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  const handleControlledInputChange = (event) => {
    const newFoodItem = { ...foodItem };
    newFoodItem[event.target.id] = event.target.value;
    setFoodItem(newFoodItem);
  };

  const handleClickSaveFoodItem = (event) => {
    event.preventDefault();
    if (
      foodItem.name === "" ||
      foodItem.storageAreaId === 0 ||
      foodItem.foodCategoryId === 0 ||
      foodItem.datePurchased === 0 ||
      foodItem.expirationDate === 0 ||
      foodItem.price === 0
    ) {
      window.alert("Please complete the form");
    } else if (foodItemId) {
      updateFoodItem(foodItem).then(() => history.push("/foodItems"));
    } else {
      const newFoodItem = {
        storageAreaId: foodItem.storageAreaId,
        foodCategoryId: foodItem.foodCategoryId,
        name: foodItem.name,
        homeId: currentUserHomeId,
        datePurchased: foodItem.datePurchased,
        expirationDate: foodItem.expirationDate,
        price: foodItem.price,
        photo: foodItem.photo,
      };
      addFoodItem(newFoodItem).then(() => history.push("/foodItems"));
    }
  };

  useEffect(() => {
    if (foodItemId) {
      getFoodItemById(foodItemId).then((foodItem) => {
        setFoodItem(foodItem);
        console.log(foodItem);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <form className="foodItem_form">
      <h2 className="foodItem_form__title">New Food Item </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name"> Add Your New Food Item Here</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="Enter Your Food Item Name Here"
            value={foodItem.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSaveFoodItem}
      >
        {foodItemId ? <>Update Food Item</> : <>Save Food Item</>}
      </button>
    </form>
  );
};
