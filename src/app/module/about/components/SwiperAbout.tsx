"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GallerySlide } from "@/app/utils/data";
import Image from "next/image";

export const SwiperAbout = () => {
  return (
    <section className="w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[21/7]">
      <Swiper
        breakpoints={{
          350: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
        }}
        loop={true}
        centeredSlides={true}
        className="w-full h-full"
      >
        {GallerySlide.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="relative w-full h-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                priority
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
