import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const Priceoptions = () => {
  const priceOpions = [
    {
      id: 1,
      name: "Basic Membership",
      type: "membership",
      price: 29.99,
      duration: "monthly",
      features: ["Access to gym equipment", "Locker room access", "Free Wi-Fi"],
    },
    {
      id: 2,
      name: "Standard Membership",
      type: "membership",
      price: 49.99,
      duration: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group classes",
        "Free Wi-Fi",
        "1 free personal training session per month",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      type: "membership",
      price: 79.99,
      duration: "monthly",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group classes",
        "Free Wi-Fi",
        "Unlimited personal training sessions",
        "Access to sauna and spa",
      ],
    },
    {
      id: 4,
      name: "One-Day Pass",
      type: "additional",
      price: 10.0,
      features: ["Access to gym equipment", "Locker room access"],
    },
    {
      id: 5,
      name: "Personal Training Session",
      type: "additional",
      price: 25.0,
      features: ["One-on-one training session with a certified trainer"],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="tex2xl">Best Prices</h2>
      <div className="grid md:grid-cols-3 gap-5">
        {priceOpions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default Priceoptions;
