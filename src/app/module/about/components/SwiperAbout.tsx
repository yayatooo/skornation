"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { GallerySlide } from "@/app/utils/data";
import Image from "next/image";

export const SwiperAbout = () => {
  // Calculate minimum slides needed for loop (at least 4 slides for smooth looping)
  const minSlidesNeeded = 4;

  // Create duplicated slides array if needed
  const slidesData = GallerySlide.length < minSlidesNeeded
    ? [...GallerySlide, ...GallerySlide, ...GallerySlide]  // Triple the slides if needed
    : GallerySlide;

  return (
    <section className="w-full relative">
      <div className="w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[21/7]">
        <Swiper
          breakpoints={{
            350: {
              slidesPerView: Math.min(1.2, slidesData.length),
              spaceBetween: 10,
            },
            768: {
              slidesPerView: Math.min(1.2, slidesData.length),
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: Math.min(1.5, slidesData.length),
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          centeredSlides={true}
          className="h-full w-full"
          watchOverflow={true}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority={index < 2}
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