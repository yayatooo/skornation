"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GallerySlide } from "@/app/utils/data";
import Image from "next/image";

export const SwiperAbout = () => {
  return (
    <section className="my-4">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2.1,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 26,
          },
        }}
        loop={false}
        centeredSlides={false}
        className="relative w-11/12 h-full float-right"
      >
        {GallerySlide.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative h-[211px] sm:h-[380px] overflow-hidden w-full ">
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
    </section>
  );
};
