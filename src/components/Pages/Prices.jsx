import React from "react";
import { NavLink } from "react-router-dom";

import Acsi from "../Acsi";
import Curist from "../Curist";
import Plan from "../Plan";
import Rental from "../Rental";
import Supp from "../Supp";

const Prices = ({ lang }) => {
  const title = {
    fr: `Tarifs`,
    en: `Prices`,
    nl: `Tarieven`,
  };
  const plan = {
    fr: `Partie Camping`,
    en: `Tents, caravans, and camper vans`,
    nl: `Tenten, caravans en campers`,
  };
  const date1 = {
    fr: `Basse saison : du 4/06/2022 au 09/07/2022 et du 20/08/2022 au 1/10/2022.`,
    en: `Low season: 6/4/2022 — 7/9/2022 and 8/20/2022 — 10/1/2022.`,
    nl: `Laagseizoen: 4/6/2022 — 7/9/2022 en 20/8/2022 — 1/10/2022.`,
  };
  const date2 = {
    fr: `Haute saison : du 09/07/2022 au 20/08/2022.`,
    en: `High season: 7/9/2022 — 8/20/2022.`,
    nl: `Hoogseizoen: 7/9/2022 — 20-8/2022.`,
  };

  const plan1 = {
    row1: {
      fr: `Forfait Basique`,
      en: `Basic Package`,
      nl: `Basispakket`,
    },
    season: {
      fr: `Basse saison / Haute saison`,
      en: `Low season / High season`,
      nl: `Laagseizoen / Hoogseizoen`,
    },
    price: {
      fr: `13,50 € / 17,00 €`,
      en: `€13.50 / €17.00`,
      nl: `13,50 € / 17,00 €`,
    },
    night: {
      fr: `la nuit`,
      en: `per night`,
      nl: `per nacht`,
    },
    row2: {
      fr: `1 Emplacement`,
      en: `1 Pitch`,
      nl: `1 Staanplaatsen`,
    },
    row3: {
      fr: `2 Adultes`,
      en: `2 Adults`,
      nl: `2 Volwassenen`,
    },
  };
  const plan2 = {
    row1: {
      fr: `Forfait Confort`,
      en: `Comfort Package`,
      nl: `Comfortpakket`,
    },
    season: {
      fr: `Basse saison / Haute saison`,
      en: `Low season / High season`,
      nl: `Laagseizoen / Hoogseizoen`,
    },
    price: {
      fr: `16,50 € / 20,00 €`,
      en: `€16.50 / €20.00`,
      nl: `16,50 € / 20,00 €`,
    },
    night: {
      fr: `la nuit`,
      en: `per night`,
      nl: `per nacht`,
    },
    row2: {
      fr: `1 Forfait Basique`,
      en: `1 Basic Package`,
      nl: `1 Basispakket`,
    },
    row3: {
      fr: `Électricité 10A`,
      en: `Electricity 10A`,
      nl: `Elektriciteit 10A`,
    },
  };

  const plans = [
    {
      title: plan1.row1[lang],
      season: plan1.season[lang],
      price: plan1.price[lang],
      night: plan1.night[lang],
      row2: plan1.row2[lang],
      row3: plan1.row3[lang],
    },
    {
      title: plan2.row1[lang],
      season: plan2.season[lang],
      price: plan2.price[lang],
      night: plan2.night[lang],
      row2: plan2.row2[lang],
      row3: plan2.row3[lang],
    },
  ];

  const mobilhommes = {
    fr: `Partie Locative`,
    en: `Rental`,
    nl: `Verhuur`,
  };
  const taxTitle = {
    fr: `Taxe de séjour`,
    en: `Tourist tax`,
    nl: `Toeristenbelasting`,
  };
  const taxSubtxt = {
    fr: `La taxe de séjour s'appliquant pour les personnes de plus de 18 ans est de 0,22 € par personne et par nuit`,
    en: `Persons older than 18 y.o. are charged €0.22 per night`,
    nl: `Personen ouder dan 18 jaar betalen € 0,22 per nacht`,
  };

  const reservation = {
    fr: `Réservation`,
    en: `Booking`,
    nl: `Reserveringen`,
  };
  const btn = {
    fr: `CONTINUER`,
    en: `GET STARTED!`,
    nl: `GA AAN DE SLAG!`,
  };
  return (
    <div className="prices">
      <h2 className="prices__title">{title[lang]}</h2>
      <hr className="prices__hr" />
      <div className="prices__pitches">
        <h3 className="prices__pitches__title">{plan[lang]}</h3>
        <p className="prices__pitches__date">{date1[lang]}</p>
        <p className="prices__pitches__date">{date2[lang]}</p>
        <div className="prices__pitches__plans">
          {plans &&
            plans.map((plan, index) => {
              return <Plan key={index} {...plan} />;
            })}
        </div>
        <div className="prices__pitches__supp">
          <Supp lang={lang} />
        </div>
        <div className="prices__pitches__acsi">
          <Acsi lang={lang} />
        </div>
      </div>
      <div className="prices__mobilhomes">
        <h3 className="prices__mobilhomes__title">{mobilhommes[lang]}</h3>
        <div className="prices__mobilhomes__rental">
          <Rental lang={lang} />
        </div>
        <div className="prices__mobilhomes__curist">
          <Curist lang={lang} />
        </div>
        <div className="prices__mobilhomes__tax">
          <h3 className="prices__mobilhomes__tax__title">{taxTitle[lang]}</h3>
          <p className="prices__mobilhomes__tax__subtxt">{taxSubtxt[lang]}</p>
        </div>
      </div>
      <div className="prices__banner">
        <h3 className="prices__banner__txt">{reservation[lang]}</h3>
        <NavLink to="/booking">
          <button className="prices__banner__btn">{btn[lang]}</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Prices;
