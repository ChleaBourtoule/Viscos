import React from "react";

const Booking = ({ lang }) => {
  const title = {
    fr: `Réservation`,
    en: `Booking`,
    nl: `Boeking`,
  };
  const download = {
    fr: `Documents à télécharger`,
    en: `Documents to download`,
    nl: `Documenten om te downloaden`,
  };
  const linkMH = {
    fr: `Contrat location`,
    en: `Rental Contract (in French)`,
    nl: `Huurcontract (in het Frans)`,
  };
  const linkC = {
    fr: `Contrat emplacement camping`,
    en: `Pitch Contract (in French)`,
    nl: `Staanplaatscontract (in het Frans)`,
  };
  const titleForm = {
    fr: `Demande de réservation`,
    en: `Booking application`,
    nl: `Boekingstoepassing`,
  };

  const type = [
    {
      fr: "Mobil-home",
      en: "Mobil-home",
      nl: "Stacaravan",
    },
    {
      fr: "Emplacement avec électricité",
      en: "Pitch with electricity",
      nl: "Staanplaats met elektriciteit",
    },
    {
      fr: "Emplacement sans électricité",
      en: "Pitch without electricity",
      nl: "Staanplaats zonder elektriciteit",
    },
  ];
  const country = [
    {
      fr: "France",
      en: "France",
      nl: "Frankrijk",
      value: "fr",
    },
    {
      fr: "Espagne",
      en: "Spain",
      nl: "Spanje",
      value: "es",
    },
    {
      fr: "Pays-Bas",
      en: "Holland",
      nl: "Holland",
      value: "nl",
    },
    {
      fr: "Royaume-Uni",
      en: "United Kingdom",
      nl: "Verenigd Koninkrijk",
      value: "uk",
    },
    {
      fr: "Allemange",
      en: "Germany",
      nl: "Duitsland",
      value: "de",
    },
    {
      fr: "Belgique",
      en: "Belgium",
      nl: "België",
      value: "be",
    },
    {
      fr: "Italie",
      en: "Italy",
      nl: "Italië",
      value: "it",
    },
    {
      fr: "Suisse",
      en: "Swiss",
      nl: "Zwitsers",
      value: "ch",
    },
    {
      fr: "Autre...",
      en: "Other...",
      nl: "Ander...",
      value: "no",
    },
  ];

  const form = {
    name: {
      fr: `Nom:`,
      en: `Full name:`,
      nl: `Naam:`,
    },
    phone: {
      fr: `Téléphone :`,
      en: `Phone:`,
      nl: `Telefoon`,
    },
    type: {
      fr: `Type d'hébergement :`,
      en: `Accomodation type:`,
      nl: `Type accommodatie:`,
    },
    country: {
      fr: `Votre pays :`,
      en: `Country:`,
      nl: `Land:`,
    },
    arrival: {
      fr: `Date d'arrivée :`,
      en: `Arrival date:`,
      nl: `Aankomstdatum::`,
    },
    departure: {
      fr: `Date de départ :`,
      en: `Departure date:`,
      nl: `Vertrekdatum:`,
    },
    email: {
      fr: `Addresse mail :`,
      en: `E-mail Address:`,
      nl: `E-mail Addres:`,
    },
    object: {
      fr: `Objet :`,
      en: `Subject:`,
      nl: `Onderwerp:`,
    },
    message: {
      fr: `Message :`,
      en: `Message:`,
      nl: `Bericht:`,
    },
    btn: {
      fr: `ENVOYER`,
      en: `SEND`,
      nl: `STUREN`,
    },
  };
  return (
    <div className="booking">
      <h2 className="booking__title">{title[lang]}</h2>
      <hr className="booking__hr" />
      <div className="booking__download">
        <h3 className="booking__download__title">{download[lang]}</h3>
        <p className="booking__download__mobilhomes">{linkMH[lang]}</p>
        <p className="booking__download__camping">{linkC[lang]}</p>
      </div>
      <h3 className="booking__formtitle">{titleForm[lang]}</h3>
      <div className="booking__content">
        <form
          className="booking__content__form"
          name="sentMessage"
          id="contactForm"
          method="post"
          action="envoi.php"
        >
          <div className="booking__content__form__div">
            <label>{form.name[lang]}</label>
            <input
              type="text"
              className="booking__content__form__div__input"
              id="name"
              name="name"
              required
              data-validation-required-message="Merci de renseigner votre nom."
            />
          </div>
          <div className="booking__content__form__div">
            <label>{form.phone[lang]}</label>
            <input
              type="tel"
              className="booking__content__form__div__input"
              id="phone"
              name="phone"
              required
              data-validation-required-message="Merci de renseigner votre numéro de téléphone."
            />
          </div>
          <div className="booking__content__form__container">
            <div className="booking__content__form__container__div">
              <label>{form.type[lang]}</label>
              <select
                name="type"
                id="type"
                className="booking__content__form__container__div__select"
              >
                {type.map((type, index) => {
                  return (
                    <option key={index} value="mobil-home">
                      {type[lang]}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="booking__content__form__container__div">
              <label>{form.country[lang]}</label>
              <select
                name="country"
                id="country"
                className="booking__content__form__container__div__select"
              >
                {country.map((country, index) => {
                  return (
                    <option key={index} value={country.value}>
                      {country[lang]}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="booking__content__form__container__div">
              <label>{form.arrival[lang]}</label>
              <input
                className="booking__content__form__container__div__input"
                type="date"
                name="arrival"
                id="arrival"
                size={30}
                required
                data-validation-required-message="Merci de renseigner votre date d'arrivée'."
              />
            </div>
            <div className="booking__content__form__container__div">
              <label>{form.departure[lang]}</label>
              <input
                className="booking__content__form__container__div__input"
                type="date"
                name="departure"
                id="departure"
                size={30}
                required
                data-validation-required-message="Merci de renseigner votre date de départ."
              />
            </div>
          </div>
          <div className="booking__content__form__div">
            <label>{form.email[lang]}</label>
            <input
              className="booking__content__form__div__input"
              type="email"
              id="email"
              name="email"
              required
              data-validation-required-message="Merci de renseigner votre adresse mail."
            />
          </div>
          <div className="booking__content__form__div">
            <label>{form.object[lang]}</label>
            <input
              className="booking__content__form__div__input"
              type="text"
              id="subject"
              name="subject"
              required
              data-validation-required-message="Merci de renseigner l'objet de votre message'."
            />
          </div>
          <div className="booking__content__form__div">
            <label>{form.message[lang]}</label>
            <textarea
              className="booking__content__form__div__textarea"
              id="message"
              name="message"
              required
              data-validation-required-message="Tapez ici votre message."
              maxLength="999"
            ></textarea>
          </div>
          <button
            type="submit"
            className="booking__content__form__btn"
            id="sendMessageButton"
          >
            {form.btn[lang]}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
