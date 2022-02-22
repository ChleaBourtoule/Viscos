import React from "react";
import squirrel from "../assets/squirrel.png";
import { FaPhoneAlt } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

const Contact = ({ lang }) => {
  const text = {
    fr: `Vous désirez de plus amples renseignements ? N'hésitez pas à nous appeler ou à nous laisser un mail, nous vous répondrons le plus tôt possible !`,
    en: `Do you need further information? Call us or send us an email, we will get back to you as soon as possible!`,
    nl: `Wilt u meer informatie? Bel ons of stuur ons een e-mail en wij nemen zo snel mogelijk contact met u op!`,
  };
  return (
    <div className="contact">
      <img className="contact__squirrel" src={squirrel} alt="squirrel" />
      <h1 className="contact__title">Contact</h1>
      <hr className="contact__hr" />
      <h4 className="contact__text">{text[lang]}</h4>
      <div className="contact__ways">
        <div className="contact__ways__phone">
          <FaPhoneAlt className="contact__ways__phone__icon" />
          <h4 className="contact__ways__phone__nb">05 62 97 05 45</h4>
        </div>
        <div className="contact__ways__email">
          <GrMail className="contact__ways__email__icon" />
          <h4 className="contact__ways__email__address">
            <a href="mailto:fr.domaine.viscos.co@gmail.com">
              fr.domaine.viscos.co@gmail.com
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
