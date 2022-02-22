import React from "react";
import Card from "../Card";

import { AiFillStar } from "react-icons/ai";

const Home = () => {
  const cards = [
    {
      param: "/pitches",
      icon: "tree",
      txt: "Les emplacements et locations",
      subtxt: "Calmes et ombragés",
    },
    {
      param: "/services",
      icon: "shower",
      txt: "Les services",
      subtxt: "Pour votre confort",
    },
    {
      param: "/activities",
      icon: "trophy",
      txt: "Les activités",
      subtxt: "Nature & Loisirs",
    },
    {
      param: "/region",
      icon: "binoculars",
      txt: "La région",
      subtxt: "Au cœur de la Vallée des Gaves",
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
          <h4 className="home__presentation__text__txt">
            Le Viscos est un camping 2 étoiles nouvelles normes (2017) de 69
            emplacements nus et 11 locatifs situé dans un écrin de verdure
            surplombant la vallée des Gaves. Ici, le temps s’arrête, vous
            détendre devient une activité à plein temps.
          </h4>
        </div>
        <div className="home__presentation__dates">
          <h4 className="home__presentation__dates__txt">
            Dates d'ouverture : du 4/06/2022 au 1/10/2022
          </h4>
        </div>
        <button className="home__presentation__button">EN SAVOIR PLUS</button>
      </div>

      {/* SECTION BANNER */}

      <div className="home__banner">
        <div className="home__banner__curist">
          <div className="home__banner__curist__title">
            <h2 className="home__banner__curist__title__txt">
              Offre spéciale curistes
            </h2>
            <hr className="home__banner__curist__title__hr" />
          </div>
          <div className="home__banner__curist__text">
            <h4 className="home__banner__curist__text__txt">
              Dans le cadre d'une cure de trois semaines, le Domaine du Viscos
              vous propose un tarif exceptionnel de 550 € pour deux personnes
              pendant la durée de la cure.
            </h4>
          </div>
          <button className="home__banner__curist__button">EN PROFITER</button>
        </div>
        <div className="home__banner__pitch">
          <div className="home__banner__pitch__title">
            <h2 className="home__banner__pitch__title__txt">
              Tarifs emplacements et locatif
            </h2>
            <hr className="home__banner__pitch__title__hr" />
          </div>
          <button className="home__banner__pitch__button">
            VOIR MAINTENANT
          </button>
        </div>
      </div>

      {/* SECTION DECOUVREZ */}

      <div className="home__discover">
        <div className="home__discover__title">
          <h2 className="home__discover__title__txt">Découvrez...</h2>
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
          <h3 className="home__discover__desc__txt">
            Recommandé par Le Routard, ACSI et ANWB
          </h3>
          <hr className="home__discover__desc__hr" />
          <h3 className="home__discover__desc__txt">
            Tours de France 2022 : étape{" "}
            <a
              style={{ color: "#d96846" }}
              href="https://www.letour.fr/fr/etape-18"
            >
              Lourdes &gt; Hautacam
            </a>{" "}
            le 21 juillet 2022
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Home;
