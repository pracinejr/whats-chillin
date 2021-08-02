import React, { useContext } from "react";
import { FoodItemContext } from "./FoodItemProvider";
import "./FoodItem.css";

export const FoodItemSearch = () => {
  const { setSearchTerms } = useContext(FoodItemContext);

  return (
    <>
      Food Item search:
      <input
        type="text"
        className="input--wide"
        onKeyUp={(event) => setSearchTerms(event.target.value)}
        placeholder="Search for a Food Item... "
      />
    </>
  );
};
