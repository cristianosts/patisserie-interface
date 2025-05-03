"use client" 

import { useState } from "react"
import Image from "next/image"
import Logo from "@/assets/logotp.png"
import 'boxicons/css/boxicons.min.css'


import { Menu } from "./menu"
import { Container } from "./container"
import { style } from "framer-motion/client"

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

    return (
       
        <header className="relative flex items-center w-full h-20 bgheader z-50"> 
            <Container>
            <div className="flex flex-1 items-center justify-between">
                    <div 
                     className="flex items-center gap-14">
                        <Image
                            src={Logo}
                            alt="Logo Image"
                        />

                        <ul className="hidden md:flex items-center gap-12 lg:gap-20">
                            <li>
                               <Menu
                                    name="Home"
                               />
                            </li>
                            <li>
                               <Menu
                                    name="Delícias"
                               />
                            </li>
                            <li>
                               <Menu
                                    name="Orçamentos"
                               />
                            </li>
                            <li>
                               <Menu
                                    name="Contatos"
                               />
                            </li>
                        </ul>

                    </div>
                </div>
                <button className="flex items-center gap-4 text-white font-bold hover: cursor-pointer hover:text-pink-600 h transition-[0.3s] ease-in-out">

                </button>
                <button className="hidden md:flex items-center gap-4 text-white font-bold hover: cursor-pointer hover:text-pink-600 transition-[0.3s] ease-in-out">
                    <i className='bx bx-store  text-4xl'></i>
                    <span className="hover:border-b-2 hover:border-white">Visite-nos</span>
                    
                </button>

                
                <button
                    onClick={toggleMenu}
                    className="md:hidden text-white text-3xl z-50  ">
                    <i className={`bx ${isMenuOpen ? 'bx-x ' : 'bx-menu'}`}></i>
                </button>

                <div className={`absolute left-0 top-0 w-full overflow-hidden glass text-white md:hidden flex flex-col items-center gap-10 transition-all duration-500 ease-in-out
                            ${isMenuOpen ? 'h-screen opacity-100' : ' opacity-0'}
                        `}
                        style={{transition:"transform 1s ease, opacity 0.8s ease"}}
                        >
                        <ul className="flex flex-col items-center  mt-25 gap-12 text-2xl ">
                            <li><Menu name="Home" /></li>
                            <li><Menu name="Delícias" /></li>
                            <li><Menu name="Orçamentos" /></li>
                            <li><Menu name="Contatos" /></li>
                        </ul>
                    <button className="flex items-center gap-2 m-14 text-white font-bold text-2xl hover:text-pink-600 transition duration-300 ease-in-out mb-6">
                        <i className='bx bx-store text-4xl'></i>
                        <span className="hover:border-b-2 hover:border-white">Visite-nos</span>
                    </button>
                 </div>
                           
             </Container>
         </header>
         
    )
