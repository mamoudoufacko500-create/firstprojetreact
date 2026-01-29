import { BiSolidQuoteAltLeft } from "react-icons/bi";
import React from "react";

export default function Testimonialsection() {
  return (
    <section className="flex flex-col items-center my-5 bg-gray-200 p-20 w-full space-y-3 max-h-[150vh]">
       <BiSolidQuoteAltLeft className="text-7xl" />
      <p className="font-display text-4xl p-10 text-center">
        « Originales et dotées d’une compréhension innée <br /> des besoins de
        leurs clients, l’équipe de Love <br /> Nature est toujours un plaisir de
        travailler. »
      </p>
      <img src="avatar_on_home.png" alt="" className="w-10 " />
      <h3>Jane Miller</h3>
    </section>
  );
}
