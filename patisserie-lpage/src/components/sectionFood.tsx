'use client'; // Indica que este é um Client Component
import { Container } from "./container"
// src/components/SwiperClient.tsx
import React from 'react';
import  Image  from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import cbolo from '@/assets/cbolo.jpg';
import nbolo from '../assets/nbolo.jpg';
import pbolo from '../assets/pbolo.jpg';
import caseirinhos from '../assets/caseirinhos.jpg';
import salgados from '../assets/salgados.jpg';
import { StaticImageData } from "next/image";


interface SwiperClientProps {
    data: { 
        id: string; 
        image: StaticImageData 
    }[];
}

export function SectionFood({ data }: SwiperClientProps) {

    var data = [
        { id: '1', image: cbolo },
        { id: '2', image: nbolo },
        { id: '3', image: pbolo },
        { id: '4', image: caseirinhos },
        { id: '5', image: salgados },
    ];

    return (
        <Swiper className="w-full h-[650px] flex-row justify-center items-center bgsession"
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Pagination, Navigation]}
        >
            {data.map((item) => (

                    <SwiperSlide className=" justify-center"
                    key={item.id}>
                        <div className="rounded-4xl w-[800px] h-[600px] border-2 border-pink-400 pt-12 pl-6 mt-6 ml-[270px] glass">
                            <Image className="rounded-4xl h-[500px]"
                            src={item.image}
                            alt="Item" />
                        </div>
                    </SwiperSlide>
            
            ))}
        </Swiper>
    );
}