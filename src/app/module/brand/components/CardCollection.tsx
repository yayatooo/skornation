"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { CardModel } from "@/app/utils/data";
import { ArrowRight } from "lucide-react";

export const CardCollection = () => {
  return (
    <Swiper
      breakpoints={{
        350: { slidesPerView: 1.2, spaceBetween: 10 },
        768: { slidesPerView: 3, spaceBetween: 10 },
        1024: { slidesPerView: 3, spaceBetween: 12 },
      }}
      loop={false}
      className="relative w-11/12 h-full float-right"
    >
      {CardModel.map((item) => (
        <SwiperSlide key={item.id}>
          <div className="relative w-full h-[289px]">
            <Image 
              src={item.image} 
              fill 
              alt={item.title} 
              className="object-cover" 
              priority 
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 to-transparent p-4">
              <h1 className="font-semibold text-lg text-white">{item.title}</h1>
              <button className="mt-2 flex items-center gap-2 text-sm text-white hover:underline">
                Shop Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
