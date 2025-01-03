"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { GallerySlide } from "@/app/utils/data";
import * as motion from "motion/react-client";
import styles from "./about.module.css";
import { Pagination } from "swiper/modules";

export const SwiperAbout = () => {
  const minSlidesNeeded = 4;

  
  const slidesData =
    GallerySlide.length < minSlidesNeeded
      ? [...GallerySlide] 
      : GallerySlide;

  return (
    <section className="w-full relative">
    <div className="w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[21/7]">
      <Swiper
        modules={[Pagination]}
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
        pagination={{
          clickable: true,
          bulletClass: `swiper-pagination-bullet ${styles.paginationBullet}`,
          bulletActiveClass: `swiper-pagination-bullet-active ${styles.paginationBulletActive}`,
          el: `.${styles.swiperPagination}`,
        }}
      >
        {slidesData.map((item, index) => (
          <SwiperSlide key={`${item.id}-${index}`}>
            <motion.div
              className="relative w-full h-full"
              initial={{ filter: "blur(6px)" }}
              animate={{ filter: "blur(0px)" }}
              transition={{ duration: 0.5, delay: 1, ease: "linear" }}
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                blurDataURL={item.image}
                className="object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={styles.swiperPagination}></div>
    </div>
  </section>
  );
};
