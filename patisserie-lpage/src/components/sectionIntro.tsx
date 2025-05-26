import Image from "next/image"
import LogoType from "./assets/logoname.png"
import QueroLogo from "./assets/quero.png"
import IfoodLogo from "./assets/ifoodlogo.png"
import CarolImg from "./assets/carol.png"
   
import { Container } from "./container"

export function SectionIntro() {
    return (
        <section className=" w-full md:h-[612px] bgheader overflow-hidden">
            <Container>
                <div className=" flex-1 max-w-[500px] mt-8 md:mt-0">
                    <Image className="pr-6"
                        src={LogoType}
                        alt="Logo Name"
                    />

                    <div className="flex md:flex-col md:items-center lg:flex-row justify-center gap-3 md:gap-8 mt-8 md:m-4 lg:mb-24 md:ml-8">

                            <a href="https://querodelivery.com/" target="_blank">
                                 <button className="border-2 border-white rounded-xl p-2 md:p-4 cursor-pointer transition-[0.3s] ease-in-out shrink-0">
                                    <Image className=" w-[150px] h-[60px]"
                                        src={QueroLogo}
                                        alt="Quero Delivery"
                                    />
                                </button>
                            </a>
                               
                            <a href="https://www.ifood.com.br/" target="_blank">
                               
                               <button className="border-2 border-white rounded-xl p-2 md:p-4  cursor-pointer  transition-[0.3s] ease-in-out shrink-0">
                                  <Image className="w-[150px] h-[60px] "
                                       src={IfoodLogo}
                                       alt="Ifood Delivery"
                                   /> 
                               </button>
                            </a>
                    </div>
                </div>

                <Image className="lg:mr-20 max-w-full h-auto"
                    src={CarolImg}
                    alt="Carol Picture"
                />
            </Container>
        </section>
    )
}