"use client";
import { Reviews } from "@/app/utils/data";
import { CommentsCard } from "./CommentsCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowRight } from "lucide-react";

export const Comments = () => {
  return (
    <section className="py-6">
      <Swiper
        modules={[Autoplay]}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 24,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 32,
          },
          1024: {
            slidesPerView: 2.3,
            spaceBetween: 26,
          },
        }}
        loop={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <div className="flex gap-2">
          {Reviews.map((data) => (
            <SwiperSlide key={data.id}>
              <CommentsCard user={data.user} comment={data.comment} />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
      <div className="flex gap-2 font-bold text-lg py-2 items-center justify-end cursor-pointer">
        <h4>More Reviews </h4>
        <ArrowRight color="#ec2332" />
      </div>
    </section>
  );
};
