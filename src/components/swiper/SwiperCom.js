"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

import swiperImg1 from "@/assets/banner1.jpg"
import swiperImg2 from "@/assets/banner2.jpg"
import swiperImg3 from "@/assets/banner3.jpg"
import swiperImg4 from "@/assets/banner4.jpg"
import Image from 'next/image';

const SwiperCom = () => {
    return (
        <>
            <Swiper loop={true} navigation={true} modules={[Navigation]} className="mySwiper swiper__container">
                <SwiperSlide>
                    <Image src={swiperImg1} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={swiperImg2} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={swiperImg3} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src={swiperImg3} />
                </SwiperSlide>
            </Swiper>
        </>
    )
}

export default SwiperCom