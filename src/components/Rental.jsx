import React from "react";

const Rental = ({ lang }) => {
  const title = {
    fr: `Tarifs locatifs à la semaine par périodes`,
    en: `Prices`,
    nl: `Tarieven`,
  };
  const row1 = {
    time: {
      fr: `11/06/2022 — 02/06/2022`,
      en: `06/11 to 07/02`,
      nl: `van 11/06 tot 02/07`,
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
      en: `07/02 to 07/09`,
      nl: `van 02/07 tot 09/07`,
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
      en: `07/09 to 08/20`,
      nl: `van 09/07 tot 20/08`,
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
      en: `08/20 to 08/27`,
      nl: `van 20/08 tot 27/08`,
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
      en: `08/27 to 10/01`,
      nl: `van 27/08 tot 01/10`,
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
