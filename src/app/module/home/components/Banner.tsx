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
    <section className="w-full h-[200px] xl:h-[700px]" id="home">
      <div className="w-full h-full">
        <Swiper
          modules={[Autoplay]}
          breakpoints={{
            350: {
              slidesPerView: 1.2,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 1.8,
              spaceBetween: 10,
            },
            1280: {
              slidesPerView: 1.5,
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
              <div className="w-[1675px] h-[1044px] ">
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
