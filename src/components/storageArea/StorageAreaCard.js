import React from "react";
import "./StorageArea.css";

export const StorageAreaCard = ({ storageArea }) => {
  return (
    <>
      <section className="card">
        <h4 className="card-title">{storageArea.name}</h4>
      </section>
    </>
  );
};
