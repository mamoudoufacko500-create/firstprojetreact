import React from "react";

export default function Presentationsection() {
  return (
    <section className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-15 px-20  py-15 max-w-7xl mx-auto ">
      <div className=" space-y-10 ">
        <p className="text-sm">QUI SOMMES-NOUS</p>
        <h1 className="text-3xl ">
          Dites aux visiteurs du site qui vous êtes et pourquoi ils devraient
          choisir votre entreprise.
        </h1>
        <p>
          Car lorsqu’un visiteur arrive pour la première fois sur votre site
          web, vous êtes un inconnu pour lui. Ils doivent apprendre à vous
          connaître pour vouloir lire vos articles de blog, s’abonner à votre
          newsletter par e-mail ou acheter ce que vous vendez.
        </p>
        <button className=" border px-3 py-3 text-center hover:border-yellow-200 hover:bg-gray-500 hover:text-yellow-200">
          <a href="#">En savoir plus</a>
        </button>
      </div>
      <img src="leaf.jpg" alt="" className="w-full h-[80%] object-cover" />
    </section>
  );
}
