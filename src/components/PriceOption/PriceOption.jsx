import React from "react";
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";
const PriceOption = ({ option }) => {
  const { price, name, features } = option;
  return (
    <div className="bg-blue-300 rounded-lg p-5 flex flex-col">
      <h2>
        <span className="text-5xl">{price}</span>
        <span className="text-2xl">/Per Month</span>
      </h2>
      <h4 className="text-3xl">{name}</h4>
      <div className="ml-5 flex-grow">
        {features.map((f) => (
          <Feature feature={f}></Feature>
        ))}
      </div>
      <button className="w-full bg-green-500 hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};
export default PriceOption;
