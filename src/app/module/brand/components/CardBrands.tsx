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
    <div className="w-full flex justify-center bg-black mt-4" key={id}>
      <div className="w-full lg:w-6/12 h-[98px] flex justify-center items-center">
        <Image src={logo} width={width} height={height} alt="logo" className="object-cover" />
      </div>
    </div>
  );
};
