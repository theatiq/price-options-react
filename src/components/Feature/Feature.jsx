import React from "react";
import { TiTick } from "react-icons/ti";

const Feature = ({ feature }) => {
  return (
    <div>
      <p className="flex items-center"> <TiTick />{feature}</p>
    </div>
  );
};

export default Feature;
