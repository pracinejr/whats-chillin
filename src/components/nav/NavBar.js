import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { useHistory } from "react-router-dom";

export const NavBar = (props) => {
  const history = useHistory();

  const logoutButton = () => {
    sessionStorage.clear();
    history.push("/login");
  };

  return (
    <ul className="navbar">
      <li className="navbar__item active">
        <Link className="navbar__link" to="/posts">
          What's Chillin'? -- Home / Posts
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/foodItems">
          Food
        </Link>
      </li>
      <li className="navbar__item">
        <Link className="navbar__link" to="/categories">
          Food Categories
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
      <li className="navbar__item">
        <button type="submit" onClick={logoutButton}>
          Logout
        </button>
      </li>
    </ul>
  );
};
