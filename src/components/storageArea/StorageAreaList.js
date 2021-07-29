import React, { useContext, useEffect } from "react";
import { StorageAreaCard } from "./StorageAreaCard";
import "./StorageArea.css";
import { StorageAreaContext } from "./StorageAreaProvider";

export const StorageAreaList = ({ storageArea }) => {
  const { storageAreas, getStorageAreas } = useContext(StorageAreaContext);

  useEffect(() => {
    console.log("useEffect - getStorageAreas");
    getStorageAreas();
  }, []);

  return (
    <>
      <section className="storageAreas">
        <h1 className="storageArea_header">Storage Areas</h1>
        <div className="storageArea_list">
          {console.log("storageAreaList - Render", storageAreas)}
          {storageAreas.map((storageArea) => {
            return (
              <StorageAreaCard key={storageArea.id} storageArea={storageArea} />
            );
          })}
        </div>
      </section>
    </>
  );
};
