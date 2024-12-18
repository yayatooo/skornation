"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ProductsDummy } from "@/app/utils/data";

export const CardProduct = () => {
  // Calculate if we have enough slides for loop mode
  const minSlides = Math.max(3.5, 2.2, 1.5); // Maximum slidesPerView value
  const hasEnoughSlides = ProductsDummy.length > minSlides;

  return (
    <div className="mt-6">
      <Swiper
        breakpoints={{
          350: { 
            slidesPerView: Math.min(1.5, ProductsDummy.length),
            spaceBetween: 15 
          },
          650: { 
            slidesPerView: Math.min(2.2, ProductsDummy.length),
            spaceBetween: 15 
          },
          768: { 
            slidesPerView: Math.min(3.5, ProductsDummy.length),
            spaceBetween: 15 
          },
        }}
        loop={hasEnoughSlides}
        centeredSlides={hasEnoughSlides}
        slidesPerGroup={1} // Add this to make sliding smoother
        className="w-full"
      >
        {/* Double the slides if we need looping */}
        {[...ProductsDummy, ...(hasEnoughSlides ? ProductsDummy : [])]
          .map((item, index) => (
            <SwiperSlide key={`${item.title}-${index}`}>
              <div className="group flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative w-full aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                    blurDataURL={item.image}
                  />
                </div>

                {/* Content Container */}
                <div className="flex justify-between items-center px-2 py-3">
                  <h2 className="font-semibold text-sm sm:text-base lg:text-lg truncate pr-2">
                    {item.title}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
