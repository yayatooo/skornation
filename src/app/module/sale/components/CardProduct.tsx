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
      <div className="py-8 flex gap-8 justify-end">
        <Swiper
          breakpoints={{
            350: { slidesPerView: 1.2, spaceBetween: 10 },
            768: { slidesPerView: 1, spaceBetween: 32 },
            1024: { slidesPerView: 1.3, spaceBetween: 26 },
          }}
          loop={false}
        >
          {ProductsDummy.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" w-[250px]">
                <div className="relative w-[250px] h-[250px]">
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
      </div>
    </section>
  );
};
