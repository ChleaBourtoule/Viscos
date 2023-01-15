import React from "react";

const Rental = ({ lang }) => {
  const title = {
    fr: `Tarifs locatifs à la semaine par périodes`,
    en: `Prices`,
    nl: `Tarieven`,
  };
  const row1 = {
    time: {
      fr: `17/06/2023 — 01/07/2023`,
      en: `6/17 to 7/01`,
      nl: `van 6/17 tot 7/01`,
    },
    price: {
      fr: `250 €`,
      en: `€250`,
      nl: `250 €`,
    },
  };
  const row2 = {
    time: {
      fr: `01/07/2023 — 08/07/2023`,
      en: `7/01 to 7/08`,
      nl: `van 7/01 tot 7/08`,
    },
    price: {
      fr: `350 €`,
      en: `€350`,
      nl: `350 €`,
    },
  };
  const row3 = {
    time: {
      fr: `08/07/2023 — 19/08/2023`,
      en: `7/08 to 8/19`,
      nl: `van 7/08 tot 8/19`,
    },
    price: {
      fr: `460 €`,
      en: `€460`,
      nl: `460 €`,
    },
  };
  const row4 = {
    time: {
      fr: `19/08/2023 — 26/08/2023`,
      en: `8/19 to 8/26`,
      nl: `van 8/19 tot 8/26`,
    },
    price: {
      fr: `400 €`,
      en: `€400`,
      nl: `400 €`,
    },
  };
  const row5 = {
    time: {
      fr: `26/08/2023 — 16/09/2023`,
      en: `8/26 to 9/16`,
      nl: `van 8/26 tot 9/16`,
    },
    price: {
      fr: `250 €`,
      en: `€250`,
      nl: `250 €`,
    },
  };
  return (
    <div className="rental">
      <table>
        <caption>{title[lang]}</caption>
        <tr>
          <td>{row1.time[lang]}</td>
          <td>{row1.price[lang]}</td>
        </tr>
        <tr>
          <td>{row2.time[lang]}</td>
          <td>{row2.price[lang]}</td>
        </tr>
        <tr>
          <td>{row3.time[lang]}</td>
          <td>{row3.price[lang]}</td>
        </tr>
        <tr>
          <td>{row4.time[lang]}</td>
          <td>{row4.price[lang]}</td>
        </tr>
        <tr>
          <td>{row5.time[lang]}</td>
          <td>{row5.price[lang]}</td>
        </tr>
      </table>
    </div>
  );
};

export default Rental;
