import React from "react";

const Supp = ({ lang }) => {
  const supp = {
    fr: `Détails`,
    en: `Details (per night)`,
    nl: `Details (per nacht)`,
  };
  const low = {
    fr: `Basse saison`,
    en: `Low season`,
    nl: `Laagseizoen`,
  };
  const high = {
    fr: `Haute saison`,
    en: `High season`,
    nl: `Hoogseizoen`,
  };

  const pitch = {
    title: {
      fr: `Emplacement`,
      en: `Pitch`,
      nl: `Staanplaatsen`,
    },
    low: {
      fr: `4,50 €`,
      en: `€4.50`,
      nl: `4,50 €`,
    },
    high: {
      fr: `5,50 €`,
      en: `	€5.50`,
      nl: `5,50 €`,
    },
  };
  const adult = {
    title: {
      fr: `Adulte`,
      en: `Adult`,
      nl: `Volwassen`,
    },
    low: {
      fr: `4,50 €`,
      en: `€4.50`,
      nl: `4,50 €`,
    },
    high: {
      fr: `5,50 €`,
      en: `€5.50`,
      nl: `5,50 €`,
    },
  };
  const children = {
    title: {
      fr: `Enfant (moins de 7 ans)`,
      en: `Child (under 7 y.o.)`,
      nl: `Kinder (jonger dan 7 jaar)`,
    },
    low: {
      fr: `2,50 €`,
      en: `€2.50`,
      nl: `2,50 €`,
    },
    high: {
      fr: `2,50 €`,
      en: `€2.50`,
      nl: `2,50 €`,
    },
  };
  const animal = {
    title: {
      fr: `Animal`,
      en: `Animal`,
      nl: `Annimal`,
    },
    low: {
      fr: `1,00 €`,
      en: `€1.00`,
      nl: `1,00 €`,
    },
    high: {
      fr: `1,00 €`,
      en: `€1.00`,
      nl: `1,00 €`,
    },
  };
  const elec = {
    title: {
      fr: `Electricité`,
      en: `Electricity`,
      nl: `Elektriciteit`,
    },
    low: {
      fr: `4,00 €`,
      en: `€4.00`,
      nl: `4,00 €`,
    },
    high: {
      fr: `4,00 €`,
      en: `€4.00`,
      nl: `4,00 €`,
    },
  };
  return (
    <div className="supp">
      <table>
        <caption>{supp[lang]}</caption>
        <tr>
          <th></th>
          <th>{low[lang]}</th>
          <th>{high[lang]}</th>
        </tr>
        <tr>
          <td>{pitch.title[lang]}</td>
          <td>{pitch.low[lang]}</td>
          <td>{pitch.high[lang]}</td>
        </tr>
        <tr>
          <td>{adult.title[lang]}</td>
          <td>{adult.low[lang]}</td>
          <td>{adult.high[lang]}</td>
        </tr>
        <tr>
          <td>{children.title[lang]}</td>
          <td>{children.low[lang]}</td>
          <td>{children.high[lang]}</td>
        </tr>
        <tr>
          <td>{animal.title[lang]}</td>
          <td>{animal.low[lang]}</td>
          <td>{animal.high[lang]}</td>
        </tr>
        <tr>
          <td>{elec.title[lang]}</td>
          <td>{elec.low[lang]}</td>
          <td>{elec.high[lang]}</td>
        </tr>
      </table>
    </div>
  );
};

export default Supp;
