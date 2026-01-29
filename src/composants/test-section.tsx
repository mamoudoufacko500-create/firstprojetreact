import React from "react";
import { travel } from "../data/data";

export default function Testsection() {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-semibold ">Manderine vous accompagne</h2>
      <p className="mt-10">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At recusandae
        tempore maiores harum molestiae soluta debitis error itaque. Alias
        doloremque vel dolor voluptas provident sunt quisquam qui labore quidem
        voluptatum?
      </p>
      <div className="flex items-center justify-center my-10">
        {travel.map((item, index) => (
          <div
            key={index}
            className={`flex items-center justify-center flex-col  border border-amber-700 ${item.color} p-4 space-y-3`}
          >
            <h3 className="text-5xl">{item.title}</h3>
            <h4>{item.description}</h4>
            <div className={"bg-white size-8"} />
          </div>
        ))}
      </div>
    </div>
  );
}
