import React from "react";

const Rental = ({ lang }) => {
  const title = {
    fr: `Tarifs locatifs à la semaine par périodes`,
    en: `Prices`,
    nl: `Tarieven`,
  };
  const row1 = {
    time: {
      fr: `15/06/2025 — 28/06/2025`,
      en: `6/15 to 6/28`,
      nl: `van 6/15 tot 6/28`,
    },
    price: {
      fr: `250 €`,
      en: `€250`,
      nl: `250 €`,
    },
  };
  const row2 = {
    time: {
      fr: `28/06/2025 — 05/07/2025`,
      en: `6/28 to 7/05`,
      nl: `van 6/28 tot 7/05`,
    },
    price: {
      fr: `350 €`,
      en: `€350`,
      nl: `350 €`,
    },
  };
  const row3 = {
    time: {
      fr: `05/07/2025 — 16/08/2025`,
      en: `7/05 to 8/16`,
      nl: `van 7/05 tot 8/16`,
    },
    price: {
      fr: `460 €`,
      en: `€460`,
      nl: `460 €`,
    },
  };
  const row4 = {
    time: {
      fr: `16/08/2025 — 23/08/2025`,
      en: `8/16 to 8/23`,
      nl: `van 8/16 tot 8/23`,
    },
    price: {
      fr: `400 €`,
      en: `€400`,
      nl: `400 €`,
    },
  };
  const row5 = {
    time: {
      fr: `23/08/2025 — 13/09/2025`,
      en: `8/23 to 9/13`,
      nl: `van 8/23 tot 9/13`,
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
