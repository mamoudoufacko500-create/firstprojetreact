
const menu = [
  {title:"Accueil", link:"#"},
  {title:"A propos", link:"#"},
  {title:"Service", link:"#"},
  {title:"Contact", link:"#"},
];

const descriptions = [
  {Image:"service-1.jpg",sous_titre:"Conception web", description :"Concentrez-vous sur la manière dont vous pouvez aider et bénéficier à votre utilisateur. Utilisez des mots simples pour  ne pas embrouiller les gens."},
  {Image:"service-2.jpg",sous_titre:"Design graphique", description :"Concentrez-vous sur la manière dont vous pouvez aider et bénéficier à votre utilisateur. Utilisez des mots simples pour  ne pas embrouiller les gens."},
  {Image:"service-3.jpg",sous_titre:"Création de contenu", description :"Concentrez-vous sur la manière dont vous pouvez aider et bénéficier à votre utilisateur. Utilisez des mots simples pour  ne pas embrouiller les gens."},
];

function App() {
 

  return (
    <body className="">
      <section className="bg-[url('ph1.jpg')] bg-cover bg-center max-h-[150vh] mx-auto ">
       <div className="bg-black/30 backdrop-grayscale-0">
      <nav className="flex justify-between px-20 py-4 items-center ">
      <div className="w-15">
        <img src="logo-white.svg" alt="" />
      </div>
      <div className="hidden md:block md:flex md:gap-10 ">        
      <ul className="flex items-center gap-10 text-white font-semibold ">
       
        {menu.map((item ,index) => ( 
           <li key={index}>
            <a href={item.link} className="hover:text-yellow-300 transition" >{item.title}</a>
            </li>))}
            
      </ul>
      <button className="border-2 p-2 text-white cursor-pointer">202-555-0188</button>
      </div>
        <div className="flex items-center text-white md:hidden ">
          <button id="burger-btn" className=" focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2"
                 viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
    </nav>
    <section className="mt-8 text-center py-10 text-white space-y-7 flex flex-col items-center ">
       <div>
         <h1 className="font-bold text-4xl">Nous aimons tous <br /><span className="text-8xl">Nature</span></h1>
         <p>Regarde profondément dans la nature, et tu comprendras <br /> tout mieux.</p>
        </div>
        <button className="bg-yellow-300 rounded-xl px-5 py-3 text-gray-500 text-sm"><a href="#">Commencez</a></button>
    </section>
      </div>
    </section>
    <section className="my-5 max-h-[150vh]">
      <div className="flex flex-col items-center">
      <h2 className="text-3xl  text-center p-4">Nos service</h2>
      <div className="w-16 h-1 bg-yellow-300"/>
     </div>
      <section className=" grid  grid-cols-3 px-20 gap-10 py-10 ">

        {descriptions.map((item ,index ) => (   <div key={index} className="space-y-4">
          <img src={item.Image} alt={item.sous_titre} className="w-2xl" />
          <h3 className="text-2xl">{item.sous_titre}</h3>
             <p>{item.description}</p>
        </div>))}

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
    <footer className="flex justify-between px-20 py-7 items-center ">
        <ul className="flex items-center gap-5 w-1/3">
        {menu.map((item ,index) => ( 
           <li key={index}>
            <a href={item.link} className="hover:text-yellow-300 transition" >{item.title}</a>
            </li>))}
      </ul>
      <img src="logo-green.svg" alt="" className=" size-14 w-1/3"/>
      <h1 className="w-1/3 text-end" >Love Nature par Tyler Moore</h1>
    </footer>
    </body>
  )
}

export default App
