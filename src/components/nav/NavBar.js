import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = (props) => {
  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/">
          What's Chillin'? / Messages
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/foodItems">
          Food
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/users">
          Your Fam
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/storageAreas">
          Storage Areas
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/homes">
          Your Home
        </Link>
      </li>
    </ul>
  );
};
