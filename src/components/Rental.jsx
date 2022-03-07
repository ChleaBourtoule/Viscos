import React from "react";

const Rental = ({ lang }) => {
  const title = {
    fr: `Tarifs locatifs à la semaine par périodes`,
    en: `Prices`,
    nl: `Tarieven`,
  };
  const row1 = {
    time: {
      fr: `04/06/2022 — 02/06/2022`,
      en: `6/4 to 7/2`,
      nl: `van 5/1 tot 6/19`,
    },
    price: {
      fr: `250 €`,
      en: `€250`,
      nl: `250 €`,
    },
  };
  const row2 = {
    time: {
      fr: `02/07/2022 — 09/07/2022`,
      en: `7/2 to 7/9`,
      nl: `van 6/19 tot 7/10`,
    },
    price: {
      fr: `350 €`,
      en: `€350`,
      nl: `350 €`,
    },
  };
  const row3 = {
    time: {
      fr: `09/07/2022 — 20/08/2022`,
      en: `7/9 to 8/20`,
      nl: `van 7/10 tot 8/14`,
    },
    price: {
      fr: `460 €`,
      en: `€460`,
      nl: `460 €`,
    },
  };
  const row4 = {
    time: {
      fr: `20/08/2022 — 27/08/2022`,
      en: `8/20 to 8/27`,
      nl: `van 8/14 tot 8/21`,
    },
    price: {
      fr: `400 €`,
      en: `€400`,
      nl: `400 €`,
    },
  };
  const row5 = {
    time: {
      fr: `27/08/2022 — 01/10/2022`,
      en: `8/27 to 10/1`,
      nl: `van 8/21 tot 10/2`,
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
