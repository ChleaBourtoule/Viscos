import React from "react";
import { useState } from "react";
import Flags from "country-flag-icons/react/3x2";
import { GoTriangleUp } from "react-icons/go";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import Logo from "../assets/favicon.png";

const Header = ({ language, setLanguage }) => {
  const [burger, setBurger] = useState(false);

  const pitch = {
    fr: `EMPLACEMENTS`,
    en: `PITCHES`,
    nl: `STAANPLAATSEN`,
  };
  const services = {
    fr: `SERVICES`,
    en: `SERVICES`,
    nl: `VOORZIENINGEN BIJ DE CAMPING`,
  };
  const activities = {
    fr: `ACTIVITÉS`,
    en: `ACTIVITIES`,
    nl: `VRIJETIJDSBESTEDING`,
  };
  const prices = {
    fr: `TARIFS`,
    en: `PRICES`,
    nl: `TARIEVEN`,
  };
  const booking = {
    fr: `RÉSERVER`,
    en: `BOOKING`,
    nl: `RESERVERINGEN`,
  };
  const region = {
    fr: `RÉGION`,
    en: `REGION`,
    nl: `DE REGIO`,
  };
  return (
    <div className="header">
      <div className="header__div">
        <div className="header__div__logo">
          <NavLink to="/">
            <img
              src={Logo}
              alt="logo"
              className="header__div__logo__svg"
              onClick={() => setBurger(false)}
            />
          </NavLink>
        </div>
        <div className="header__div__burger">
          <GiHamburgerMenu
            className="header__div__burger__logo"
            role="presentation"
            onClick={() => setBurger(!burger)}
          />
        </div>
      </div>
      <div className="header__links">
        <ul className="header__links__list">
          <NavLink to="/pitches">
            <li className="header__links__list__link">{pitch[language]}</li>
          </NavLink>
          <NavLink to="/services">
            <li className="header__links__list__link">{services[language]}</li>
          </NavLink>
          <NavLink to="/activities">
            <li className="header__links__list__link">
              {activities[language]}
            </li>
          </NavLink>
          <NavLink to="/prices">
            <li className="header__links__list__link">{prices[language]}</li>
          </NavLink>
          <NavLink to="/booking">
            <li className="header__links__list__link">{booking[language]}</li>
          </NavLink>
          <NavLink to="/region">
            <li className="header__links__list__link">{region[language]}</li>
          </NavLink>
        </ul>
        <div className="header__links__flags">
          <div className="header__links__flags__container">
            <Flags.FR
              className="header__links__flags__container__fr"
              onClick={() => setLanguage("fr")}
            />
            <GoTriangleUp
              className={
                language === "fr"
                  ? "header__links__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
          <div className="header__links__flags__container">
            <Flags.GB
              className="header__links__flags__container__uk"
              onClick={() => setLanguage("en")}
            />
            <GoTriangleUp
              className={
                language === "en"
                  ? "header__links__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
          <div className="header__links__flags__container">
            <Flags.NL
              className="header__links__flags__container__nl"
              onClick={() => setLanguage("nl")}
            />
            <GoTriangleUp
              className={
                language === "nl"
                  ? "header__links__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
        </div>
      </div>

      {/* BURGER MENU */}
      <div className={burger ? "header__linksburger" : "header__hidden"}>
        <ul className="header__linksburger__list">
          <NavLink to="/pitches">
            <li
              className="header__linksburger__list__link"
              onClick={() => setBurger(false)}
            >
              {pitch[language]}
            </li>
          </NavLink>
          <NavLink to="/services">
            <li
              className="header__linksburger__list__link"
              onClick={() => setBurger(false)}
            >
              {services[language]}
            </li>
          </NavLink>
          <NavLink to="/activities">
            <li
              className="header__linksburger__list__link"
              onClick={() => setBurger(false)}
            >
              {activities[language]}
            </li>
          </NavLink>
          <NavLink to="/prices">
            <li
              className="header__linksburger__list__link"
              onClick={() => setBurger(false)}
            >
              {prices[language]}
            </li>
          </NavLink>
          <NavLink to="/booking">
            <li
              className="header__linksburger__list__link"
              onClick={() => setBurger(false)}
            >
              {booking[language]}
            </li>
          </NavLink>
          <NavLink to="/region">
            <li
              className="header__linksburger__list__link"
              onClick={() => setBurger(false)}
            >
              {region[language]}
            </li>
          </NavLink>
        </ul>
        <div className="header__linksburger__flags">
          <div className="header__linksburger__flags__container">
            <Flags.FR
              className="header__linksburger__flags__container__fr"
              onClick={() => setLanguage("fr")}
            />
            <GoTriangleUp
              className={
                language === "fr"
                  ? "header__linksburger__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
          <div className="header__linksburger__flags__container">
            <Flags.GB
              className="header__linksburger__flags__container__uk"
              onClick={() => setLanguage("en")}
            />
            <GoTriangleUp
              className={
                language === "en"
                  ? "header__linksburger__flags__container__triangle"
                  : "hidden"
              }
            />
          </div>
          <div className="header__linksburger__flags__container">
            <Flags.NL
              className="header__linksburger__flags__container__nl"
              onClick={() => setLanguage("nl")}
            />
            <GoTriangleUp
              className={
                language === "nl"
                  ? "header__linksburger__flags__container__triangle"
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
