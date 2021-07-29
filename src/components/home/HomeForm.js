import React, { useContext, useEffect, useState } from "react";
import { HomeContext } from "./HomeProvider";
import { useHistory, useParams } from "react-router-dom";
import "./Home.css";

export const HomeForm = () => {
  const { addHome, getHomeById, updateHome } = useContext(HomeContext);

  const [isLoading, setIsLoading] = useState(true);

  const [home, setHome] = useState({
    name: "",
  });

  const { homeId } = useParams();

  const history = useHistory();

  const handleControlledInputChange = (event) => {
    const newHome = { ...home };
    newHome[event.target.id] = event.target.value;
    setHome(newHome);
  };

  const handleClickSaveHome = (event) => {
    event.preventDefault();
    if (home.name === "") {
      window.alert("Please complete the form");
    } else if (homeId) {
      updateHome(home).then(() => history.push("/homes"));
    } else {
      const newHome = {
        name: home.name,
      };
      addHome(newHome).then(() => history.push("/homes"));
    }
  };

  useEffect(() => {
    if (homeId) {
      getHomeById(homeId).then((home) => {
        setHome(home);
        console.log(home);
        setIsLoading(false);
      });
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <form className="home_form">
      <h2 className="home_form__title">
        {homeId ? <>Update Home </> : <>New Home</>}
      </h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name"> Food Item Name</label>
          <input
            type="text"
            id="name"
            required
            autoFocus
            className="form-control"
            placeholder="ex. Shaque's Mantion"
            value={home.name}
            onChange={handleControlledInputChange}
          />
        </div>
      </fieldset>
      <button
        className="btn btn-primary"
        disabled={isLoading}
        onClick={handleClickSaveHome}
      >
        {homeId ? <>Update Food Item</> : <>Save Food Item</>}
      </button>
    </form>
  );
};
