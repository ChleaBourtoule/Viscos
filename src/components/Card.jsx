import React from "react";
import { NavLink } from "react-router-dom";
import { FaTree, FaShower, FaTrophy, FaBinoculars } from "react-icons/fa";

const Card = ({ param, txt, subtxt, icon }) => {
  return (
    <NavLink to={param}>
      <div className="card">
        {icon === "tree" ? (
          <FaTree className="card__logo" />
        ) : icon === "shower" ? (
          <FaShower className="card__logo" />
        ) : icon === "trophy" ? (
          <FaTrophy className="card__logo" />
        ) : icon === "binoculars" ? (
          <FaBinoculars className="card__logo" />
        ) : (
          ""
        )}
        <h2 className="card__txt">{txt}</h2>
        <h3 className="card__subtxt">{subtxt}</h3>
      </div>
    </NavLink>
  );
};

export default Card;
