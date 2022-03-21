import React from "react";
import Carousel from "nuka-carousel";
import List from "../List";

import grocery from "../../assets/grocery.jpg";
import showers from "../../assets/showers.jpg";

const Services = ({ lang }) => {
  const title = {
    fr: `Services`,
    en: `Services`,
    nl: `Voorzieningen bij de camping`,
  };

  const firstParagraph = {
    fr: `Le Viscos dispose d'un bloc sanitaire moderne proposant des douches chaudes gratuites, un coin bébé et un cabinet pour personnes à mobilité réduite.`,
    en: `The campsite has a modern toilet block providing free hot showers and facilities for babies and handicapped persons.`,
    nl: `De camping heeft een modern toiletgebouw met gratis warme douches en voorzieningen voor baby's en gehandicapten.`,
  };
  const secondParagraph = {
    fr: `Pour votre confort, le camping vous propose également divers services gratuits ou avec supplément :`,
    en: `To ensure your confort, we propose additional services:`,
    nl: `Om uw comfort te garanderen, stellen wij aanvullende diensten voor:`,
  };
  const groceries = {
    fr: `Une épicerie mettant à votre disposition des produits de première nécessité au même prix que les grandes surfaces à proximité`,
    en: `Groceries at the same price you can find at the local supermarket`,
    nl: `Boodschappen voor dezelfde prijs die u kunt vinden in de plaatselijke supermarkt`,
  };
  const bread = {
    fr: `Un service de dépôt de pain proposant baguettes et vienoiseries tous les matins en Juillet et Août`,
    en: `Baguettes and croissants every morning in July and August`,
    nl: `Stokbrood en croissants elke ochtend in juli en augustus`,
  };
  const icecream = {
    fr: `Des glaces et boissons pour vous rafraîchir en terrasse à côté de la réception`,
    en: `Ice creams and drinks to quench your thirst on the reception's terrace`,
    nl: `Ijsjes en drankjes om je dorst te lessen op het terras van de receptie`,
  };
  const library = {
    fr: `Un espace de lecture avec prêt grtuit de livres et revues`,
    en: `A free book and magazine loan service`,
    nl: `Een gratis uitleendienst voor boeken en tijdschriften`,
  };
  const washing = {
    fr: `Une laverie mettant à diposition deux machines lavantes (4 €) et une machine séchante (2 €)`,
    en: `Laundry (€4) and dryer (€2) in self-service`,
    nl: `Wasserette (€ 4) en droger (€ 2) in zelfbediening`,
  };
  const wifi = {
    fr: `Un espace wifi convivial`,
    en: `A convivial free wifi room`,
    nl: `Een gezellige gratis wifi-ruimte`,
  };
  const wifiNew = {
    fr: `Couverture intégrale du camping en wifi (gratuit)`,
    en: `Full wifi coverage of the campsite`,
    nl: `Volledige wifi-dekking van de camping`,
  };

  const list = [
    {
      icon: "groceries",
      txt: groceries[lang],
    },
    {
      icon: "bread",
      txt: bread[lang],
    },
    {
      icon: "icecream",
      txt: icecream[lang],
    },
    {
      icon: "library",
      txt: library[lang],
    },
    {
      icon: "washing",
      txt: washing[lang],
    },
    {
      icon: "wifi",
      txt: wifi[lang],
    },
    {
      icon: "wifiNew",
      txt: wifiNew[lang],
    },
  ];
  return (
    <div className="services">
      {/* CAROUSEL */}
      <Carousel
        dragging
        autoplay
        heightMode="first"
        className="services__carousel"
      >
        <img src={grocery} />
        <img src={showers} />
      </Carousel>
      {/* CONTAINER CONTENT */}
      <div className="services__container">
        <h2 className="services__container__title">{title[lang]}</h2>
        <hr className="services__container__hr" />
        <div className="services__container__paragraph">
          <p className="services__container__paragraph__p">
            {firstParagraph[lang]}
          </p>
          <p className="services__container__paragraph__p">
            {secondParagraph[lang]}
          </p>
        </div>
        <div className="services__container__list">
          {list.map((li, index) => {
            return <List key={index} {...li} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
