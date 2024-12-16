import Image from "next/image";
import React from "react";

interface BrandCardProps {
  id?: number;
  image: string;
  // logo: string;
  title: string;
  width: number;
  height: number;
}

export const CardBrands = ({ image,title }: BrandCardProps) => {
  return (
    <>
       <div className="group relative w-full">
      <div className="relative w-full aspect-[2/4] bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
          priority
        />
        {/* {logo && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
            <div className="relative w-1/2 aspect-[3/1]">
              <Image
                src={logo}
                alt={`${title} logo`}
                fill
                className="object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                sizes="20vw"
              />
            </div>
          </div>
        )} */}
      </div>
    </div>
    </>
  );
};
