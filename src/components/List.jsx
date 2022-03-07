import React from "react";

import { MdLocalGroceryStore, MdSportsKabaddi } from "react-icons/md";
import {
  GiCroissant,
  GiWashingMachine,
  GiWifiRouter,
  GiKidSlide,
  GiCastle,
  GiShuttlecock,
} from "react-icons/gi";
import { FaIceCream, FaBook, FaWifi } from "react-icons/fa";

const List = ({ txt, icon }) => {
  return (
    <div className="list">
      {icon === "groceries" ? (
        <MdLocalGroceryStore className="list__logo" />
      ) : icon === "bread" ? (
        <GiCroissant className="list__logo" />
      ) : icon === "icecream" ? (
        <FaIceCream className="list__logo" />
      ) : icon === "library" ? (
        <FaBook className="list__logo" />
      ) : icon === "washing" ? (
        <GiWashingMachine className="list__logo" />
      ) : icon === "wifi" ? (
        <FaWifi className="list__logo" />
      ) : icon === "wifiNew" ? (
        <GiWifiRouter className="list__logo new" />
      ) : icon === "castle" ? (
        <GiCastle className="list__logo" />
      ) : icon === "slider" ? (
        <GiKidSlide className="list__logo" />
      ) : icon === "trampoline" ? (
        <MdSportsKabaddi className="list__logo" />
      ) : icon === "badminton" ? (
        <GiShuttlecock className="list__logo" />
      ) : (
        ""
      )}
      <p className={icon === "wifiNew" ? "list__p new" : "list__p"}>{txt}</p>
    </div>
  );
};

export default List;
