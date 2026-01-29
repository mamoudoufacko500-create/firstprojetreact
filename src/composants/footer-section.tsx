import React from "react";
import { menu } from "../data/data";

export default function Footersection() {
  return (
    <footer className="flex flex-col space-y-4 md:justify-between md:flex-row px-20 py-9 items-center max-w-7xl mx-auto ">
      <ul className=" hidden md:flex items-center gap-5 md:w-1/3 ">
        {menu.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="hover:text-yellow-300 transition">
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      <img src="logo-green.svg" alt="" className=" size-14 md:w-1/3" />
      <h1 className="md:w-1/3 text-end">Love Nature par Tyler Moore</h1>
    </footer>
  );
}
