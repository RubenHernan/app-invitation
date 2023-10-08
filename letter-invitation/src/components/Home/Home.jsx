import React from "react";
import ListResults from "./Molecules/ListResults";
import "./styles/styles.css";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    navigate("/admin");
    toast.info("Ha cerrado sesión...");
  };

  return (
    <div className="home__container">
      <div className="home__box">
        <div className="home__title">
          <h1>PANEL RESULTADOS</h1>
          <div className="home__logout">
            {JSON.parse(localStorage.getItem("user")).name}
            <i onClick={handleLogOut} className="bx bx-log-out-circle"></i>
          </div>
        </div>
        <ListResults></ListResults>
      </div>
    </div>
  );
};

export default Home;
