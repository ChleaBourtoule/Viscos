import React from "react";

const Acsi = ({ lang }) => {
  const acsi = {
    title: {
      fr: `Forfait carte ACSI`,
      en: `ACSI Card Package`,
      nl: `ACSI-kaartpakket`,
    },
    row1: {
      fr: `Forfait pour un emplacement pour deux personnes avec électricité`,
      en: `One pitch, two persons, electricity 10A`,
      nl: `Eén staanplaats, twee personen, elektriciteit 10A`,
    },
    row2: {
      fr: `14,00 €`,
      en: `€14.00`,
      nl: `14,00 €`,
    },
  };
  return (
    <div className="acsi">
      <table>
        <caption>{acsi.title[lang]}</caption>
        <tr>
          <td>{acsi.row1[lang]}</td>
          <td className="price">{acsi.row2[lang]}</td>
        </tr>
      </table>
    </div>
  );
};

export default Acsi;
