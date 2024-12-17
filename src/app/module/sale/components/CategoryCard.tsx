"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Category } from "@/app/utils/data";
// import { ArrowRight } from "lucide-react";

export const CardCollection = () => {
  return (
    <Swiper
      breakpoints={{
        350: { slidesPerView: 1.2, spaceBetween: 10 },
        490: { slidesPerView: 1.8, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 12 },
      }}
      loop={true}
      className="w-10/12 mx-auto"
    >
      {Category.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-full aspect-[4/4] max-h-[540px]">
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 33vw"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-t from-black/70 to-transparent p-4">
              <h1 className="font-semibold text-base md:text-lg lg:text-xl xl:text-3xl text-white">
                {item.title}
              </h1>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
