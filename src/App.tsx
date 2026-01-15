

function App() {
 

  return (
    <body className="">
      <section className="bg-[url('service-2.jpg')] bg-cover bg-center h-screen">
    <nav className="flex justify-between px-10 py-4 items-center ">
      <div className="w-15">
        <img src="logo-white.svg" alt="" />
      </div>
      <ul className="flex gap-15 text-white font-semibold">
        <li><a href="#">Accueil</a></li>
        <li><a href="#">A propos</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact</a></li>
        <li className="border-2 p-2  "><a href="#"></a>202-555-0188</li>
      </ul>
    </nav>
    <section className="text-center py-10 text-white space-y-3 ">
       <div>
         <h1 className="font-bold text-4xl">Nous aimons tous <br /><span className="text-8xl">Nature</span></h1>
         <p >Regarde profondément dans la nature, et tu comprendras <br /> tout mieux.</p>
        </div>
        <button className="bg-yellow-200 px-4 py-2 text-gray-500"><a href="#">Commencez</a></button>
    </section>
             {/* <div className="flex items-center md:hidden ">
          <button id="burger-btn" className=" focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div> */}
    </section>
    <section className="my-5">
      <h2 className="text-3xl border-b-yellow-300 text-center border-b-5 p-4">Nos services</h2>
      <section className="grid grid-cols-3 m-10 gap-10 py-10">
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
      <p className="text-4xl p-10 text-center">« Originales et dotées d’une compréhension innée <br /> des besoins de leurs clients, l’équipe de Love <br /> Nature est toujours un plaisir de travailler. »</p>
      <img src="avatar_on_home.png" alt="" className="w-10 " />
      <h3>Jane Miller</h3>
    </section>
    </body>
  )
}

export default App
