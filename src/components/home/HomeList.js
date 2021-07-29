import React, { useContext, useEffect } from "react";
import { HomeCard } from "./HomeCard";
import "./Home.css";
import { HomeContext } from "./HomeProvider";
import { useHistory } from "react-router-dom";
import { UserContext } from "../user/UserProvider";

export const HomeList = ({ home }) => {
  const { homes, getHomes } = useContext(HomeContext);
  const { users, getUsers } = useContext(UserContext);

  const history = useHistory();

  const currentUser = parseInt(sessionStorage.getItem("whats_chillin_user"));

  const currentUserHomeId = parseInt(
    sessionStorage.getItem("whats_chillin_user_homeId")
  );

  useEffect(() => {
    console.log("useEffect - getHomes");
    getHomes();
  }, []);

  useEffect(() => {
    getUsers();
    console.log(users);
  }, []);

  const usersFilteredByHome = users.filter(
    (user) => user.homeId === currentUserHomeId
  );

  const yourHome = homes.find((home) => home.id === currentUserHomeId);

  const handleEdit = () => {
    history.push(`/homes/edit/${home.id}`);
  };

  return (
    <>
      <section className="homes">
        <h1 className="home_header">Homes</h1>

        <button
          className="new_home_button"
          onClick={() => {
            history.push("/homes/create");
          }}
        >
          Add New
        </button>
        <div className="my_home">
          <div className="my-home-and-fam">
            {yourHome?.name}:<br></br>
            {usersFilteredByHome?.map((user) => {
              return `${user.name} `;
            })}
            {yourHome ? (
              <>
                <button className="button" onClick={handleEdit}>
                  Edit
                </button>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="home_list">
          {console.log("homeList - Render", homes)}
          {homes?.map((home) => {
            return <HomeCard key={home.id} home={home} />;
          })}
        </div>
      </section>
    </>
  );
};
