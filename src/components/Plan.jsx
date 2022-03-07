import React from "react";

const Plan = ({ title, season, price, night, row2, row3 }) => {
  return (
    <div className="plan">
      <div className="plan__title">
        <p>{title}</p>
      </div>
      <div className="plan__content">
        <p>{season}</p>
        <p className="plan__content__price">{price}</p>
        <p>{night}</p>
      </div>
      <div className="plan__row2">
        <p>{row2}</p>
      </div>
      <div className="plan__row3">
        <p>{row3}</p>
      </div>
    </div>
  );
};

export default Plan;
