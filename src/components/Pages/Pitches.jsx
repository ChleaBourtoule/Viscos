import React from "react";
import Carousel from "nuka-carousel";
import CardPitches from "../CardPitches";

import districtA from "../../assets/district_a.jpg";
import districtB from "../../assets/district_b.jpg";
import tents from "../../assets/tents.jpg";
import mobilhomes from "../../assets/mobilhomes.jpg";
import inside from "../../assets/inside.jpg";
import mobilhomes2 from "../../assets/mh.jpg";
import pitches1 from "../../assets/pitches1.jpg";
import pitches2 from "../../assets/pitches2.jpg";
import tents2 from "../../assets/tent.jpg";

const Pitches = ({ lang }) => {
  const title = {
    fr: `Emplacements`,
    en: `Pitches`,
    nl: `Staanplaatsen`,
  };
  const mountain = {
    fr: `Le Viscos est un écrin de verdure surplombant la vallée des gaves dans un cadre calme et ombragé. Reposez-vous en immersion dans la nature avec les montagnes comme panorama.`,
    en: `Le Viscos is located in a sanctuary of greenery that overhang La Vallée des Gaves (The Torrents' Valley) in a very calm and shady place. Refresh yourself and get back in touch with nature.`,
    nl: `Le Viscos is gelegen in een heiligdom van groen dat uitsteekt over La Vallée des Gaves (de vallei van de Torrents) op een zeer rustige en schaduwrijke plek. Verfris jezelf en kom weer in contact met de natuur.`,
  };
  const tent = {
    fr: `Le camping comporte soixante neuf emplacements spacieux et ombragés destinés aux tentes, caravanes et camping-cars disposant pour la pluspart d'une alimentation électrique. Les vehicules peuvent être stationnés sur les emplacements et les annimaux sont autorisés.`,
    en: `With sixty nine shady spacious electrified pitches we have plenty of place for your tent, caravan, or camper van. Vehicules may be parked on the pitches and animals are allowed.`,
    nl: `Met negenenzestig schaduwrijke ruime geëlektrificeerde plaatsen hebben we genoeg plaats voor uw tent, caravan of camper. Voertuigen mogen op de staanplaatsen geparkeerd worden en dieren zijn toegestaan.`,
  };
  const cabin = {
    fr: `Le domaine est doté de onze mobil-homes espacés situés dans une zone arborée proche des Thermes de Beaucens. Une zone est prévue pour faire des grillades.`,
    en: `The domain is endowed with eleven spaced mobile homes situated in a tree-filled area near the thermal baths of Beaucens. You will find a dedicated BBQ area near the mobile homes`,
    nl: `Het domein is begiftigd met elf stacaravans op een afstand van elkaar, gelegen in een met bomen begroeid gebied in de buurt van de thermale baden van Beaucens. In de buurt van de stacaravans vindt u een speciale barbecueplek`,
  };
  const interior = {
    fr: `Nos locations comprenant deux chambres sont prévues pour quatre personnes. Elles disposent d'une cuisine, de toilettes, d'une salle d'eau et d'une terrasse privative ainsi que d'un emplacement de stationnement.`,
    en: `Our two rooms mobile homes can accommodate four persons. They comprise a kitchen, toilets, a bathroom, a private padeo, and a parking space.`,
    nl: `Onze stacaravans met twee kamers bieden plaats aan vier personen. Ze omvatten een keuken, toiletten, een badkamer, een eigen padeo en een parkeerplaats.`,
  };
  return (
    <div className="pitches">
      {/* CAROUSEL */}
      <Carousel
        dragging
        autoplay
        heightMode="first"
        className="pitches__carousel"
      >
        <img src={districtA} />
        <img src={districtB} />
        <img src={pitches1} />
        <img src={pitches2} />
        <img src={tents2} />
        <img className="pitches__carousel__img" src={tents} />
        <img src={mobilhomes} />
        <img src={mobilhomes2} />
        <img src={inside} />
      </Carousel>
      {/* CONTAINER CONTENT */}
      <div className="pitches__container">
        <h2 className="pitches__container__title">{title[lang]}</h2>
        <hr className="pitches__container__hr" />
        <div className="pitches__container__content">
          <div className="pitches__container__content__div">
            <CardPitches
              icon="mountain"
              subtxt={mountain}
              lang={lang}
              color="coral"
            />
            <CardPitches icon="tent" subtxt={tent} lang={lang} color="light" />
          </div>
          <div className="pitches__container__content__divsecond">
            <CardPitches
              icon="cabin"
              subtxt={cabin}
              lang={lang}
              color="light"
            />
            <CardPitches
              icon="room"
              subtxt={interior}
              lang={lang}
              color="coral"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pitches;
