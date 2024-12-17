import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Category } from "@/app/utils/data";

export const CardCollection = () => {
  return (
    <div className="grid grid-cols-3">
      {Category.map((item) => (
        <div key={item.id}>
          <div className="relative w-full aspect-[4/4] max-h-[540px]">
            <div className="absolute inset-0">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 33vw"
                priority
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-center bg-gradient-to-t from-black/70 to-transparent p-4">
              <h1 className="font-semibold text-base md:text-lg lg:text-xl xl:text-3xl text-white">
                {item.title}
              </h1>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
