import axios from "axios";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, ResponsiveContainer } from "recharts";
import { Audio } from "react-loader-spinner";

const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const fakedata = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        setPhones(fakedata);
        setLoading(false);
        console.log(fakedata);
      });
  }, []);
  return (
    <div>
      {loading && (
        <Audio heigth="100" width="100" color="grey" ariaLabel="loading" />
      )}

      <h2>Phones: {phones.length}</h2>
      <BarChart width={600} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Phones;
