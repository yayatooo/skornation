import { Brands } from "@/app/utils/data";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";



export const BrandDetailAbout = () => {
  const t = useTranslations("AboutUs");
  return (
    <section className="bg-redPrimary text-white  text-center px-4 py-4 md:py-12 space-y-4 lg:space-y-8 mb-4">
      <div>
        <h1 className="font-bold text-lg uppercase md:text-4xl md:text-center lg:text-5xl">
          {t("BrandsProfile")}
        </h1>
      </div>
      <div className="w-10/12 xl:w-6/12 mx-auto grid grid-cols-4 gap-4">
        {Brands.map((item) => (
          <div
            className="relative w-full max-w-[120px] aspect-square mx-auto"
            key={item.id}
          >
            <Image
              src={item.logo}
              alt="logo"
              fill
              sizes="(max-width: 768px) 15vw, (max-width: 1280px) 20vw, 10.5vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>

      <div className="text-white font-medium text-sm md:text-xl xl:text-2xl md:w-8/12 md:mx-auto">
        <h1>{t("BrandsProfileDescription")}</h1>
      </div>
    </section>
  );
};
