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
        loop={true}
        centeredSlides={true}
        className="w-full h-full"
      >
        {GallerySlide.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="h-auto overflow-hidden w-full ">
              <Image
                src={item.image}
                alt={item.title}
                width={611}
                height={401}
                className="object-cover w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
