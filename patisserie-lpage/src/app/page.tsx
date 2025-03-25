import { SectionFood } from "@/components/sectionFood";
import { SectionIntro } from "@/components/sectionIntro";
import { SectionMeeting } from "@/components/sectionMeeting"
import Image from "next/image";

import { register } from "swiper/element/bundle"

register()
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { foodData } from "@/components/foodData";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>              
        <SectionIntro/>
        <SectionMeeting/>
        <SectionFood data={foodData}/>
        <Footer/>
    </>
  );
}
