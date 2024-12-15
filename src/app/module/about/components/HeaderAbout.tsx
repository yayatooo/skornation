import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const HeaderAbout = () => {
  const t = useTranslations("AboutPage");

  return (
    <section className="bg-redPrimary pt-4 my-12 xl:my-20 " id="about">
      <div className="w-10/12 mx-auto">
        <div className="text-white">
          <h1 className="font-bold text-lg sm:text-3xl lg:text-4
          xl xl:text-6xl text-center uppercase">
            “{t('Head')}”{" "}
          </h1>
        </div>

        <div className=" py-4 w-full flex justify-center">
          <div className="w-[345px] h-auto lg:w-[620px] lg:h-[420px] xl:w-[900px] xl:h-[620px]">
            <Image
              src="/assets/about-img.png"
              alt="about"
              width={900}
              height={420}
            />
          </div>
        </div>
      </div>
      <div className="relative w-full h-2 xl:h-6">
        <Image
          src="/assets/bottom-header-about.svg"
          alt="fill"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};
