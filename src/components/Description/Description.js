import React from "react";
import { AllFacilities } from "../Facilities/AllFacilities";
import { Link } from "react-router-dom";

import logo from "./img/image.png";

import "./Description.scss";

export const Description = () => {
  return (
    <div className="description">
      <div className="GetStarted">
        <div className="logo">
          <img src={logo} alt="logo.img" />
          <p className="BigLogo">S2</p>
        </div>
        <article>
          <h2>
            <span className="SmallLogo">S2</span> - сервис автоматизации <br />{" "}
            процесса взаимодействия между оптовыми клиентами и торговым
            предприятием
          </h2>
          <Link to="/SignIn">
            <button className="GetStartedButton">Начать &rarr;</button>
          </Link>
        </article>
      </div>
      <div className="FacilitiesContainer">
        <AllFacilities />
      </div>
    </div>
  );
};
