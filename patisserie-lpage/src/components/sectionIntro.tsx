import Image from "next/image"
import LogoType from "../assets/logoname.png"
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
                </div>

                <Image className="mr-20"
                    src={CarolImg}
                    alt="Carol Picture"
                />
            </Container>
        </section>
    )
}