import React from "react";
import { FaMountain, FaCampground } from "react-icons/fa";
import { GiWoodCabin } from "react-icons/gi";
import { MdCheckroom } from "react-icons/md";

const Card = ({ subtxt, icon, lang, color }) => {
  return (
    <div className={color === "coral" ? "cardpitch" : "cardlight"}>
      {icon === "mountain" ? (
        <FaMountain
          className={color === "coral" ? "cardpitch__logo" : "cardlight__logo"}
        />
      ) : icon === "tent" ? (
        <FaCampground
          className={color === "coral" ? "cardpitch__logo" : "cardlight__logo"}
        />
      ) : icon === "cabin" ? (
        <GiWoodCabin
          className={color === "coral" ? "cardpitch__logo" : "cardlight__logo"}
        />
      ) : icon === "room" ? (
        <MdCheckroom
          className={color === "coral" ? "cardpitch__logo" : "cardlight__logo"}
        />
      ) : (
        ""
      )}
      <h3
        className={
          color === "coral" ? "cardpitch__subtxt" : "cardlight__subtxtlight"
        }
      >
        {subtxt[lang]}
      </h3>
    </div>
  );
};

export default Card;
