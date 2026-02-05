import React from "react";
import { Services } from "../data/data";

export default function Servicesection() {
  return (
    <section className="my-5 max-w-7xl mx-auto py-15 ">
      <div className="flex flex-col items-center">
        <h2 className="text-3xl  text-center p-4">Nos service</h2>
        <div className="w-16 h-1 bg-yellow-300" />
      </div>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20 gap-10 py-10 ">
        {Services.map((item, index) => (
          <div key={index} className="space-y-4 mt-5 ">
            <img
              src={item.Image}
              alt={item.sous_titre}
              className="w-full h-[70%] object-cover mt-4 "
            />
            <h3 className="text-2xl font-semibold">{item.sous_titre}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>
    </section>
  );
}
