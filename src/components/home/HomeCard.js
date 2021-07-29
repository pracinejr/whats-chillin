import React from "react";
import "./Home.css";

export const HomeCard = ({ home }) => {
  return (
    <>
      <section className="card">
        <h4 className="card-title">{home.name}</h4>
      </section>
    </>
  );
};
