"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { BannerSlide } from "@/app/utils/data";
import Image from "next/image";

export const Banner = () => {
  return (
    <section className="w-full h-[300px]">
      <div className="w-full h-full">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 1.3,
              spaceBetween: 26,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          className="relative w-full h-full"
        >
          
          {BannerSlide.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative h-[300px] overflow-hidden w-full ">
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
  );
};
