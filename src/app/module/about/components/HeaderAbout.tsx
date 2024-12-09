import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export const HeaderAbout = () => {

  const t = useTranslations('AboutPage')

  return (
    <section className="bg-redPrimary pt-6 h-[213px] lg:h-[320px]">
      <div className="w-10/12 mx-auto flex items-center justify-between">
        <div className="text-white">
          <h1 className="font-bold text-2xl">{t('Head')}</h1>
          <div className="">
            <Image
              src="/assets/greatness.png"
              width={150}
              height={29}
              alt="word"
            />
          </div>
        </div>
        <div>
          <Image
            src="/assets/logo-white.png"
            width={93}
            height={38}
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
