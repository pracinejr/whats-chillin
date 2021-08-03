import React, { useContext, useEffect, useState } from "react";
import { FoodItemContext } from "./FoodItemProvider";
import { useHistory, useParams } from "react-router-dom";
import "./FoodItem.css";
import { CategoryContext } from "../foodCatogory/FoodCategoryProvider";
import { StorageAreaContext } from "../storageArea/StorageAreaProvider";

export const FoodItemForm = () => {
  const { addFoodItem, getFoodItemById, updateFoodItem } =
    useContext(FoodItemContext);

  const { categories, getCategories } = useContext(CategoryContext);

  const { storageAreas, getStorageAreas } = useContext(StorageAreaContext);

  const [isLoading, setIsLoading] = useState(true);

  const [foodItem, setFoodItem] = useState({
    name: "",
    storageAreaId: 0,
    categoryId: 0,
    datePurchased: "",
    expirationDate: "",
    price: "",
    photo: "",
  });

  const { foodItemId } = useParams();

  const history = useHistory();

  useEffect(() => {
    getStorageAreas()
      .then(getCategories)
      .then(() => {
        if (foodItemId) {
          getFoodItemById(foodItemId).then((foodItem) => {
            setFoodItem(foodItem);
            setIsLoading(false);
          });
        } else {
          setIsLoading(false);
        }
      });
  }, []);
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
      foodItem.categoryId === 0 ||
      foodItem.datePurchased === "" ||
      foodItem.expirationDate === "" ||
      foodItem.price === 0 ||
      foodItem.photo === ""
    ) {
      window.alert("Please complete the form");
    } else if (foodItemId) {
      updateFoodItem(foodItem).then(() => history.push("/foodItems"));
    } else {
      const newFoodItem = {
        name: foodItem.name,
        datePurchased: foodItem.datePurchased,
        expirationDate: foodItem.expirationDate,
        categoryId: parseInt(foodItem.categoryId),
        storageAreaId: parseInt(foodItem.storageAreaId),
        homeId: currentUserHomeId,
        price: foodItem.price,
        photo: foodItem.photo,
      };
      addFoodItem(newFoodItem).then(() => history.push("/foodItems"));
    }
  };

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
          name="categoryId"
          id="categoryId"
          value={foodItem.categoryId}
          className="form-control"
          onChange={handleControlledInputChange}
        >
          <option>Select a Food Category</option>
          {categories.map((category) => {
            return (
              <option key={category.id} value={category.id}>
                {category.name}
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
      <fieldset>
        <div className="form-group">
          <label htmlFor="date">Price: </label>
          <input
            type="number"
            id="price"
            required
            autoFocus
            className="form-control"
            placeholder="$$$"
            value={foodItem.price}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="photo">Photo link: </label>
          <input
            type="text"
            id="photo"
            required
            autoFocus
            className="form-control"
            placeholder="Enter Photo Link Here"
            value={foodItem.photo}
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
