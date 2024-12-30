"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { BannerSlide } from "@/app/utils/data";
import Image from "next/image";
import styles from "./banner.module.css";
import * as motion from "motion/react-client";

export const Banner = () => {
  // Calculate minimum slides needed for loop
  const minSlidesForLoop = Math.max(
    1.5, // Largest slidesPerView value
    BannerSlide.length
  );

  // Check if we have enough slides for loop
  const shouldEnableLoop = BannerSlide.length >= minSlidesForLoop;

  // Create duplicated slides array if needed
  const slidesData = shouldEnableLoop
    ? BannerSlide
    : [...BannerSlide, ...BannerSlide];

  return (
    <section className="w-full relative" id="home">
      <div className="w-full aspect-[16/9] md:aspect-[21/9] xl:aspect-[21/7]">
        <Swiper
          modules={[Autoplay, Pagination]}
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
          loop={shouldEnableLoop}
          pagination={{
            clickable: true,
            bulletClass: `swiper-pagination-bullet ${styles.paginationBullet}`,
            bulletActiveClass: `swiper-pagination-bullet-active ${styles.paginationBulletActive}`,
          }}
          centeredSlides={true}
          className="h-full w-full"
          watchOverflow={true}
        >
          {slidesData.map((item, index) => (
            <SwiperSlide key={`${item.id}-${index}`}>
              <motion.div
                className="relative w-full h-full"
                initial={{ filter: "blur(10px)", scale: 0 }}
                animate={{ filter: "blur(0px)", scale: 1 }}
                transition={{ duration: 1 }}
              >
                <div className=" relative w-full h-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                    blurDataURL={item.image}
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
