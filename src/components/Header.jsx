import React from "react";
import Flags from "country-flag-icons/react/3x2";
import { GoTriangleUp } from "react-icons/go";
import { NavLink } from "react-router-dom";
import Logo from "../assets/favicon.png";
import { useState } from "react";

const Header = () => {
  const [chosenUk, setChosenUk] = useState(false);
  const [chosenNl, setChosenNl] = useState(false);
  const [chosenFr, setChosenFr] = useState(true);
  return (
    <div className="header">
      <div className="header__logo">
        <NavLink to="/">
          <img src={Logo} alt="logo" className="header__logo__svg" />
        </NavLink>
      </div>
      <div className="header__links">
        <ul className="header__links__list">
          <NavLink to="/pitches">
            <li className="header__links__list__link">EMPLACEMENTS</li>
          </NavLink>
          <NavLink to="/services">
            <li className="header__links__list__link">SERVICES</li>
          </NavLink>
          <NavLink to="/activities">
            <li className="header__links__list__link">ACTIVITÉS</li>
          </NavLink>
          <NavLink to="/prices">
            <li className="header__links__list__link">TARIFS</li>
          </NavLink>
          <NavLink to="/booking">
            <li className="header__links__list__link">RÉSERVER</li>
          </NavLink>
          <NavLink to="/region">
            <li className="header__links__list__link">RÉGION</li>
          </NavLink>
        </ul>
        <div className="header__links__flags">
          <div className="header__links__flags__container">
            <Flags.FR
              className="header__links__flags__container__fr"
              onClick={() => {
                setChosenFr(true), setChosenNl(false), setChosenUk(false);
              }}
            />
            <GoTriangleUp
              className={
                chosenFr
                  ? "header__links__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
          <div className="header__links__flags__container">
            <Flags.GB
              className="header__links__flags__container__uk"
              onClick={() => {
                setChosenFr(false), setChosenNl(false), setChosenUk(true);
              }}
            />
            <GoTriangleUp
              className={
                chosenUk
                  ? "header__links__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
          <div className="header__links__flags__container">
            <Flags.NL
              className="header__links__flags__container__nl"
              onClick={() => {
                setChosenFr(false), setChosenNl(true), setChosenUk(false);
              }}
            />
            <GoTriangleUp
              className={
                chosenNl
                  ? "header__links__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
