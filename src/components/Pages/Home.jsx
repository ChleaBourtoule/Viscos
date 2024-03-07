import React from "react";
import Card from "../Card";

import { AiFillStar } from "react-icons/ai";
import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { LiaBicycleSolid } from "react-icons/lia";
import { NavLink } from "react-router-dom";

const Home = ({ lang }) => {
  const summary = {
    fr: `Le Viscos est un camping 2 étoiles nouvelles normes (2023) de 67
      emplacements nus et 11 mobile homes (8 locatifs et 3 de loisirs) situé dans un écrin de verdure
      surplombant la vallée des Gaves. Ici, le temps s’arrête, vous
      détendre devient une activité à plein temps.`,
    en: `Le Viscos is a two stars campsite (regraded in 2017) of 67 pitches and 11 mobile homes (8 to rent and 3 residential) located in a santuary of greenery that overhang La Vallée des Gaves (The Torrents' Valley). Here, the time stops and resting becomes a full-time activity.`,
    nl: `Le Viscos is een tweesterrencamping (gerenoveerd in 2017) met 67 plaatsen en 11 stacaravans (8 te huur en 3 woningen), gelegen in een oase van groen boven La Vallée des Gaves. Hier stopt de tijd en wordt rusten een voltijdse bezigheid.`,
  };
  const dates = {
    fr: `Dates d'ouverture : du 15/06/2024 au 15/09/2024`,
    en: `Opening: 6/15/2024 — 9/15/2024`,
    nl: `Opening: 6/15/2024 — 9/15/2024`,
  };
  const curistsTitle = {
    fr: `Offre spéciale curistes`,
    en: `Special Offer for Therapy`,
    nl: `Speciale therapie-aanbieding`,
  };
  const curistsTxt = {
    fr: `Dans le cadre d'une cure de trois semaines, le Domaine du Viscos vous propose un tarif exceptionnel de 550 € hors Juillet/Août pour deux personnes pendant la durée de la cure.`,
    en: `We propose a special offer applicable to two persons doing a three weeks therapy for the exclusive price of €550 excluding July/August.`,
    nl: `Voor een therapie van drie weken, le Domaine du Viscos biedt een exclusieve prijs: 550 € exclusief juli/augustus voor twee personen gedurende drie weken.`,
  };
  const curistsBtn = {
    fr: `EN PROFITER`,
    en: `GET STARTED!`,
    nl: `BEGIN`,
  };
  const priceTitle = {
    fr: `Tarifs emplacements et locatif`,
    en: `Prices`,
    nl: `Tarieven`,
  };
  const priceBtn = {
    fr: `VOIR MAINTENANT`,
    en: `SEE NOW`,
    nl: `ZIE NU`,
  };
  const discover = {
    fr: `Découvrez...`,
    en: `Discover...`,
    nl: `Ontdekken...`,
  };
  const tree = {
    txt: {
      fr: `Les emplacements et locations`,
      en: `Pitches and rental`,
      nl: `Staanplaatsen`,
    },
    subtxt: {
      fr: `Calmes et ombragés`,
      en: `Calm and shady`,
      nl: `Rustig en schaduwrijk`,
    },
  };
  const shower = {
    txt: {
      fr: `Les services`,
      en: `Services`,
      nl: `Voorzieningen bij de camping`,
    },
    subtxt: {
      fr: `Pour votre confort`,
      en: `For your comfort`,
      nl: `Voor uw comfort`,
    },
  };
  const hiking = {
    txt: {
      fr: `Les activités`,
      en: `Activities`,
      nl: `Vrijetijdsbesteding`,
    },
    subtxt: {
      fr: `Nature & Loisirs`,
      en: `Nature & Leisure`,
      nl: `Natuur en vrije tijd`,
    },
  };
  const map = {
    txt: {
      fr: `La région`,
      en: `Region`,
      nl: `De Regio`,
    },
    subtxt: {
      fr: `Au cœur de la Vallée des Gaves`,
      en: `At the heart of la Vallée des Gaves`,
      nl: `In het midden van la vallée des gaves`,
    },
  };
  const routard = {
    fr: `Recommandé par Le Routard, ACSI et ANWB`,
    en: `Recommended by Le Routard, ACSI, and ANWB`,
    nl: `De camping wordt aanbevolen door : de Routard, Acsi en de ANWB`,
  };
  const bike = {
    first: {
      fr: `Tours de France 2024 : étape`,
      en: `Tour de France 2024 : stage`,
      nl: `Tour de France 2024 : etappe`,
    },
    second: {
      fr: `, le 13 juillet 2024.`,
      en: `, Jully 13, 2024`,
      nl: `, 13 juli 2024.`,
    },
  };

  const cards = [
    {
      param: "/pitches",
      icon: "tree",
      txt: tree.txt[lang],
      subtxt: tree.subtxt[lang],
    },
    {
      param: "/services",
      icon: "shower",
      txt: shower.txt[lang],
      subtxt: shower.subtxt[lang],
    },
    {
      param: "/activities",
      icon: "hiking",
      txt: hiking.txt[lang],
      subtxt: hiking.subtxt[lang],
    },
    {
      param: "/region",
      icon: "map",
      txt: map.txt[lang],
      subtxt: map.subtxt[lang],
    },
  ];
  return (
    <div className="home">
      {/* SECTION PRESENTATION */}

      <div className="home__presentation">
        <div className="home__presentation__prez">
          <h1 className="home__presentation__prez__title">
            CAMPING DOMAINE DU VISCOS
          </h1>
          <div className="home__presentation__prez__stars">
            <AiFillStar className="home__presentation__prez__stars__star" />
            <AiFillStar className="home__presentation__prez__stars__star" />
          </div>
        </div>
        <hr className="home__presentation__hr" />
        <div className="home__presentation__text">
          <h4 className="home__presentation__text__txt">{summary[lang]}</h4>
        </div>
        <div className="home__presentation__dates">
          <h4 className="home__presentation__dates__txt">{dates[lang]}</h4>
        </div>
        <HiOutlineChevronDoubleDown className="home__presentation__chevron" />
      </div>

      {/* SECTION BANNER */}

      <div className="home__banner" id="banner">
        <div className="home__banner__curist">
          <div className="home__banner__curist__title">
            <h2 className="home__banner__curist__title__txt">
              {curistsTitle[lang]}
            </h2>
            <hr className="home__banner__curist__title__hr" />
          </div>
          <div className="home__banner__curist__text">
            <h4 className="home__banner__curist__text__txt">
              {curistsTxt[lang]}
            </h4>
          </div>
          <NavLink to="/prices">
            <button className="home__banner__curist__button">
              {curistsBtn[lang]}
            </button>
          </NavLink>
        </div>
        <div className="home__banner__pitch">
          <div className="home__banner__pitch__title">
            <h2 className="home__banner__pitch__title__txt">
              {priceTitle[lang]}
            </h2>
            <hr className="home__banner__pitch__title__hr" />
          </div>
          <NavLink to="/prices">
            <button className="home__banner__pitch__button">
              {priceBtn[lang]}
            </button>
          </NavLink>
        </div>
      </div>

      {/* SECTION DECOUVREZ */}

      <div className="home__discover">
        <div className="home__discover__title">
          <h2 className="home__discover__title__txt">{discover[lang]}</h2>
          <hr className="home__discover__title__hr" />
        </div>
        <div className="home__discover__container">
          {/* MAP OF COMPONENT CARD */}
          {cards &&
            cards.map((card, index) => {
              return <Card key={index} {...card} />;
            })}
        </div>
        <div className="home__discover__desc">
          <hr className="home__discover__desc__hr" />
          <div>
            <LiaBicycleSolid className="card__logo" />
          </div>
          <h3 className="home__discover__desc__txt">
            {bike.first[lang]}{" "}
            <a
              style={{ color: "#d96846" }}
              href="https://www.letour.fr/fr/etape-14"
            >
              Pau &gt; Saint-Lary-Soulan
            </a>
            {bike.second[lang]}
          </h3>
          <hr className="home__discover__desc__hr" />
          <h3 className="home__discover__desc__txt">{routard[lang]}</h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
