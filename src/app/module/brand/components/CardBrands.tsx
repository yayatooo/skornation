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
  image,
}: BrandCardProps) => {
  return (
    <>
      <div className="relative w-full h-[240px] lg:h-[320px] xl:h-[420px]">
        <div className="flex justify-center items-center">
          <Image src={image} fill alt="lookbook" className="object-contain" />
        </div>
      </div>
    </>
  );
};
