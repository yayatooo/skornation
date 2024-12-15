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
    <section className="py-8">
      <Swiper
        breakpoints={{
          350: { slidesPerView: 1.3, spaceBetween: 10 },
          490: { slidesPerView: 1.7, spaceBetween: 10 },
          650: { slidesPerView: 2.1, spaceBetween: 10 },
          750: { slidesPerView: 2.5, spaceBetween: 10 },
          1024: { slidesPerView: 3.3, spaceBetween: 15 },
        }}
        loop={false}
        // className="relative w-10/12 mx-auto h-full float-right lg:flex lg:float-none lg:container"
        className="w-10/12 h-full "
      >
        {ProductsDummy.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col">
              {/* Image Section */}
              <div className=" relative w-full h-[280px] xl:h-[390px]">
                <Image
                  src={item.image}
                  alt="product"
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* Title and Arrow Section */}
              <div className="flex px-3 xl:pr-3 py-2 justify-between items-center">
                <h2 className="font-semibold text-lg truncate">{item.title}</h2>
                <ArrowRight className="text-redPrimary flex-shrink-0" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
