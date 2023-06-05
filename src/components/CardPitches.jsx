import React from "react";
import { FaMountain, FaCampground, FaClipboardList } from "react-icons/fa";
import { GiWoodCabin } from "react-icons/gi";
import { MdCheckroom } from "react-icons/md";

const Card = ({ subtxt, icon, lang, color, link }) => {
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
      <div>{icon === "room" ? <a className={
          color === "coral" ? "cardpitch__subtxt cardpitch__subtxt__link " : "cardlight__subtxtlight cardlight__subtxtlight__link"
        } href="https://www.canva.com/design/DAFk9GLGYkU/FI-BhNNv7A6PRUo9Nfgilg/view?utm_content=DAFk9GLGYkU&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"><FaClipboardList/> {link[lang]}</a> : "" }</div>
      
    </div>
  );
};

export default Card;
