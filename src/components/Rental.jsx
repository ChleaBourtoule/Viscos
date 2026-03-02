import React from "react";

const Rental = ({ lang }) => {
  const title = {
    fr: `Tarifs locatifs à la semaine par périodes`,
    en: `Prices`,
    nl: `Tarieven`,
  };
  const row1 = {
    time: {
      fr: `15/06/2025 — 27/06/2025`,
      en: `6/15 to 6/27`,
      nl: `van 6/15 tot 6/27`,
    },
    price: {
      fr: `250 €`,
      en: `€250`,
      nl: `250 €`,
    },
  };
  const row2 = {
    time: {
      fr: `27/06/2025 — 04/07/2025`,
      en: `6/27 to 7/04`,
      nl: `van 6/27 tot 7/04`,
    },
    price: {
      fr: `350 €`,
      en: `€350`,
      nl: `350 €`,
    },
  };
  const row3 = {
    time: {
      fr: `04/07/2025 — 15/08/2025`,
      en: `7/04 to 8/15`,
      nl: `van 7/04 tot 8/15`,
    },
    price: {
      fr: `460 €`,
      en: `€460`,
      nl: `460 €`,
    },
  };
  const row4 = {
    time: {
      fr: `15/08/2025 — 22/08/2025`,
      en: `8/15 to 8/22`,
      nl: `van 8/15 tot 8/22`,
    },
    price: {
      fr: `400 €`,
      en: `€400`,
      nl: `400 €`,
    },
  };
  const row5 = {
    time: {
      fr: `22/08/2025 — 12/09/2025`,
      en: `8/22 to 9/12`,
      nl: `van 8/22 tot 9/12`,
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
