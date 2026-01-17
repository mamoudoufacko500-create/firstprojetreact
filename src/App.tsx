

function App() {
 

  return (
    <body className="">
      <section className="bg-[url('ph1.jpg')] bg-cover bg-center h-screen opacity-90">
    <nav className="flex justify-between px-20 py-4 items-center ">
      <div className="w-15">
        <img src="logo-white.svg" alt="" />
      </div>
      <ul className="flex items-center gap-10 text-white font-semibold">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
        <li className="border-2 p-2 "><a href="#"></a>202-555-0188</li>
      </ul>
    </nav>
    <section className="mt-8 text-center py-10 text-white space-y-7 flex flex-col items-center ">
       <div>
         <h1 className="font-bold text-4xl">Nous aimons tous <br /><span className="text-8xl">Nature</span></h1>
         <p >Regarde profondément dans la nature, et tu comprendras <br /> tout mieux.</p>
        </div>
        <button className="bg-yellow-300 rounded-xl px-5 py-3 text-gray-500 text-sm"><a href="#">Commencez</a></button>
    </section>
    </section>
    <section className="my-5">
      <div className="flex flex-col items-center">
      <h2 className="text-3xl  text-center p-4">Nos service</h2>
      <div className="w-16 h-1 bg-yellow-300"/>
     </div>
      <section className="grid grid-cols-3 px-20 gap-10 py-10">
        <div className="space-y-4">
          <img src="service-1.jpg" alt=""  />
          <h3 className="text-2xl">Conception web</h3>
          <p>Concentrez-vous sur la manière dont vous <br /> pouvez aider et bénéficier à votre <br /> utilisateur. Utilisez des mots simples pour <br /> ne pas embrouiller les gens.</p>
        </div>
        <div className="space-y-4">
          <img src="service-2.jpg" alt="" />
          <h3 className="text-2xl">Design graphique</h3>
            <p>Concentrez-vous sur la manière dont vous <br /> pouvez aider et bénéficier à votre <br /> utilisateur. Utilisez des mots simples pour <br /> ne pas embrouiller les gens.</p>
        </div>
        <div className="space-y-4">
          <img src="service-3.jpg" alt="" className="w-2xl" />
          <h3 className="text-2xl">Création de contenu</h3>
             <p>Concentrez-vous sur la manière dont vous <br /> pouvez aider et bénéficier à votre <br /> utilisateur. Utilisez des mots simples pour <br /> ne pas embrouiller les gens.</p>
        </div>
      </section>
    </section>
    <section className="flex flex-col items-center my-5 bg-gray-200 p-20 space-y-3">
      <p className="font-display text-4xl p-10 text-center">« Originales et dotées d’une compréhension innée <br /> des besoins de leurs clients, l’équipe de Love <br /> Nature est toujours un plaisir de travailler. »</p>
      <img src="avatar_on_home.png" alt="" className="w-10 " />
      <h3>Jane Miller</h3>
    </section>
    <section className="grid grid-cols-2 px-20 py-15 gap-50">
      <div className="flex flex-col justify-between">
        <p className="text-sm">QUI SOMMES-NOUS</p>
        <h1 className="text-3xl ">Dites aux visiteurs du site <br /> qui vous êtes et pourquoi ils <br /> devraient choisir votre <br /> entreprise.</h1>
        <p>Car lorsqu’un visiteur arrive pour la première fois sur <br /> votre site web, vous êtes un inconnu pour lui. Ils <br /> doivent apprendre à vous connaître pour vouloir lire <br /> vos articles de blog, s’abonner à votre newsletter par <br /> e-mail ou acheter ce que vous vendez.</p>
        <button className=" border px-3 py-3 mr-70 text-center"><a href="#">En savoir plus</a></button>
      </div>
      <img src="leaf.jpg" alt="" className="w-100" />
    </section>
    <section className=" text-center py-10 text-white space-y-7 flex flex-col  items-center bg-[url('PH2.jpg')] bg-center bg-cover h-100">
       <div className="space-y-7 mt-10 ">
         <h1 className="font-bold text-5xl">DES QUESTIONS ?</h1>
         <p >Que vous soyez curieux des fonctionnalités, d’un essai <br /> gratuit ou même de la presse, nous sommes là pour <br /> répondre à toutes vos questions.</p>
        </div>
        <button className="bg-yellow-300 rounded-xl px-5 py-3 text-gray-500 text-sm"><a href="#">Parlons maintenant</a></button>
    </section>
    <footer className="flex justify-between px-20 py-7 items-center">
        <ul className="flex items-center gap-5 ">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
      <img src="logo-green.svg" alt="" className="w-15 mr-15"/>
      <h1 >Love Nature par Tyler Moore</h1>
    </footer>
    </body>
  )
}

export default App
