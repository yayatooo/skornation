import { Brands } from "@/app/utils/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const BrandDetailAbout = () => {
  const t = useTranslations("AboutUs");
  return (
    <section className="bg-redPrimary text-white  text-center p-4 space-y-4 lg:space-y-8 mb-4">
      <div>
        <h1 className="font-semibold text-lg uppercase md:my-4 md:text-4xl md:text-center lg:my-6 lg:text-5xl">
          {t('BrandsProfile')}
        </h1>
      </div>
      <div className="w-10/12 xl:w-8/12 mx-auto grid grid-cols-4 gap-4 md:gap-6 xl:gap-8">
        {Brands.map((item) => (
          <div className="relative w-full aspect-square" key={item.id}>
            <Image
              src={item.logo}
              alt="logo"
              fill
              sizes="(max-width: 768px) 20vw, (max-width: 1280px) 15vw, 10.5vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="text-white font-medium text-sm md:text-xl xl:text-2xl md:w-8/12 md:mx-auto">
        <h1>
          {t('BrandsProfileDescription')}
        </h1>
      </div>
    </section>
  );
};
