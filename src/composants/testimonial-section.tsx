import { LuStepBack } from "react-icons/lu";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { LuStepForward } from "react-icons/lu";
import React, { useState } from "react";
import { citations } from "../data/data";

export default function Testimonialsection() {

   const [index, setIndex] = useState(0);

    const handleClick = ()  => {
    const newIndex = index + 1;
    setIndex(newIndex); 
    console.log("index:", index);
  }

   const handleClicks = ()  => {
    const newIndex = index - 1;
    setIndex(newIndex); 
    console.log("index:", index);
  }

   const citation = citations[index];

  return (
  <div className=" flex items-center justify-center my-5 bg-gray-200 p-20 w-full space-y-3 max-h-[150vh]">
    <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer">< LuStepBack onClick={handleClick} /></button>
    <section className="flex flex-col items-center ">
       <BiSolidQuoteAltLeft className="text-7xl" />
      <p className="font-display text-4xl p-10 text-center">
       {citation.texte}
      </p>
      <img   src={citation.photo}
        alt="" className="w-10 " />
      <h3>{citation.auteur}</h3>
    </section>
    <button className="bg-black text-white rounded-full px-4 py-2 cursor-pointer"><LuStepForward onClick={handleClicks} /></button>
  </div>
  );
}
