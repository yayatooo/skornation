"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BannerSlide } from "@/app/utils/data";
import Image from "next/image";
import styles from "./Banner.module.css";

export const Banner = () => {
  return (
    <section className="w-full relative" id="home">
      <div className="w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[21/7]">
        <Swiper
          modules={[Autoplay, Pagination]}
          breakpoints={{
            350: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            768: {
              slidesPerView: 1.4,
              spaceBetween: 32,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 10,
            },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${styles.paginationBullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles.paginationBulletActive}`,
          }}
          centeredSlides={true}
          className="h-full w-full"
        >
          {BannerSlide.map((item) => (
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
      </div>
    </section>
  );
};
