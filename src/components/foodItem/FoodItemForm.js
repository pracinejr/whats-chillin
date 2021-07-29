import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "./FoodItemProvider";
import { useHistory, useParams } from "react-router-dom";
import "./FoodItem.css";
import { FoodCategoryContext } from "../foodCatogory/FoodCategoryProvider";
import { StorageAreaContext } from "../storageArea/StorageAreaProvider";

export const FoodItemForm = () => {
  const { addFoodItem, getFoodItemById, updateFoodItem } =
    useContext(FoodItemContext);

  const { foodCategories, getFoodCategories } = useContext(FoodCategoryContext);

  const { storageAreas, getStorageAreas } = useContext(StorageAreaContext);

  const [isLoading, setIsLoading] = useState(true);

  const [foodItem, setFoodItem] = useState({
    name: "",
    storageAreaId: 0,
    foodCategoryId: 0,
    datePurchased: "",
    expirationDate: "",
    // price: "",
  });

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
      foodItem.datePurchased === "" ||
      foodItem.expirationDate === ""
      // foodItem.price === ""
    ) {
      window.alert("Please complete the form");
    } else if (foodItemId) {
      updateFoodItem(foodItem).then(() => history.push("/foodItems"));
    } else {
      const newFoodItem = {
        name: foodItem.name,
        datePurchased: foodItem.datePurchased,
        expirationDate: foodItem.expirationDate,
        foodCategoryId: parseInt(foodItem.foodCategoryId),
        storageAreaId: parseInt(foodItem.storageAreaId),
        homeId: currentUserHomeId,
        price: foodItem.price,
        photo: foodItem.photo,
      };
      addFoodItem(newFoodItem).then(() => history.push("/foodItems"));
    }
  };

  useEffect(() => {
    getStorageAreas()
      .then(getFoodCategories())
      .then(() => {
        if (foodItemId) {
          getFoodItemById(foodItemId).then((foodItem) => {
            setFoodItem(foodItem);
            console.log(foodItem);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      });
  }, []);
  console.log(foodItem);

  return (
    <form className="foodItem_form">
      <h2 className="foodItem_form__title">New Food Item </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name"> Food Item Name</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="ex. Chicken Salad"
            value={foodItem.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Date Purchased: </label>
          <input
            type="date"
            id="datePurchased"
            required
            autoFocus
            className="form-control"
            placeholder="Date Purchased"
            value={foodItem.datePurchased}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="expirationDate">Expiration Date: </label>
          <input
            type="date"
            id="expirationDate"
            required
            autoFocus
            className="form-control"
            placeholder="Expiration Date"
            value={foodItem.expirationDate}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <select
          name="foodCategoryId"
          id="foodCategoryId"
          value={foodItem.foodCategoryId}
          className="form-control"
          onChange={handleControlledInputChange}
        >
          <option>Select a Food Category</option>
          {foodCategories.map((foodCategory) => {
            return (
              <option key={foodCategory.id} value={foodCategory.id}>
                {foodCategory.name}
              </option>
            );
          })}
        </select>
      </fieldset>
      <fieldset>
        <select
          name="storageAreaId"
          id="storageAreaId"
          value={foodItem.storageAreaId}
          className="form-control"
          onChange={handleControlledInputChange}
        >
          <option>Select a Storage Area</option>
          {storageAreas.map((storageArea) => {
            return (
              <option key={storageArea.id} value={storageArea.id}>
                {storageArea.name}
              </option>
            );
          })}
        </select>
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
