import Image from "next/image";
import React from "react";

interface BrandCardProps {
  id?: number;
  image: string;
  logo: string;
  title: string;
  width: number;
  height: number;
}

export const CardBrands = ({
  id,
  // image,
  // title,
  logo,
  width,
  height,
}: BrandCardProps) => {
  return (
    <>
      <div className="relative w-full h-[130px] lg:h-[350px]">
        <div className="flex justify-center items-center">
          <Image
            src="/assets/nike-lookbook.jpg"
            fill
            alt="lookbook"
            className="object-cover"
          />
        </div>
        <div
          className="absolute inset-0 flex flex-col justify-center items-center bg-redPrimary opacity-60"
          key={id}
        >
          <div className="w-full lg:w-6/12 h-[98px] flex justify-center items-center">
            <Image
              src={logo}
              width={width}
              height={height}
              alt="logo"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
