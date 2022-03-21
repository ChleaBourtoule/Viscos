import React from "react";
import Carousel from "nuka-carousel";
import List from "../List";
import { FaSwimmingPool, FaVolleyballBall } from "react-icons/fa";

import pool from "../../assets/pool.jpg";
import inflatable from "../../assets/inflatable.jpg";

const Activities = ({ lang }) => {
  const title = {
    fr: `Activités`,
    en: `Activities`,
    nl: `Vrijetijdsbesteding`,
  };

  const firstParagraph = {
    fr: `Le camping vous propose un espace piscine disposant d'un bassin chauffé de 60m² entouré de plages carrelées avec bains de soleil mis gratuitement à votre disposition. Il est ouvert de 11h à 20h en haute saison.`,
    en: `The campsite has a 60m² heated pool with free access deckchairs. The pool is open from 11am to 8pm.`,
    nl: `De camping heeft een verwarmd zwembad van 60 m² met gratis ligstoelen. Het zwembad is geopend van 11.00 tot 20.00 uur.`,
  };
  const secondParagraph = {
    fr: `Un terrain de volley sur herbe, un boulodrome et une table de ping-pong vous sont proposés sur le camp. Nous prêtons, ballons, boules et raquettes.`,
    en: `A volley field, a boules pitch and a ping-pong table are at your disposal in the campsite. We lend balls, boules and rackets.`,
    nl: `Op de camping staan ​​een volleybalveld, een jeu de boulesbaan en een tafeltennistafel tot uw beschikking. Wij lenen ballen, jeu de boules en rackets uit.`,
  };
  const thirdParagraph = {
    fr: `Pour le divertissement des plus jeunes, vous trouverez une aire de jeux comprenant :`,
    en: `Your children will enjoy our playground endowed with :`,
    nl: `Uw kinderen zullen genieten van onze speeltuin, uitgerust met:`,
  };

  const castle = {
    fr: `Une structure gonflable ouverte de 10h à 12h puis de 17h à 20h`,
    en: `An inflatable structure opened from 10am to 12am and from 5pm to 8pm`,
    nl: `Een opblaasbare structuur geopend van 10u tot 12u en van 17u tot 20u`,
  };
  const trampoline = {
    fr: `Deux trampolines`,
    en: `Two trampolines`,
    nl: `Twee trampolines`,
  };
  const slider = {
    fr: `Un portique, un tourniquet et un tobogan`,
    en: `A crossbar, a merry-go-round and a slide`,
    nl: `Een lat, een draaimolen en een glijbaan`,
  };
  const badminton = {
    fr: `Un fillet de badminton`,
    en: `A badminton net`,
    nl: `Een badmintonnet`,
  };

  const games = [
    {
      icon: "castle",
      txt: castle[lang],
    },
    {
      icon: "trampoline",
      txt: trampoline[lang],
    },
    {
      icon: "slider",
      txt: slider[lang],
    },
    {
      icon: "badminton",
      txt: badminton[lang],
    },
  ];
  return (
    <div className="activities">
      {/* CAROUSEL */}
      <Carousel
        dragging
        autoplay
        heightMode="first"
        className="activities__carousel"
      >
        <img src={pool} />
        <img src={inflatable} />
      </Carousel>
      {/* CONTAINER CONTENT */}
      <div className="activities__container">
        <h2 className="activities__container__title">{title[lang]}</h2>
        <hr className="activities__container__hr" />
        <div className="activities__container__paragraph">
          <div className="activities__container__paragraph__div">
            <FaSwimmingPool className="activities__container__paragraph__div__logo" />
            <p className="activities__container__paragraph__div__p">
              {firstParagraph[lang]}
            </p>
          </div>

          <div className="activities__container__paragraph__div">
            <FaVolleyballBall className="activities__container__paragraph__div__logo" />{" "}
            <p className="activities__container__paragraph__div__p">
              {secondParagraph[lang]}
            </p>
          </div>

          <p className="activities__container__paragraph__p">
            {thirdParagraph[lang]}
          </p>
        </div>
        <div className="activities__container__list">
          {games.map((game, index) => {
            return <List key={index} {...game} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Activities;
