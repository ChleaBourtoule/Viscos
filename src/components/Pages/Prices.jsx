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
    fr: `Basse saison : du 15/06/2025 au 05/07/2025 et du 16/08/2025 au 15/09/2025.`,
    en: `Low season: 6/15/2025 — 7/05/2025 and 8/16/2025 — 9/15/2025.`,
    nl: `Laagseizoen: 6/15/2025 — 7/05/2025 en 8/16/2025 — 9/15/2025.`,
  };
  const date2 = {
    fr: `Haute saison : du 05/07/2025 au 16/08/2025.`,
    en: `High season: 7/05/2025 — 8/16/2025.`,
    nl: `Hoogseizoen: 7/05/2025 — 8/16/2025.`,
  };
  const date3 = {
    fr: `Les tarifs ne bougent pas en 2025 !`,
    en: `Prices do not change in 2025 !`,
    nl: `Prijzen veranderen niet in 2025 !`,
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
      fr: `13,50 € / 16,50 €`,
      en: `€13.50 / €16.50`,
      nl: `13,50 € / 16,50 €`,
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
      fr: `17,50 € / 20,50 €`,
      en: `€17.50 / €20.50`,
      nl: `17,50 € / 20,50 €`,
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
    fr: `La taxe de séjour s'appliquant pour les personnes de plus de 18 ans est de 0,29 € par personne et par nuit`,
    en: `Persons older than 18 y.o. are charged €0.29 per night`,
    nl: `Personen ouder dan 18 jaar betalen € 0,29 per nacht`,
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
        <p className="prices__pitches__date__orange">{date3[lang]}</p>
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
        <div id="cure" className="prices__mobilhomes__curist">
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
