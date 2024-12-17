"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { ProductsDummy } from "@/app/utils/data";
import { ArrowRight } from "lucide-react";

export const CardProduct = () => {
  return (
    <div className="mt-6">
      <Swiper
        breakpoints={{
          350: { slidesPerView: 1.5, spaceBetween: 15 },
          650: { slidesPerView: 2.2, spaceBetween: 15 },
          768: { slidesPerView: 3.5, spaceBetween: 15 },
        }}
        loop={true}
        centeredSlides={true}
        className="w-full"
      >
        {ProductsDummy.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group flex flex-col h-full transition-transform duration-300 hover:-translate-y-1">
              {/* Image Container */}
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 480px) 90vw, (max-width: 768px) 45vw, (max-width: 1024px) 30vw, 25vw"
                  priority={item.id <= 2} // Prioritize loading first two images
                />
              </div>

              {/* Content Container */}
              <div className="flex justify-between items-center px-2 py-3">
                <h2 className="font-semibold text-sm sm:text-base lg:text-lg truncate pr-2">
                  {item.title}
                </h2>
                <ArrowRight className="text-redPrimary flex-shrink-0 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
