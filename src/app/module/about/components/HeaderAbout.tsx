import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const HeaderAbout = () => {

  const t = useTranslations('AboutPage')

  return (
    <section className="bg-redPrimary pt-6 h-[213px] lg:h-[350px]" id="about">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div className="text-white">
          <h1 className="font-bold text-2xl lg:text-5xl">{t('Head')}</h1>
          <h1 className="font-bold text-2xl lg:text-5xl">{t('Head2')}</h1>
        </div>
        <div className="w-[93px] h-[38px] lg:w-[200px] lg:h-[80px] relative">
          <Image
            src="/assets/logo-white.png"
            fill={true}
            // sizes="(max-width: 1024px) 120rem, 40vh"
            alt="about"
          />
        </div>
      </div>
      <div className="relative py-3 w-full flex justify-center">
        <div className="w-10/12 max-w-screen-md">
          <Image
            src="/assets/about-img.png"
            alt="about"
            layout="responsive"
            width={345}
            height={211}
          />
        </div>
      </div>
    </section>
  );
};
