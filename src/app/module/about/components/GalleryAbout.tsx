// import Image from "next/image";
import React from "react";
import { TittleHeading } from "../../common/ui/TittleHeading";
import { DescriptionHeading } from "../../common/ui/DescriptionHeading";
import { SwiperAbout } from "./SwiperAbout";
import { useTranslations } from "next-intl";

export const GalleryAbout = () => {

  const t = useTranslations('AboutPage')

  return (
    // <section className="pt-28 mini:pt-44 ipad:pt-48 tablet:pt-52">
    <section>
      <div className="w-10/12 text-center lg:text-start flex flex-col justify-end mx-auto py-4">
        <TittleHeading>{t('Title')}</TittleHeading>
        <DescriptionHeading>
          {t('Description')}
        </DescriptionHeading>
      </div>
      <div>
        <SwiperAbout />
      </div>
    </section>
  );
};
