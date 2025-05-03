"use client"
import React from "react"
import { useState, useEffect, useRef } from "react";
import  Image  from "next/image"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'

import { FoodItem, foodData } from "./foodData"


interface SwiperClientProps {
    data: FoodItem[]
}

export function SectionFood({ data }: SwiperClientProps) {
    const swiperRef = useRef<SwiperType | null>(null)
    const [isPlaying, setIsPlaying] = useState(true) // state to autoplay controll


    useEffect(() => {
        const swiper = swiperRef.current

        if (swiper) {
            // Click event on slide
            swiper.on('click', () => {
                setIsPlaying(!isPlaying) // Inverts the auto play state
                if (isPlaying) {
                    swiper.autoplay.stop()
                } else {
                    swiper.autoplay.start()
                }
            });
        }
    }, [isPlaying])


    return (
        <Swiper className="w-full flex justify-center items-center bgsession"
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
        >
            {data.map((item) => (

                    <SwiperSlide className="justify-center"
                    key={item.id}>
                        <div className="flex flex-col md:flex-row justify-between gap-8 items-center text-2xl rounded-4xl w-[90%] md:w-[800px] pt-12 pl-6 mt-6 mx-auto md:ml-auto glass">
                            <Image className="rounded-4xl h-[500px] md:h-[500px] w-auto"
                            src={item.image}
                            alt="Item" />

                            <div className="text-center md:text-left">
                                <h2 className="text-3xl md:text-4xl m-4 md:m-8 font-semibold">{item.title}</h2>

                                <p className="italic m-4 md:m-8">{item.describe}</p>

                                <div className="m-4 md:m-8 text-[16px]">

                                {item.price ? (
                                        <>
                                            Preço: <span className="text-4xl md:text-5xl">{item.price}</span>
                                        </>
                                    ) : (
                                        <>
                                            Tamanho P: <span className="text-4xl md:text-5xl">{item.price1}</span> <br />
                                            Tamanho M: <span className="text-4xl md:text-5xl">{item.price2}</span> <br />
                                            Tamanho G: <span className="text-4xl md:text-5xl">{item.price3}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            
            ))}
        </Swiper>
    )
}