'use client'; // Indica que este é um Client Component
import { Container } from "./container"
// src/components/SwiperClient.tsx
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import  Image  from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay, Swiper as SwiperType } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { FoodItem, foodData } from "./foodData";


interface SwiperClientProps {
    data: FoodItem[]
}

export function SectionFood({ data }: SwiperClientProps) {
    const swiperRef = useRef<SwiperType | null>(null)
    const [isPlaying, setIsPlaying] = useState(true); // Estado para controlar o autoplay


    useEffect(() => {
        const swiper = swiperRef.current;

        if (swiper) {
            // Click event on slide
            swiper.on('click', () => {
                setIsPlaying(!isPlaying); // Inverts the auto play state
                if (isPlaying) {
                    swiper.autoplay.stop();
                } else {
                    swiper.autoplay.start();
                }
            });
        }
    }, [isPlaying]); //state


    return (
        <Swiper className="w-full h-[700px] flex justify-center items-center bgsession"
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
                        <div className="flex justify-between gap-8 items-center text-2xl   rounded-4xl w-[800px] [600px] pt-12 pl-6 mt-6 ml-[270px] glass">
                            <Image className="rounded-4xl h-[500px]"
                            src={item.image}
                            alt="Item" />

                            <div className="">
                                <h2 className="text-4xl m-8 font-semibold">{item.title}</h2>

                                <p className="italic text-left m-8">{item.describe}</p>

                                <div className="m-8 text-[16px]">

                                {item.price ? (
                                        <>
                                            Preço: <span className="text-5xl">{item.price}</span>
                                        </>
                                    ) : (
                                        <>
                                            Tamanho P: <span className="text-5xl">{item.price1}</span> <br />
                                            Tamanho M: <span className="text-5xl">{item.price2}</span> <br />
                                            Tamanho G: <span className="text-5xl">{item.price3}</span>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
            
            ))}
        </Swiper>
    );
}