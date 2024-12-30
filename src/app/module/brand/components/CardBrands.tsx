import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";

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
       <motion.div 
        initial={{ filter: "blur(10px)", scale: 0 }}
        animate={{ filter: "blur(0px)", scale: 1 }}
        transition={{ duration: 1 }}
       
       className="group relative w-full">
      <div className="relative w-full aspect-[2/4] bg-gray-100">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, (max-width: 1024px) 25vw, 20vw"
          blurDataURL={image}
        />
      </div>
    </motion.div>
    </>
  );
};
