import Image from 'next/image'
import Coment1 from '../components/assets/coments.jpg'
import Coment2 from '../components/assets/coments2.jpg'
import Coment3 from '../components/assets/coments3.jpg'
import Coment4 from '../components/assets/coments4.jpg'

export function Feedback() {
    return (
        <section className="w-full py-12 bgheader flex flex-col items-center justify-center">
            
            <div className='w-full pl-8 md:px-35 mt-4'>
                <h1 className='text-5xl  text-gray-800 mb-8 text-left'>•Nosso Feedback</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2  gap-8 max-w-[1200px] p-4">


                <div >
                    <Image
                        src={Coment1}
                        alt="Coments"
                        className="w-full h-auto rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src={Coment2}
                        alt="Coments"
                        className="w-full h-auto rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src={Coment3}
                        alt='Coments'
                        className="w-full h-auto rounded-xl"
                    />
                </div>
                <div>
                    <Image
                        src={Coment4}
                        alt='Coments'
                        className="w-full h-auto rounded-xl"
                    />
                </div>
            </div>
        </section>
    )
}