"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GallerySlide } from '@/app/utils/data';
import Image from 'next/image';

export const SwiperAbout = () => {
  return (
    <section className='py-4'>
        <div className='w-11/12 mx-auto'>
        <Swiper
          breakpoints={{
            350: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2.3,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 2.3,
              spaceBetween: 26,
            },
          }}
          loop={false}
          centeredSlides={false}
          className="relative w-11/12 h-full"
        >
          
          {GallerySlide.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[211px] overflow-hidden w-full ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
    </section>
  )
}
