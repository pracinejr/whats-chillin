import React, { createContext, useState } from "react";

export const StorageAreaContext = createContext();

export const StorageAreaProvider = (props) => {
  const [storageAreas, setStorageAreas] = useState([]);

  const getStorageAreas = () => {
    return fetch("http://localhost:8088/storageAreas")
      .then((res) => res.json())
      .then(setStorageAreas);
  };

  return (
    <>
      <StorageAreaContext.Provider
        value={{
          storageAreas,
          getStorageAreas,
        }}
      >
        {props.children}
      </StorageAreaContext.Provider>
    </>
  );
};
