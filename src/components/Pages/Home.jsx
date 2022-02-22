import React from "react";
import Card from "../Card";
import Contact from "../Contact";

import { AiFillStar } from "react-icons/ai";

const Home = ({ lang }) => {
  const summary = {
    fr: `Le Viscos est un camping 2 étoiles nouvelles normes (2017) de 69
      emplacements nus et 11 locatifs situé dans un écrin de verdure
      surplombant la vallée des Gaves. Ici, le temps s’arrête, vous
      détendre devient une activité à plein temps`,
    en: `Le Viscos is a two stars campsite (regraded in 2017) of 69 pitches and 11 mobile homes located in a santuary of greenery that overhang La Vallée des Gaves (The Torrents' Valley). Here, the time stops and resting becomes a full-time activity`,
    nl: `De Viscos is een 2 sterrencamping, volgens de Franse normen van 2017. De camping ligt in een weelderig groene omgeving met veel verschillende bomen. Vanaf de camping heb je een prachtig uitzicht op de valei van de Gaves. De tijd lijkt hier stil te staan, het is dan ook niet moeilijk om volop te genieten en te relaxen`,
  };
  const dates = {
    fr: `Dates d'ouverture : du 4/06/2022 au 1/10/2022`,
    en: `Opening: 6/4/2022 — 10/1/2022`,
    nl: `Opening: 6/4/2022 — 10/1/2022`,
  };
  const buttonPrez = {
    fr: `EN SAVOIR PLUS`,
    en: `FIND OUT MORE!`,
    nl: `MEER INFORMATIE`,
  };
  const curistsTitle = {
    fr: `Offre spéciale curistes`,
    en: `Special Offer for Therapy`,
    nl: `Speciale therapie-aanbieding`,
  };
  const curistsTxt = {
    fr: `Dans le cadre d'une cure de trois semaines, le Domaine du Viscos vous propose un tarif exceptionnel de 550 € pour deux personnes pendant la durée de la cure.`,
    en: `We propose a special offer applicable to two persons doing a three weeks therapy for the exclusive price of €550.`,
    nl: `Voor een therapie van drie weken, le Domaine du Viscos biedt een exclusieve prijs: 550 € voor twee personen gedurende drie weken.`,
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
      fr: `Tours de France 2022 : étape`,
      en: `Tour de France 2022 : stage`,
      nl: `Tour de France 2022 : etappe`,
    },
    second: {
      fr: `, le 21 juillet 2022.`,
      en: `, Jully 21, 2022`,
      nl: `, 21 juli 2022.`,
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
        <button className="home__presentation__button">
          {buttonPrez[lang]}
        </button>
      </div>

      {/* SECTION BANNER */}

      <div className="home__banner">
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
          <button className="home__banner__curist__button">
            {curistsBtn[lang]}
          </button>
        </div>
        <div className="home__banner__pitch">
          <div className="home__banner__pitch__title">
            <h2 className="home__banner__pitch__title__txt">
              {priceTitle[lang]}
            </h2>
            <hr className="home__banner__pitch__title__hr" />
          </div>
          <button className="home__banner__pitch__button">
            {priceBtn[lang]}
          </button>
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
          <h3 className="home__discover__desc__txt">{routard[lang]}</h3>
          <hr className="home__discover__desc__hr" />
          <h3 className="home__discover__desc__txt">
            {bike.first[lang]}{" "}
            <a
              style={{ color: "#d96846" }}
              href="https://www.letour.fr/fr/etape-18"
            >
              Lourdes &gt; Hautacam
            </a>
            {bike.second[lang]}
          </h3>
        </div>
      </div>
      <div className="home__contact">
        <Contact lang={lang} />
      </div>
    </div>
  );
};

export default Home;
