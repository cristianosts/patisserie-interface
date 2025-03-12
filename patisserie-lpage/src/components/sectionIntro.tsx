import Image from "next/image"
import LogoType from "../assets/logoname.png"
import QueroLogo from "../assets/quero.png"
import IfoodLogo from "../assets/ifoodlogo.png"
import CarolImg from "../assets/carol.png"

import { Container } from "./container"

export function SectionIntro() {
    return (
        <section className="w-full h-[612px] bgheader">
            <Container>
                <div className="flex-1 max-w-[500px]">
                    <Image className=""
                        src={LogoType}
                        alt="Logo Name"
                    />

                    <div className="flex justify-center  gap-8 mt-8 mb-24 ml-8">
                        <button className="border-2 border-white rounded-xl p-4 cursor-pointer transition-[0.3s] ease-in-out">
                            <Image className="w-[150px] h-[60px]"
                                src={QueroLogo}
                                alt="Quero Delivery"
                            />
                        </button>
                        <button className="border-2 border-white rounded-xl p-4  cursor-pointer  transition-[0.3s] ease-in-out">
                            <Image className="w-[150px] h-[70px]"
                                src={IfoodLogo}
                                alt="Ifood Delivery"
                            />
                        </button>
                    </div>
                </div>

                <Image className="mr-20"
                    src={CarolImg}
                    alt="Carol Picture"
                />
            </Container>
        </section>
    )
}