import React from "react";

const Curist = ({ lang }) => {
  const curist = {
    title: {
      fr: `Forfait cures`,
      en: `Therapy Package`,
      nl: `Therapiepakket`,
    },
    line1: {
      fr: `Forfait pour deux personnes pendant trois semaines`,
      en: `Package for two persons during three weeks`,
      nl: `Pakket voor twee personen gedurende drie weken`,
    },
    line2: {
      fr: `550 €`,
      en: `€550`,
      nl: `550 €`,
    },
    line3: {
      fr: `Personne supplémentaire`,
      en: `Extra person`,
      nl: `Extra persoon`,
    },
    line4: {
      fr: `20 € par nuit`,
      en: `€20 per night`,
      nl: `20 € per nacht`,
    },
  };
  return (
    <div className="curist">
      <table>
        <caption>{curist.title[lang]}</caption>
        <tr>
          <td>{curist.line1[lang]}</td>
          <td>{curist.line2[lang]}</td>
        </tr>
        <tr>
          <td>{curist.line3[lang]}</td>
          <td>{curist.line4[lang]}</td>
        </tr>
      </table>
    </div>
  );
};

export default Curist;
