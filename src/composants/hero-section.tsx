import React from 'react'
import { menu } from '../data/data'
import UserButton from './User-Button'

export default function Herosection() {
  return (
                   <section className="bg-[url('ph1.jpg')] bg-cover bg-center max-h-[150vh] mx-auto ">
                    <div className="bg-black/30 backdrop-grayscale-0">
                   <nav className="flex justify-between px-20 py-4 items-center ">
                   <div className="w-15">
                     <img src="logo-white.svg" alt="" />
                   </div>
                   <div className="hidden  md:flex md:gap-10 ">        
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
                    <UserButton text='Commencer' />
                 </section>
                   </div>
                 </section>
  )
}
