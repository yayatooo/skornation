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
    <section className="pt-4">
        <Swiper
          breakpoints={{
            350: { slidesPerView: 1.3, spaceBetween: 10 },
            490: { slidesPerView: 1.7, spaceBetween: 10 },
            650: { slidesPerView: 2.1, spaceBetween: 10 },
            750: { slidesPerView: 2.5, spaceBetween: 32 },
            1024: { slidesPerView: 3.1, spaceBetween: 10 },
          }}
          loop={false}
          className="relative w-11/12 h-full float-right"
        >
          {ProductsDummy.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" w-full">
                <div className="relative w-[250px] h-[250px] sm:w-[280px] sm:h-[280px]">
                  <Image
                    src={item.image}
                    alt="product"
                    fill
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
                <div className="pl-3 pr-5 py-2 flex justify-between items-center">
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <ArrowRight className="text-redPrimary" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
    </section>
  );
};
