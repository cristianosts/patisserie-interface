import Image from "next/image"
import Logo from "@/assets/logotp.png"
import 'boxicons/css/boxicons.min.css'


import { Menu } from "./menu"
import { Container } from "./container"

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bgheader">
            <Container>
                <div className="flex flex-1 items-center justify-between">
                    <div className="flex items-center gap-14">
                        <Image
                            src={Logo}
                            alt="Logo Image"
                        />

                        <ul className="flex items-center gap-20">
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
                    <i className='bx bx-store  text-4xl'></i>
                    <span className="hover:border-b-2 hover:border-white">Visite-nos</span>
                </button>
            </Container>
        </header>
    )
}