import React from "react";
import UserButton from "./User-Button";

export default function Discutionsection() {
  return (
    <section className=" text-center py-10 text-white space-y-7 flex flex-col  items-center bg-[url('PH2.jpg')] bg-center bg-cover h-100">
      <div className="space-y-7 mt-10 ">
        <h1 className="font-bold text-5xl">DES QUESTIONS ?</h1>
        <p>
          Que vous soyez curieux des fonctionnalités, d’un essai <br /> gratuit
          ou même de la presse, nous sommes là pour <br /> répondre à toutes vos
          questions.
        </p>
      </div>
       <UserButton text='Parlons-en maintenant' />
    </section>
  );
}
