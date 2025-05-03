import { SectionFood } from "@/components/sectionFood";
import { SectionIntro } from "@/components/sectionIntro";
import { SectionMeeting } from "@/components/sectionMeeting";
import { foodData } from "@/components/foodData"
import { Feedback } from "@/components/sectionFeedback"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>              
        <SectionIntro/>
        <SectionMeeting/>
        <SectionFood data={foodData}/>
        <Feedback/>
        <Footer/>
    </>
  )
}
