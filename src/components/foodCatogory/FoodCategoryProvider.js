import React, { createContext, useState } from "react";

export const CategoryContext = createContext();

export const CategoryProvider = (props) => {
  const [categories, setCategories] = useState([]);

  const getCategories = () => {
    return fetch("http://localhost:8088/categories")
      .then((res) => res.json())
      .then(setCategories);
  };

  return (
    <>
      <CategoryContext.Provider
        value={{
          categories,
          getCategories,
        }}
      >
        {props.children}
      </CategoryContext.Provider>
    </>
  );
};
