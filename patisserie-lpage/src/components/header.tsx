import Image from "next/image"
import Logo from "@/assets/logotp.png"

import { Menu } from "./menu"

export function Header() {
    return (
        <header className="flex items-center w-full h-20 bgheader">
            <div className="w-full max-w-[1246px] px-[15px] m-auto">
                <div>
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
            </div>
        </header>
    )
}